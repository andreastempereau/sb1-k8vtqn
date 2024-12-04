import React from 'react';
import { Bell, Mail, MessageSquare } from 'lucide-react';

export function ProfileNotifications() {
  const notifications = [
    {
      id: 1,
      type: 'investment',
      title: 'Investment Successful',
      message: 'Your investment in DefiChain (DFX) has been confirmed.',
      date: '2024-02-20',
      read: false
    },
    {
      id: 2,
      type: 'system',
      title: 'Security Alert',
      message: 'New login detected from Chrome on Windows.',
      date: '2024-02-19',
      read: true
    },
    {
      id: 3,
      type: 'update',
      title: 'KYC Verified',
      message: 'Your KYC verification has been approved.',
      date: '2024-02-18',
      read: true
    }
  ];

  const preferences = {
    email: {
      investments: true,
      projectUpdates: true,
      security: true,
      marketing: false
    },
    push: {
      investments: true,
      projectUpdates: false,
      security: true,
      marketing: false
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Notifications</h2>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg ${
                  notification.read ? 'bg-gray-50' : 'bg-blue-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full ${
                      notification.read ? 'bg-gray-100' : 'bg-blue-100'
                    } flex items-center justify-center`}>
                      <Bell className={`w-4 h-4 ${
                        notification.read ? 'text-gray-500' : 'text-blue-500'
                      }`} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{notification.title}</p>
                      <p className="text-sm text-gray-500">{notification.message}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(notification.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mail className="w-5 h-5 text-gray-400" />
                <h3 className="text-base font-medium text-gray-900">Email Notifications</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(preferences.email).map(([key, enabled]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 capitalize">{key}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        onChange={() => {}}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="w-5 h-5 text-gray-400" />
                <h3 className="text-base font-medium text-gray-900">Push Notifications</h3>
              </div>
              <div className="space-y-4">
                {Object.entries(preferences.push).map(([key, enabled]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 capitalize">{key}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        onChange={() => {}}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}