import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import LoginPage from './LoginPage';
import './App.css';
import logo from './aiworksquad-logo.png';

function ChatbotPage({ department, setDepartment, onLogout }: { department: string; setDepartment: (d: string) => void, onLogout: () => void }) {
  const [input, setInput] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [history, setHistory] = useState<{ text: string; sender: string }[]>([
    { text: 'Hello, how can I help you today?', sender: 'bot' },
    { text: 'Hello', sender: 'user' },
  ]);
  const placeholder = department === 'Sales' ? 'Enter your sales query here...' : 'Enter your marketing query here...';

  const handleSend = () => {
    if (!input.trim()) return;
    setHistory([...history, { text: input, sender: 'user' }, { text: 'The Chatbot is processing your query...', sender: 'bot' }]);
    setInput('');
  };

  const handleQuickAction = (text: string) => {
    setInput(text);
  };

  return (
    <div className="main-layout">
      <Sidebar onLogout={onLogout} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="main-content">
        <header className="main-header">
          <button className="main-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Toggle sidebar">
            <div className="main-menu-icon">☰</div>
          </button>
          <div><img src={logo} alt="aiworksquad" style={{ width: '200px', height: '70px', display: 'flex', alignItems: 'left'}}/></div>
          {/* <div className="main-header-logo">Aiworksquad</div> */}
          <div className="main-header-dept font-black">
            <label htmlFor="department">Department:</label>
            <select id="department" value={department} onChange={e => setDepartment(e.target.value)}>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
            </select>
          </div>
          <div className="main-header-user">user</div>
        </header>
        <div className="chat-area">
          <div className="chat-history-area">
            {history.map((msg, idx) => (
              <div key={idx} className={`chat-bubble ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>
          <div className="chat-input-area">
            <input
              type="text"
              placeholder={placeholder}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
      </div>
  );
}

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [department, setDepartment] = useState('Marketing');
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/');
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <ChatbotPage department={department} setDepartment={setDepartment} onLogout={handleLogout} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
      <Route path="*" element={<Navigate to={isLoggedIn ? '/' : '/login'} replace />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
