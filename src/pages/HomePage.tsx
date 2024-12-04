import React, { useState } from 'react';
import { ProjectGrid } from '../components/ProjectGrid';
import { FeaturedProject } from '../components/FeaturedProject';
import { upcomingProjects, currentProjects, completedProjects } from '../data/projects';
import { Tabs } from '../components/Tabs';
import { TabContent } from '../components/TabContent';

export function HomePage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const tabs = [
    { id: 'upcoming', label: 'Upcoming Launches', count: upcomingProjects.length },
    { id: 'current', label: 'Current Launches', count: currentProjects.length },
    { id: 'completed', label: 'Completed Launches', count: completedProjects.length }
  ];

  const getTabDescription = () => {
    switch (activeTab) {
      case 'current':
        return 'Join these active token launches before they close.';
      case 'completed':
        return 'View the success stories of past token launches.';
      default:
        return 'Discover and participate in the next generation of cryptocurrency tokens.';
    }
  };

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Launch</h1>
        <FeaturedProject project={upcomingProjects[0]} />
      </section>

      <section>
        <div className="mb-8">
          <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {tabs.find(tab => tab.id === activeTab)?.label}
            </h2>
            <p className="mt-2 text-gray-600">{getTabDescription()}</p>
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort by Date</option>
              <option>Sort by Progress</option>
              <option>Sort by Target Amount</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Categories</option>
              <option>DeFi</option>
              <option>GameFi</option>
              <option>Infrastructure</option>
              <option>AI & ML</option>
              <option>Privacy</option>
              <option>Healthcare</option>
              <option>Smart Cities</option>
            </select>
          </div>
        </div>

        <TabContent active={activeTab === 'upcoming'}>
          <ProjectGrid 
            projects={upcomingProjects} 
            emptyMessage="No upcoming launches available at the moment."
          />
        </TabContent>

        <TabContent active={activeTab === 'current'}>
          <ProjectGrid 
            projects={currentProjects} 
            emptyMessage="No current launches available at the moment."
          />
        </TabContent>

        <TabContent active={activeTab === 'completed'}>
          <ProjectGrid 
            projects={completedProjects} 
            emptyMessage="No completed launches available at the moment."
          />
        </TabContent>
      </section>

      <section className="bg-gray-50 -mx-4 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Curated Projects</h3>
              <p className="text-gray-600">Every project undergoes thorough vetting and due diligence before listing.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Secure Transactions</h3>
              <p className="text-gray-600">Industry-leading security measures to protect your investments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Community First</h3>
              <p className="text-gray-600">Active community engagement and transparent communication.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}