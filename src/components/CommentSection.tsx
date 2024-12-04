import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ThumbsUp, ThumbsDown, MessageSquare, Edit, Trash } from 'lucide-react';
import { Comment } from '../types/comment';

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (content: string) => void;
  onAddReply: (commentId: string, content: string) => void;
  onUpvote: (commentId: string) => void;
  onDownvote: (commentId: string) => void;
}

export function CommentSection({
  comments,
  onAddComment,
  onAddReply,
  onUpvote,
  onDownvote
}: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    onAddComment(newComment);
    setNewComment('');
  };

  const handleSubmitReply = (commentId: string) => {
    if (!replyContent.trim()) return;
    onAddReply(commentId, replyContent);
    setReplyContent('');
    setReplyingTo(null);
  };

  const CommentComponent = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <div className={`${isReply ? 'ml-12' : ''} mb-4`}>
      <div className="flex space-x-3">
        <img
          src={comment.author.imageUrl}
          alt={comment.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-gray-900">{comment.author.name}</span>
            {comment.author.isTeamMember && (
              <span className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                {comment.author.role}
              </span>
            )}
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(comment.date), { addSuffix: true })}
            </span>
            {comment.isEdited && (
              <span className="text-sm text-gray-500">(edited)</span>
            )}
          </div>
          
          <p className="mt-1 text-gray-700">{comment.content}</p>
          
          <div className="mt-2 flex items-center space-x-4">
            <button
              onClick={() => onUpvote(comment.id)}
              className="flex items-center space-x-1 text-gray-500 hover:text-blue-500"
            >
              <ThumbsUp className="w-4 h-4" />
              <span className="text-sm">{comment.upvotes}</span>
            </button>
            <button
              onClick={() => onDownvote(comment.id)}
              className="flex items-center space-x-1 text-gray-500 hover:text-red-500"
            >
              <ThumbsDown className="w-4 h-4" />
              <span className="text-sm">{comment.downvotes}</span>
            </button>
            <button
              onClick={() => setReplyingTo(comment.id)}
              className="flex items-center space-x-1 text-gray-500 hover:text-gray-700"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm">Reply</span>
            </button>
          </div>

          {replyingTo === comment.id && (
            <div className="mt-4">
              <textarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                placeholder="Write a reply..."
              />
              <div className="mt-2 flex justify-end space-x-2">
                <button
                  onClick={() => setReplyingTo(null)}
                  className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSubmitReply(comment.id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Reply
                </button>
              </div>
            </div>
          )}

          {comment.replies.map((reply) => (
            <CommentComponent key={reply.id} comment={reply} isReply />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Community Discussion</h2>

      <form onSubmit={handleSubmitComment} className="mb-8">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Share your thoughts..."
        />
        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Post Comment
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}