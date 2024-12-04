import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Wallet, Bell, Settings, Shield, History } from 'lucide-react';
import classNames from 'classnames';

export function ProfileSidebar() {
  const links = [
    { to: '/profile', icon: User, label: 'Overview', end: true },
    { to: '/profile/wallet', icon: Wallet, label: 'Wallet' },
    { to: '/profile/investments', icon: History, label: 'Investments' },
    { to: '/profile/notifications', icon: Bell, label: 'Notifications' },
    { to: '/profile/security', icon: Shield, label: 'Security' },
    { to: '/profile/settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <nav className="w-64 space-y-1">
      {links.map(({ to, icon: Icon, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            classNames(
              'flex items-center px-4 py-2 text-sm font-medium rounded-lg',
              {
                'bg-blue-50 text-blue-700': isActive,
                'text-gray-700 hover:bg-gray-50': !isActive
              }
            )
          }
        >
          <Icon className="w-5 h-5 mr-3" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}