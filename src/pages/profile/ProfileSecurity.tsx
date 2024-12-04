import React from 'react';
import { Shield, Smartphone, Key } from 'lucide-react';

export function ProfileSecurity() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Security Settings</h1>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Security Status</h2>
                <p className="text-sm text-gray-500">Your account is well-protected</p>
              </div>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Secure
            </span>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500">Add an extra layer of security</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Enable
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Key className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Password</p>
                  <p className="text-sm text-gray-500">Last changed 30 days ago</p>
                </div>
              </div>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Change
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              {
                action: 'Login',
                device: 'Chrome on Windows',
                location: 'New York, US',
                date: '2024-02-20 14:30'
              },
              {
                action: 'Password Changed',
                device: 'Chrome on Windows',
                location: 'New York, US',
                date: '2024-01-21 09:15'
              },
              {
                action: 'Login',
                device: 'Safari on iPhone',
                location: 'New York, US',
                date: '2024-01-20 18:45'
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">
                    {activity.device} • {activity.location}
                  </p>
                </div>
                <span className="text-sm text-gray-500">{activity.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Connected Devices</h2>
          <div className="space-y-4">
            {[
              {
                name: 'Windows PC',
                browser: 'Chrome',
                lastActive: 'Active now'
              },
              {
                name: 'iPhone 13',
                browser: 'Safari',
                lastActive: 'Last active 2 days ago'
              }
            ].map((device, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-600 text-lg">{device.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{device.name}</p>
                    <p className="text-sm text-gray-500">
                      {device.browser} • {device.lastActive}
                    </p>
                  </div>
                </div>
                <button className="text-sm text-red-600 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}