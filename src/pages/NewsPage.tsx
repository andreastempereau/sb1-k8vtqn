import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock, User } from 'lucide-react';
import { newsArticles } from '../data/news';

export function NewsPage() {
  return (
    <div className="space-y-8">
      <div className="border-b pb-8">
        <h1 className="text-3xl font-bold text-gray-900">Crypto News</h1>
        <p className="mt-2 text-gray-600">Stay updated with the latest cryptocurrency and blockchain news</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article) => (
          <Link
            key={article.id}
            to={`/news/${article.id}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]"
          >
            <img
              className="w-full h-48 object-cover"
              src={article.imageUrl}
              alt={article.title}
            />
            <div className="p-6">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {article.category}
                </span>
                <span>•</span>
                <span>{format(new Date(article.date), 'MMM d, yyyy')}</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.summary}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-1" />
                  {article.author}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime} min read
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}