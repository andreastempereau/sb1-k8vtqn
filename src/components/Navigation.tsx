import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Home, TrendingUp, Newspaper, Bell, BookOpen, Rocket } from 'lucide-react';
import { ProfileButton } from './ProfileButton';

export function Navigation() {
  const navItems = [
    { to: '/', icon: Home, label: 'ORCAS' },
    { to: '/token-launches', icon: Rocket, label: 'Token Launches' },
    { to: '/get-started', icon: BookOpen, label: 'Get Started' },
    { to: '/trending', icon: TrendingUp, label: 'Trending' },
    { to: '/news', icon: Newspaper, label: 'Crypto News' },
    { to: '/announcements', icon: Bell, label: 'Announcements' }
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            {navItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  classNames(
                    'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
                    {
                      'border-blue-500 text-gray-900': isActive,
                      'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': !isActive
                    }
                  )
                }
              >
                <Icon className="w-5 h-5 mr-2" />
                {label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center">
            <ProfileButton />
          </div>
        </div>
      </div>
    </nav>
  );
}