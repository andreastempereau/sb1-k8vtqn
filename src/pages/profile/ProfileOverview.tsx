import React from 'react';
import { User, Calendar, Wallet } from 'lucide-react';

export function ProfileOverview() {
  const user = {
    fullName: 'John Doe',
    username: 'johndoe',
    email: 'john.doe@example.com',
    joinDate: '2024-01-15',
    walletAddress: '0x1234...5678',
    totalInvested: 25000,
    activeInvestments: 3,
    kycStatus: 'verified'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Profile Overview</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Edit Profile
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              {user.fullName.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{user.fullName}</h2>
              <p className="text-gray-500">@{user.username}</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Member Since</p>
                <p className="font-medium text-gray-900">
                  {new Date(user.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Wallet className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Wallet Address</p>
                <p className="font-medium text-gray-900">{user.walletAddress}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">KYC Status</p>
                <p className="font-medium text-gray-900 capitalize">{user.kycStatus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Invested</h3>
          <p className="text-3xl font-bold text-blue-500">
            ${user.totalInvested.toLocaleString()}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Investments</h3>
          <p className="text-3xl font-bold text-blue-500">{user.activeInvestments}</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Portfolio Value</h3>
          <p className="text-3xl font-bold text-blue-500">
            ${(user.totalInvested * 1.15).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}