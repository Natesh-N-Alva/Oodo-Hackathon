import React from 'react';
import { Check, X } from 'lucide-react';

export default function ApproveRejectButtons({ onApprove, onReject, disabled }) {
  return (
    <div className="flex items-center gap-2 justify-end">
      <button 
        onClick={onReject}
        disabled={disabled}
        className="w-8 h-8 rounded-full border border-red-500/30 text-red-500 hover:bg-red-500/10 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <X size={16} />
      </button>
      <button 
        onClick={onApprove}
        disabled={disabled}
        className="w-8 h-8 rounded-full border border-green-500/30 text-green-500 hover:bg-green-500/10 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <Check size={16} />
      </button>
    </div>
  );
}