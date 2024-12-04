import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft, Clock, User, Tag, ExternalLink } from 'lucide-react';
import { newsArticles } from '../data/news';

export function NewsArticlePage() {
  const { id } = useParams();
  const article = newsArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Article not found</h2>
          <Link
            to="/news"
            className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-600"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/news"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to News
      </Link>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-64 object-cover"
        />
        
        <div className="p-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              {article.category}
            </span>
            <span>•</span>
            <span>{format(new Date(article.date), 'MMMM d, yyyy')}</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>

          <div className="flex items-center justify-between mb-8 text-sm text-gray-500">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime} min read
            </div>
          </div>

          <div className="prose max-w-none">
            {article.fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t">
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            {article.source && (
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>Source: {article.source}</span>
                {article.sourceUrl && (
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-600"
                  >
                    Visit Source
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </article>

      {article.relatedLinks.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {article.relatedLinks.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-900">{link.title}</h3>
                <span className="text-blue-500 text-sm">Read more →</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}