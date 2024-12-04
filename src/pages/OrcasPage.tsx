import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Coins, Users, BarChart, Globe, Zap, Lock, Rocket } from 'lucide-react';

export function OrcasPage() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section with Animated Gradient */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-gray-50 to-gray-100 py-20 px-4 -mx-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                The Future of Token Launches
              </h1>
              <p className="text-xl text-gray-600">
                ORCAS is revolutionizing how projects raise capital and how investors participate in the next generation of cryptocurrency tokens.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/get-started"
                  className="group inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/token-launches"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200/30 to-gray-300/30 blur-xl rounded-3xl transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Platform Preview"
                className="rounded-3xl shadow-2xl relative transform -rotate-3 transition-transform duration-500 hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ORCAS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of token launch platforms with our comprehensive suite of features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: 'Enterprise-Grade Security',
              description: 'Multi-layer security architecture with advanced encryption and regular audits',
              color: 'gray'
            },
            {
              icon: Rocket,
              title: 'Streamlined Launch Process',
              description: 'Launch your token in minutes with our intuitive platform',
              color: 'gray'
            },
            {
              icon: Users,
              title: 'Active Community',
              description: 'Join a thriving ecosystem of projects and investors',
              color: 'gray'
            },
            {
              icon: Lock,
              title: 'Compliant Infrastructure',
              description: 'Built-in compliance tools and KYC/AML integration',
              color: 'gray'
            },
            {
              icon: Zap,
              title: 'Real-Time Analytics',
              description: 'Comprehensive analytics and reporting dashboard',
              color: 'gray'
            },
            {
              icon: Globe,
              title: 'Global Access',
              description: 'Connect with investors from around the world',
              color: 'gray'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20 px-4 -mx-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: '$250M+', label: 'Total Value Locked' },
              { value: '100K+', label: 'Active Users' },
              { value: '500+', label: 'Successful Launches' },
              { value: '50+', label: 'Countries' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
        <div className="relative">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of investors already participating in the future of cryptocurrency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/get-started"
              className="group px-8 py-4 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
              <ArrowRight className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/token-launches"
              className="px-8 py-4 bg-gray-800 text-white rounded-lg font-medium border border-gray-700 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}