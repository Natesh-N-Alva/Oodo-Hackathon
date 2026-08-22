import React from 'react';
import { Plane } from 'lucide-react';

export default function StatusDot({ status, size = 'md' }) {
  const dimensions = size === 'sm' ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5';
  
  if (status === 'present') {
    return <div className={`${dimensions} rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]`} title="Present" />;
  }
  if (status === 'absent') {
    return <div className={`${dimensions} rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]`} title="Absent" />;
  }
  if (status === 'on-leave') {
    return (
      <div className={`${dimensions} rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)] flex items-center justify-center`} title="On Leave">
         <Plane size={size === 'sm' ? 8 : 10} className="text-white fill-white" />
      </div>
    );
  }
  return <div className={`${dimensions} rounded-full bg-gray-500`} />;
}