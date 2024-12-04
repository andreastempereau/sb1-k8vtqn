import React from 'react';

export function VestingScheduleChart() {
  return (
    <div className="w-full bg-white p-4 rounded-lg">
      <div className="relative h-60">
        {/* Linear Vesting Line */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full h-1 bg-blue-500 transform -rotate-[15deg] origin-left" />
        </div>

        {/* Cliff Vesting Line */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-1/3 h-1 bg-green-500" />
          <div className="w-2/3 h-1 bg-green-500 transform -rotate-[30deg] origin-left" />
        </div>

        {/* Milestone Vesting Steps */}
        <div className="absolute inset-0 flex items-end justify-between px-4">
          <div className="h-1/4 w-1 bg-purple-500" />
          <div className="h-2/4 w-1 bg-purple-500" />
          <div className="h-3/4 w-1 bg-purple-500" />
          <div className="h-full w-1 bg-purple-500" />
        </div>

        {/* Labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-gray-600">
          <span>TGE</span>
          <span>6 months</span>
          <span>12 months</span>
        </div>

        {/* Legend */}
        <div className="absolute top-0 right-0 space-y-2 text-sm">
          <div className="flex items-center">
            <div className="w-4 h-1 bg-blue-500 mr-2" />
            <span>Linear</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-green-500 mr-2" />
            <span>Cliff</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-1 bg-purple-500 mr-2" />
            <span>Milestone</span>
          </div>
        </div>
      </div>
    </div>
  );
}