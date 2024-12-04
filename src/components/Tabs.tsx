import React from 'react';
import classNames from 'classnames';

interface Tab {
  id: string;
  label: string;
  count: number;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (tabId: string) => void;
}

export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={classNames(
              'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm',
              {
                'border-blue-500 text-blue-600': activeTab === tab.id,
                'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300':
                  activeTab !== tab.id
              }
            )}
          >
            {tab.label}
            <span
              className={classNames(
                'ml-2 py-0.5 px-2.5 rounded-full text-xs font-medium',
                {
                  'bg-blue-100 text-blue-600': activeTab === tab.id,
                  'bg-gray-100 text-gray-600': activeTab !== tab.id
                }
              )}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}