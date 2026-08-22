import React from 'react';

export default function SalaryComponentRow({ name, description, amount, percentage, onAmountChange, onPercentageChange, isReadOnly, isBasic }) {
  return (
    <div className="flex items-start justify-between py-4 border-b border-border gap-4">
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-200">{name}</h4>
        <p className="text-xs text-gray-500 mt-1 max-w-md">{description}</p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex items-center border border-border rounded bg-app px-3 py-1.5 focus-within:border-primary transition-colors">
          <span className="text-gray-500 mr-2">₹</span>
          <input 
            type="number" 
            value={amount || ''} 
            onChange={(e) => onAmountChange(Number(e.target.value))}
            disabled={isReadOnly}
            className="w-24 text-right text-sm text-gray-200 disabled:opacity-50"
          />
        </div>
        <div className="flex items-center border border-border rounded bg-app px-3 py-1.5 focus-within:border-primary transition-colors">
          <input 
            type="number" 
            value={percentage || ''} 
            onChange={(e) => onPercentageChange(Number(e.target.value))}
            disabled={isReadOnly}
            className="w-16 text-right text-sm text-gray-200 disabled:opacity-50"
          />
          <span className="text-gray-500 ml-2">%</span>
        </div>
      </div>
    </div>
  );
}