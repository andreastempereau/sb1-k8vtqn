import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProfileSidebar } from '../components/ProfileSidebar';

export function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        <ProfileSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}