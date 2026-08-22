import React from 'react';
import { format, startOfYear, addMonths, getDaysInMonth, startOfMonth, getDay, isSameDay, parseISO } from 'date-fns';
import { mockHolidays } from '../data/mockHolidays';

export default function TimeOffCalendar({ requests }) {
  const yearStart = startOfYear(new Date(2026, 0, 1));
  const months = Array.from({ length: 12 }, (_, i) => addMonths(yearStart, i));

  const getDayStatus = (date) => {
    if (mockHolidays.some(h => isSameDay(parseISO(h.date), date))) return 'holiday';
    if (isSameDay(new Date(), date)) return 'today';
    
    for (const req of requests) {
       const start = parseISO(req.startDate);
       const end = parseISO(req.endDate);
       if (date >= start && date <= end) {
         return req.status === 'Approved' ? 'approved' : req.status === 'Pending' ? 'pending' : 'rejected';
       }
    }
    return null;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'bg-green-500/20 border-green-500/50';
      case 'pending': return 'bg-amber-500/20 border-amber-500/50 border-dashed';
      case 'rejected': return 'bg-red-500/20 border-red-500/50';
      case 'holiday': return 'bg-purple-500/20 text-purple-300';
      case 'today': return 'border border-primary text-primary font-bold';
      default: return 'hover:bg-border text-gray-400';
    }
  };

  return (
    <div className="bg-panel border border-border rounded-lg p-6">
      <div className="flex items-center gap-4 mb-6 text-xs">
        <span className="font-semibold text-gray-300 mr-2">Legend:</span>
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-green-500/20 border border-green-500/50 rounded-sm"></div> Validated</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-amber-500/20 border border-amber-500/50 border-dashed rounded-sm"></div> In progress</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500/20 border border-red-500/50 rounded-sm"></div> Refused</div>
        <div className="flex items-center gap-2"><div className="w-3 h-3 bg-purple-500/20 rounded-sm"></div> Public holidays</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {months.map(month => (
          <div key={month.toISOString()} className="space-y-2">
            <h4 className="text-sm font-medium text-gray-200 text-center">{format(month, 'MMMM')}</h4>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {['S','M','T','W','T','F','S'].map((d,i) => <div key={i} className="text-gray-500 py-1">{d}</div>)}
              {Array.from({ length: getDay(startOfMonth(month)) }).map((_, i) => <div key={`empty-${i}`} />)}
              {Array.from({ length: getDaysInMonth(month) }).map((_, i) => {
                const date = new Date(month.getFullYear(), month.getMonth(), i + 1);
                const status = getDayStatus(date);
                return (
                  <div key={i} className={`py-1 rounded-sm border border-transparent ${getStatusColor(status)}`}>
                    {i + 1}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}