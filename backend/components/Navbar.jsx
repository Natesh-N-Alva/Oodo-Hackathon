import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, Square, RefreshCw } from 'lucide-react';

export default function Navbar() {
  const { user, role, isCheckedIn, checkInTime, toggleCheckIn, logout, toggleRole } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Employees', path: '/employees' },
    { name: 'Attendance', path: '/attendance' },
    { name: 'Time Off', path: '/time-off' },
  ];

  return (
    <nav className="h-16 border-b border-border bg-panel flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 font-bold text-lg cursor-pointer" onClick={() => navigate('/employees')}>
          <Square className="w-6 h-6 text-primary fill-primary" />
          <span>Dayflow</span>
        </div>
        <div className="flex gap-6">
          {navItems.map(item => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors border-b-2 py-5 ${
                  isActive ? 'border-primary text-white' : 'border-transparent text-gray-400 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6 relative">
        <button onClick={toggleRole} className="text-xs text-gray-500 hover:text-white flex items-center gap-1" title="Dev Tool: Toggle Role">
          <RefreshCw size={12} /> {role}
        </button>
        
        <div className="flex items-center gap-2">
          {isCheckedIn && checkInTime && (
            <span className="text-xs text-gray-400">Since {checkInTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          )}
          <button 
            onClick={toggleCheckIn}
            className={`w-3 h-3 rounded-full transition-colors shadow-sm ${isCheckedIn ? 'bg-green-500 shadow-green-500/50' : 'bg-red-500 shadow-red-500/50'}`}
            title={isCheckedIn ? "Checked In - Click to Check Out" : "Checked Out - Click to Check In"}
          />
        </div>

        <div className="relative">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-8 h-8 rounded bg-border flex items-center justify-center overflow-hidden border border-gray-600 hover:border-primary transition-colors"
          >
            {user?.avatar ? <img src={user.avatar} alt="avatar" /> : <User className="w-5 h-5 text-gray-400" />}
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-panel border border-border rounded-lg shadow-xl py-1">
              <button 
                onClick={() => { setDropdownOpen(false); navigate('/profile'); }}
                className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-border flex items-center gap-2"
              >
                <User size={16} /> My Profile
              </button>
              <button 
                onClick={() => { setDropdownOpen(false); logout(); navigate('/signin'); }}
                className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-border flex items-center gap-2"
              >
                <LogOut size={16} /> Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}