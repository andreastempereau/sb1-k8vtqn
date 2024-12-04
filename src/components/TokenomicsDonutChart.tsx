import React from 'react';

export function TokenomicsDonutChart() {
  const sections = [
    { label: 'Public Sale', percentage: 30, color: 'bg-blue-500' },
    { label: 'Team', percentage: 20, color: 'bg-green-500' },
    { label: 'Treasury', percentage: 20, color: 'bg-purple-500' },
    { label: 'Ecosystem', percentage: 15, color: 'bg-orange-500' },
    { label: 'Advisors', percentage: 15, color: 'bg-red-500' }
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="relative w-64 h-64">
        {sections.map((section, index) => {
          const rotation = index * (360 / sections.length);
          const skew = (360 / sections.length);
          
          return (
            <div
              key={section.label}
              className={`absolute top-0 left-0 w-32 h-32 ${section.color} origin-bottom-right`}
              style={{
                transform: `rotate(${rotation}deg) skew(${skew}deg)`
              }}
            />
          );
        })}
        
        {/* Center hole for donut */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full" />
        
        {/* Legend */}
        <div className="absolute -right-48 top-1/2 transform -translate-y-1/2 space-y-2">
          {sections.map(section => (
            <div key={section.label} className="flex items-center">
              <div className={`w-4 h-4 ${section.color} mr-2`} />
              <span className="text-sm">{section.label} ({section.percentage}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}