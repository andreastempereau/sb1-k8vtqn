import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Settings, LogOut, Bell, Wallet, Building, SwitchCamera } from 'lucide-react';
import { useClickAway } from '../hooks/useClickAway';

export function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyProfile, setIsCompanyProfile] = useState(false);
  const ref = useClickAway(() => setIsOpen(false));
  const navigate = useNavigate();

  const handleProfileSwitch = () => {
    setIsCompanyProfile(!isCompanyProfile);
    setIsOpen(false);
    // Redirect to appropriate page based on profile type
    if (!isCompanyProfile) {
      navigate('/profile/projects');
    } else {
      navigate('/profile');
    }
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          {isCompanyProfile ? (
            <Building className="w-4 h-4 text-white" />
          ) : (
            <span className="text-white font-medium">JD</span>
          )}
        </div>
        <span className="text-sm font-medium text-gray-700">
          {isCompanyProfile ? 'Company Name' : 'John Doe'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50">
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-medium text-gray-900">
              {isCompanyProfile ? 'Company Name' : 'John Doe'}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {isCompanyProfile ? 'company@example.com' : 'john.doe@example.com'}
            </p>
          </div>

          <div className="py-2">
            {isCompanyProfile ? (
              <Link
                to="/profile/projects"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <Building className="w-4 h-4 mr-3" />
                Project Management
              </Link>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-4 h-4 mr-3" />
                  Your Profile
                </Link>
                <Link
                  to="/profile/wallet"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <Wallet className="w-4 h-4 mr-3" />
                  Wallet
                </Link>
                <Link
                  to="/profile/notifications"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <Bell className="w-4 h-4 mr-3" />
                  Notifications
                </Link>
                <Link
                  to="/profile/settings"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </Link>
              </>
            )}
          </div>

          <div className="border-t py-2">
            <button
              onClick={handleProfileSwitch}
              className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <SwitchCamera className="w-4 h-4 mr-3" />
              Switch to {isCompanyProfile ? 'Investor' : 'Company'} Profile
            </button>
            <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <LogOut className="w-4 h-4 mr-3" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}