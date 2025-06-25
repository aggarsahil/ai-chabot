import { useState } from 'react';
import './App.css';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  onLogout: () => void;
}

function Sidebar({ sidebarOpen, onLogout }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('dashboard');

  const navItems = [
    {
      section: 'Main',
      items: [
        { id: 'dashboard', icon: '📊', text: 'Dashboard', badge: null },
        { id: 'chat', icon: '💬', text: 'AI Chat', badge: '3' },
        { id: 'history', icon: '📝', text: 'Chat History', badge: null },
      ]
    },
    {
      section: 'Tools',
      items: [
        { id: 'analytics', icon: '📈', text: 'Analytics', badge: null },
        { id: 'reports', icon: '📄', text: 'Reports', badge: null },
        { id: 'integrations', icon: '🔗', text: 'Integrations', badge: 'New' },
      ]
    },
    {
      section: 'Settings',
      items: [
        { id: 'preferences', icon: '⚙️', text: 'Preferences', badge: null },
        { id: 'team', icon: '👥', text: 'Team', badge: null },
        { id: 'billing', icon: '💳', text: 'Billing', badge: null },
      ]
    }
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  if (!sidebarOpen) {
    return <div className="sidebar closed"></div>;
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-title">Aiworksquad</div>
        <div className="sidebar-subtitle">AI-Powered Workspace</div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="nav-section">
            <div className="nav-section-title">{section.section}</div>
            {section.items.map((item) => (
              <div
                key={item.id}
                className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                onClick={() => handleItemClick(item.id)}
              >
                <span className="nav-item-icon">{item.icon}</span>
                <span className="nav-item-text">{item.text}</span>
                {item.badge && (
                  <span className="nav-item-badge">{item.badge}</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">N</div>
          <div className="user-info">
            <div className="user-name">user</div>
            <div className="user-status">Online</div>
          </div>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          🚪 Sign Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;