
'use client';

import React, { useState } from 'react';
import { Star, Send, User } from 'lucide-react';

interface Review {
  id: number;
  author: string;
  rating: number;
  content: string;
  date: string;
}

const initialReviews: Review[] = [
  {
    id: 1,
    author: "Julian Vane",
    rating: 5,
    content: "A rigorous methodology for reclaimed focus. The foundation module alone was worth the investment.",
    date: "2026.03.12"
  },
  {
    id: 2,
    author: "Elena Rossi",
    rating: 5,
    content: "Silent Architect provides the blueprint I didn't know I needed. My deep work sessions have tripled in efficiency.",
    date: "2026.03.15"
  },
  {
    id: 3,
    author: "Alistair Thorne",
    rating: 5,
    content: "Architecture for the mind is a perfect description. This is systematic liberation from the digital noise.",
    date: "2026.03.28"
  },
  {
    id: 4,
    author: "Marcus Chen",
    rating: 5,
    content: "The surgical exit strategy gave me the clarity to transition into my new venture without the typical chaos.",
    date: "2026.04.02"
  },
  {
    id: 5,
    author: "Sarah J.",
    rating: 5,
    content: "Deeply transformative. The emotional firewall protocols are now part of my daily operating system.",
    date: "2026.04.10"
  },
  {
    id: 6,
    author: "Dr. Aris Volkov",
    rating: 5,
    content: "Elegant, precise, and effective. A masterclass in cognitive sovereignty.",
    date: "2026.04.15"
  },
  {
    id: 7,
    author: "Maya K.",
    rating: 5,
    content: "Finally, a framework that doesn't just talk about focus but builds the environment for it.",
    date: "2026.04.22"
  },
  {
    id: 8,
    author: "Silas Graves",
    rating: 5,
    content: "Strategic, architectural, and profound. The framework has become my primary defensive system.",
    date: "2026.05.01"
  },
  {
    id: 9,
    author: "Olivia Thorne",
    rating: 5,
    content: "The transition from noise to rhythm has changed my entire creative process. Essential reading.",
    date: "2026.05.05"
  },
  {
    id: 10,
    author: "David S.",
    rating: 5,
    content: "A masterfully designed system. The return on attention is immediate and measurable.",
    date: "2026.05.10"
  }
];

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [newComment, setNewComment] = useState("");
  const [newName, setNewName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment || !newName) return;

    const review: Review = {
      id: Date.now(),
      author: newName,
      rating: 5,
      content: newComment,
      date: new Date().toISOString().split('T')[0].replace(/-/g, '.')
    };

    setReviews([review, ...reviews]);
    setNewComment("");
    setNewName("");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="reviews" className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-gold uppercase tracking-[0.3em] text-xs mb-4 block">System Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-[0.2em]">Verified Echoes</h2>
          <div className="w-12 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-dark-card border border-white/5 p-8 group hover:border-gold/30 transition-all duration-500 flex flex-col justify-between"
              data-aos="fade-up"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-400 font-light italic leading-relaxed mb-6">
                  "{review.content}"
                </p>
              </div>
              <div className="flex justify-between items-end border-t border-white/5 pt-4">
                <div className="text-sm font-bold uppercase tracking-widest text-white">{review.author}</div>
                <div className="text-[10px] font-mono text-gray-600 tracking-tighter">{review.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white/[0.02] border border-white/5 p-10 relative overflow-hidden" data-aos="fade-up">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Send size={120} className="text-gold" />
          </div>
          
          <div className="relative z-10 text-center mb-8">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Initialize Feedback</h3>
            <p className="text-gray-500 text-xs uppercase tracking-tighter font-mono">{">"} contribution_mode.sh</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] uppercase text-gray-500 tracking-[0.2em] block font-mono">Identity_Token</label>
              <div className="relative">
                <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gold/50" />
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full bg-[#0f0f0f] border border-white/10 rounded-sm py-3 pl-10 pr-4 focus:border-gold/50 outline-none transition-colors text-sm text-white"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase text-gray-500 tracking-[0.2em] block font-mono">Insight_Transmission</label>
              <textarea 
                rows={4}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Transmission details..."
                className="w-full bg-[#0f0f0f] border border-white/10 rounded-sm p-4 focus:border-gold/50 outline-none transition-colors text-sm text-white resize-none"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full btn-gold py-4 rounded-none font-bold text-sm uppercase tracking-[0.4em] transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center gap-3"
            >
              {isSubmitted ? "Transmission Received" : "Broadcast Insight"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
