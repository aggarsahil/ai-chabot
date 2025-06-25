import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './aiworksquad-logo.png'; // Place your logo in src or public and adjust the path
// import visilyLogo from './visily-logo.png'; // Place the Visily logo in src or public and adjust the path
import './App.css';

const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'user123' && password === 'pass123') {
      setError('');
      onLogin();
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Centered card with logo and all content */}
      <div className="bg-gray-900 rounded-lg shadow-lg flex flex-col items-center justify-center p-10 w-full max-w-md min-h-[480px]">
        <img src={logo} alt="Aiworksquad Logo" className="h-16 w-auto mb-6" />
        <h2 className="text-2xl font-bold text-gray-100 text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-400 mb-8">Sign in to continue to Aiworksquad.</p>
        <form onSubmit={handleSubmit} className="space-y-5 w-full flex flex-col items-center">
          <div className="w-100 flex flex-col  items-center">
            <div className="flex items-center border border-gray-700  rounded px-3 py-2 bg-transparent w-full">
              <span className="text-gray-400 mr-2">✉️</span>
              <input
                type="text"
                placeholder="Email"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="bg-transparent  outline-none text-white flex-1 placeholder-gray-400 text-center"
                autoComplete="username"
              />
            </div>
          </div>
          <div className="w-100 flex flex-col items-center">
            <div className="flex items-center border border-gray-700 rounded px-3 py-2 bg-transparent w-full">
              <span className="text-gray-400 mr-2">🔒</span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="bg-transparent outline-none text-white flex-1 placeholder-gray-400 text-center"
                autoComplete="current-password"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full gap-2">
            <label className="flex items-center text-gray-300">
              <input
                type="checkbox"
                checked={remember}
                onChange={e => setRemember(e.target.checked)}
                className="mr-2 accent-blue-500"
              />
              Remember me
            </label>
            <Link to="#" className="text-gray-400 hover:underline">Forgot password?</Link>
          </div>
          {error && <div className="text-red-500 text-center text-sm w-full">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded mt-2 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
      {/* Footer */}
      <footer className="flex flex-col items-center justify-center py-4 text-gray-400 text-sm">
        {/* <div className="flex items-center mb-1">*/}
          <span>Made with</span>
          {/* <img src={visilyLogo} alt="Visily Logo" className="h-4 w-4 mx-1" />
          <span>Visily</span> */}
        {/* </div> */}
        <div>2023 AiworkSquad.</div>
      </footer>
    </div>
  );
};

export default LoginPage; 