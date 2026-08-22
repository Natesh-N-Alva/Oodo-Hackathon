import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusDot from './StatusDot';
import { User } from 'lucide-react';

export default function EmployeeCard({ employee }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/employees/${employee.id}`)}
      className="bg-panel border border-border rounded-lg p-5 flex flex-col items-center cursor-pointer hover:border-gray-600 transition-colors group relative"
    >
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded bg-border flex items-center justify-center border border-gray-700">
           {employee.avatar ? <img src={employee.avatar} alt={employee.name} className="w-full h-full rounded object-cover" /> : <User className="w-8 h-8 text-gray-400" />}
        </div>
        <div className="absolute -top-1 -right-1 bg-panel rounded-full p-0.5">
          <StatusDot status={employee.status} />
        </div>
      </div>
      <h3 className="font-medium text-gray-100 group-hover:text-primary transition-colors">{employee.name}</h3>
      <p className="text-xs text-gray-500 mt-1">{employee.title || employee.department}</p>
    </div>
  );
}