import React from 'react';
import { format } from 'date-fns';
import { Bell, AlertTriangle, RefreshCw, Info } from 'lucide-react';
import { announcements } from '../data/announcements';

export function AnnouncementsPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'important':
        return <AlertTriangle className="w-6 h-6 text-red-500" />;
      case 'maintenance':
        return <RefreshCw className="w-6 h-6 text-yellow-500" />;
      default:
        return <Info className="w-6 h-6 text-blue-500" />;
    }
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'important':
        return 'bg-red-100 text-red-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="border-b pb-8">
        <div className="flex items-center space-x-3">
          <Bell className="w-8 h-8 text-blue-500" />
          <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
        </div>
        <p className="mt-2 text-gray-600">Important updates and announcements about our platform</p>
      </div>

      <div className="space-y-6">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-start space-x-4">
                {getIcon(announcement.type)}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">{announcement.title}</h2>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeStyles(announcement.type)}`}>
                      {announcement.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{announcement.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {format(new Date(announcement.date), 'MMMM d, yyyy')}
                    </span>
                    {announcement.link && (
                      <a
                        href={announcement.link}
                        className="text-blue-500 hover:text-blue-600 text-sm font-medium"
                      >
                        Learn more →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}