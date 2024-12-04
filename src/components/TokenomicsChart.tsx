import React from 'react';

interface TokenomicsChartProps {
  tokenomics: {
    category: string;
    percentage: number;
  }[];
}

export function TokenomicsChart({ tokenomics }: TokenomicsChartProps) {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-red-500',
    'bg-indigo-500',
  ];

  return (
    <div className="space-y-4">
      {tokenomics.map((item, index) => (
        <div key={item.category}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{item.category}</span>
            <span className="text-sm font-medium text-gray-700">{item.percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full ${colors[index % colors.length]}`}
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}