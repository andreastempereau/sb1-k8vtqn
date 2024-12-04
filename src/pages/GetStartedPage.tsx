import React from 'react';
import { BookOpen, Shield, Coins, BarChart, Clock, CheckCircle, AlertTriangle, Wallet, Users } from 'lucide-react';

export function GetStartedPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-16 pb-16">
      {/* Hero Section */}
      <div className="text-center py-16 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl text-white">
        <h1 className="text-4xl font-bold mb-6">Getting Started with Token Launches</h1>
        <p className="text-xl max-w-3xl mx-auto opacity-90">
          Your comprehensive guide to understanding and participating in cryptocurrency token launches.
        </p>
      </div>

      {/* Quick Start Guide */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Quick Start Guide</h2>
          <p className="mt-4 text-gray-600">Essential steps to begin your token launch investment journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Learn the Basics</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                Understand token economics
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                Learn about vesting schedules
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                Research investment risks
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Set Up Securely</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Create a secure wallet
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Complete KYC verification
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Enable 2FA protection
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Start Investing</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                Fund your account
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                Choose your first project
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-500 mr-2" />
                Participate in launch
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Key Concepts</h2>
          <p className="mt-4 text-gray-600">Essential terminology and concepts for token launches</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Token Economics</h3>
            </div>
            <p className="text-gray-600">
              The distribution and utility mechanisms that govern a token's value and usage within its ecosystem.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Vesting Schedule</h3>
            </div>
            <p className="text-gray-600">
              The timeline and conditions under which tokens are released to various stakeholders.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Token Generation Event</h3>
            </div>
            <p className="text-gray-600">
              The official launch when tokens are created and initially distributed to participants.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Process Flowchart */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Investment Process</h2>
          <p className="mt-4 text-gray-600">Step-by-step guide to participating in token launches</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {[
              {
                step: 1,
                title: 'Research and Due Diligence',
                description: 'Thoroughly investigate the project, team, tokenomics, and roadmap.',
                icon: BookOpen,
                color: 'blue'
              },
              {
                step: 2,
                title: 'Wallet Setup and KYC',
                description: 'Create a compatible wallet and complete identity verification.',
                icon: Wallet,
                color: 'green'
              },
              {
                step: 3,
                title: 'Fund Your Account',
                description: 'Transfer the required funds to your investment wallet.',
                icon: Coins,
                color: 'purple'
              },
              {
                step: 4,
                title: 'Participate in Launch',
                description: 'Follow the project instructions to participate in the token launch.',
                icon: BarChart,
                color: 'orange'
              }
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Step {item.step}: {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Management */}
      <section className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Risk Management</h2>
          <p className="mt-4 text-gray-600">Important considerations to protect your investment</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
              Common Risks
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-red-600 font-medium">1</span>
                </span>
                <div>
                  <p className="font-medium text-gray-900">Market Volatility</p>
                  <p className="text-gray-600">Cryptocurrency markets can be highly volatile</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-red-600 font-medium">2</span>
                </span>
                <div>
                  <p className="font-medium text-gray-900">Project Risks</p>
                  <p className="text-gray-600">Technical challenges or team changes can impact success</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                  <span className="text-red-600 font-medium">3</span>
                </span>
                <div>
                  <p className="font-medium text-gray-900">Regulatory Changes</p>
                  <p className="text-gray-600">Changes in regulations can affect token value</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center">
              <Shield className="w-6 h-6 text-green-500 mr-2" />
              Best Practices
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Diversify Investments</p>
                  <p className="text-gray-600">Don't put all your funds into a single project</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Research Thoroughly</p>
                  <p className="text-gray-600">Always conduct comprehensive due diligence</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Secure Storage</p>
                  <p className="text-gray-600">Use hardware wallets for long-term holdings</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}