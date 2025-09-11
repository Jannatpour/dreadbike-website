'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ThumbsUp, Flag, User, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from './Toast';

interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
  images?: string[];
}

interface ProductReviewsProps {
  productName: string;
  averageRating: number;
  totalReviews: number;
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date' | 'helpful'>) => void;
}

export default function ProductReviews({
  productName,
  averageRating,
  totalReviews,
  reviews,
  onAddReview,
}: ProductReviewsProps) {
  const { addToast } = useToast();
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 0,
    title: '',
    comment: '',
  });
  const [filterRating, setFilterRating] = useState(0);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'highest' | 'lowest'>('newest');
  const [helpfulReviews, setHelpfulReviews] = useState<Set<string>>(new Set());

  const handleSubmitReview = () => {
    if (newReview.rating === 0) {
      addToast({
        type: 'error',
        title: 'Rating Required',
        message: 'Please select a rating before submitting your review.',
      });
      return;
    }

    if (!newReview.title.trim() || !newReview.comment.trim()) {
      addToast({
        type: 'error',
        title: 'Review Required',
        message: 'Please fill in both title and comment fields.',
      });
      return;
    }

    onAddReview({
      userId: 'current-user',
      userName: 'You',
      rating: newReview.rating,
      title: newReview.title,
      comment: newReview.comment,
      verified: true,
    });

    setNewReview({ rating: 0, title: '', comment: '' });
    setIsWritingReview(false);
    
    addToast({
      type: 'success',
      title: 'Review Submitted',
      message: 'Thank you for your review! It will be published after moderation.',
    });
  };

  const handleHelpful = (reviewId: string) => {
    setHelpfulReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  const filteredReviews = reviews
    .filter(review => filterRating === 0 || review.rating === filterRating)
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        default:
          return 0;
      }
    });

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => {
    const count = reviews.filter(r => r.rating === rating).length;
    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    return { rating, count, percentage };
  });

  return (
    <div className="space-y-8">
      {/* Reviews Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Customer Reviews</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(averageRating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xl font-semibold text-white">{averageRating.toFixed(1)}</span>
            </div>
            <span className="text-gray-400">({totalReviews} reviews)</span>
          </div>
        </div>
        
        <Button
          onClick={() => setIsWritingReview(true)}
          className="bg-yellow-400 text-gray-900 hover:bg-yellow-300"
        >
          Write a Review
        </Button>
      </div>

      {/* Rating Distribution */}
      <Card className="bg-gray-800 border-gray-700 p-6">
        <h4 className="text-lg font-semibold text-white mb-4">Rating Breakdown</h4>
        <div className="space-y-3">
          {ratingDistribution.map(({ rating, count, percentage }) => (
            <div key={rating} className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <span className="text-gray-300 w-6">{rating}</span>
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
              <div className="flex-1 bg-gray-700 rounded-full h-2">
                <div
                  className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <span className="text-gray-400 text-sm w-12 text-right">{count}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-gray-300">Filter by rating:</span>
          <select
            value={filterRating}
            onChange={(e) => setFilterRating(Number(e.target.value))}
            className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
          >
            <option value={0}>All Ratings</option>
            {[5, 4, 3, 2, 1].map(rating => (
              <option key={rating} value={rating}>{rating} Star{rating !== 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-gray-300">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'highest' | 'lowest')}
            className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </div>
      </div>

      {/* Write Review Modal */}
      <AnimatePresence>
        {isWritingReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsWritingReview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl border border-gray-700 w-full max-w-2xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-700">
                <h3 className="text-xl font-semibold text-white">Write a Review</h3>
                <p className="text-gray-400 mt-1">Share your experience with {productName}</p>
              </div>
              
              <div className="p-6 space-y-6 max-h-[calc(90vh-200px)] overflow-y-auto">
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Rating *</label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setNewReview(prev => ({ ...prev, rating }))}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            rating <= newReview.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600 hover:text-yellow-400'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Review Title *</label>
                  <Input
                    value={newReview.title}
                    onChange={(e) => setNewReview(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Summarize your experience"
                    className="bg-gray-800 border-gray-600 text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Your Review *</label>
                  <textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                    placeholder="Tell others about your experience with this product"
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setIsWritingReview(false)}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSubmitReview}
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                >
                  Submit Review
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.length === 0 ? (
          <Card className="bg-gray-800 border-gray-700 p-8 text-center">
            <div className="text-gray-400">
              {filterRating === 0 ? 'No reviews yet' : `No ${filterRating}-star reviews found`}
            </div>
          </Card>
        ) : (
          filteredReviews.map((review) => (
            <Card key={review.id} className="bg-gray-800 border-gray-700 p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-white">{review.userName}</span>
                    {review.verified && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-white mb-2">{review.title}</h4>
                  <p className="text-gray-300 mb-4">{review.comment}</p>
                  
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleHelpful(review.id)}
                      className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-colors ${
                        helpfulReviews.has(review.id)
                          ? 'bg-yellow-400 text-gray-900'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>Helpful ({review.helpful + (helpfulReviews.has(review.id) ? 1 : 0)})</span>
                    </button>
                    
                    <button className="flex items-center space-x-1 px-3 py-1 rounded-full text-sm bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors">
                      <Flag className="w-4 h-4" />
                      <span>Report</span>
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
