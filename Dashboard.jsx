import React from 'react';
import { User, Clock, CalendarDays, LogOut, Bell } from 'lucide-react';

const QuickAccessCard = ({ icon: Icon, title, color }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer flex flex-col items-center group">
    <div className={`p-4 rounded-full ${color} mb-4 group-hover:scale-110 transition-transform`}>
      <Icon size={32} className="text-white" />
    </div>
    <h3 className="font-bold text-gray-700 text-lg">{title}</h3>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Dayflow
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <Bell className="text-gray-400 cursor-pointer" size={20} />
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-gray-800">John Doe</p>
              <p className="text-xs text-gray-500">Employee #0012</p>
            </div>
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" 
              className="w-10 h-10 rounded-full border-2 border-purple-100" 
              alt="Profile"
            />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-8">Quick Access</h2>
        
        {/* Grid Layout matching wireframe */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <QuickAccessCard icon={User} title="My Profile" color="bg-blue-500" />
          <QuickAccessCard icon={Clock} title="Attendance" color="bg-emerald-500" />
          <QuickAccessCard icon={CalendarDays} title="Leave Requests" color="bg-amber-500" />
          <QuickAccessCard icon={LogOut} title="Logout" color="bg-rose-500" />
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
            <button className="text-sm text-purple-600 font-semibold hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            {[
              { text: "Checked in for work today", time: "09:00 AM", status: "Success" },
              { text: "Leave request 'Sick Leave' approved", time: "Yesterday", status: "Approved" },
              { text: "Checked out of work", time: "2 days ago", status: "Neutral" }
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <p className="text-gray-700 font-medium">{activity.text}</p>
                </div>
                <span className="text-sm text-gray-400 italic">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;