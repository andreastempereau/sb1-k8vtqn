import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { BackButton } from '../components/BackButton';
import { TokenomicsChart } from '../components/TokenomicsChart';
import { FAQSection } from '../components/FAQSection';
import { CommentSection } from '../components/CommentSection';
import { CompanyProfile } from '../components/CompanyProfile';
import { FounderVideo } from '../components/FounderVideo';
import { TeamSection } from '../components/TeamSection';
import { projects } from '../data/projects';

export function ProjectDetailsPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Project not found</h2>
          <BackButton />
        </div>
      </div>
    );
  }

  const progress = (project.raisedAmount / project.targetAmount) * 100;

  const handleAddComment = (content: string) => {
    // TODO: Implement comment addition
    console.log('Adding comment:', content);
  };

  const handleAddReply = (commentId: string, content: string) => {
    // TODO: Implement reply addition
    console.log('Adding reply to comment', commentId, ':', content);
  };

  const handleUpvote = (commentId: string) => {
    // TODO: Implement upvoting
    console.log('Upvoting comment:', commentId);
  };

  const handleDownvote = (commentId: string) => {
    // TODO: Implement downvoting
    console.log('Downvoting comment:', commentId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <BackButton />
      </div>

      {/* Hero Section with Participation */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {project.tokenSymbol}
              </span>
            </div>
            <p className="text-gray-700 mb-6">{project.description}</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Progress</span>
                <span>{progress.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>${project.raisedAmount.toLocaleString()}</span>
                <span>${project.targetAmount.toLocaleString()}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Token Price</p>
                <p className="text-lg font-semibold text-gray-900">$0.50</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Min. Investment</p>
                <p className="text-lg font-semibold text-gray-900">$500</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Token Supply</p>
                <p className="text-lg font-semibold text-gray-900">
                  {project.totalSupply.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Initial Circulation</p>
                <p className="text-lg font-semibold text-gray-900">
                  {project.initialCirculation.toLocaleString()}
                </p>
              </div>
            </div>

            <button className="w-full py-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
              Participate in Raise
            </button>
          </div>

          <div className="relative lg:h-[300px]">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center space-x-4 text-white">
                <Clock className="w-5 h-5" />
                <span>{project.daysLeft} days until TGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 space-y-8">
          {/* About Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About the Project</h2>
            <p className="text-gray-700 whitespace-pre-line">{project.longDescription}</p>
          </div>

          {/* Tokenomics Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Tokenomics</h2>
            <TokenomicsChart tokenomics={project.tokenomics} />
          </div>

          {/* Team Section */}
          <TeamSection team={project.team} />

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <FAQSection faqs={project.faqs} />
          </div>

          {/* Comments Section */}
          <CommentSection
            comments={project.comments}
            onAddComment={handleAddComment}
            onAddReply={handleAddReply}
            onUpvote={handleUpvote}
            onDownvote={handleDownvote}
          />
        </div>

        <div className="space-y-8">
          {/* Company Profile */}
          <CompanyProfile project={project} />

          {/* Founder Video */}
          <FounderVideo project={project} />

          {/* Resources */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Resources</h2>
            <div className="space-y-4">
              <a
                href={project.whitepaper}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <p className="font-medium text-gray-900">Whitepaper</p>
                <p className="text-sm text-gray-500">Technical documentation and tokenomics</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}