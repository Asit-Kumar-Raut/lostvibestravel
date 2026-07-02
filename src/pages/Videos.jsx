import React, { useState } from 'react';
import { 
  Heart, 
  MessageSquare, 
  Share2, 
  MapPin, 
  ExternalLink,
  Sparkles
} from 'lucide-react';
import KonarkWatermark from '../components/KonarkWatermark';

const FEATURED_VIDEOS = [
  {
    id: 'QnJUZXcVUr8',
    title: 'Exploring The Hidden Vibe of Chilika Lagoon',
    description: 'Documenting the scenic waterways, local fishermen communities, and serene sunsets of Asia’s largest brackish water lake. Featuring Irrawaddy dolphins and migratory bird sanctuaries.',
    likes: 342,
    comments: [
      { author: 'Sourav Mishra', text: 'This looks straight out of a National Geographic doc! Love the color grade.' },
      { author: 'TravelFreak', text: 'Where exactly is this boat boarding point?' }
    ],
    location: 'Chilika Lake, Odisha',
    mapUrl: 'https://maps.app.goo.gl/d91qNzUCgGi7SjSHA'
  },
  {
    id: 'SkrgfN4HYqE',
    title: 'Scenic Western Ghats & Mountain Ridges',
    description: 'Chasing sunsets and mountain fog through the scenic routes. A cinematic journey capturing slow-moving clouds, misty forests, and deep valleys.',
    likes: 289,
    comments: [
      { author: 'Alok K.', text: 'The drone shots at 2:15 are breathtaking!' },
      { author: 'ArtExplorer', text: 'Amazing sketch overlays in this travel log.' }
    ],
    location: 'Scenic Routes, Odisha',
    mapUrl: 'https://maps.app.goo.gl/d91qNzUCgGi7SjSHA'
  }
];

export default function Videos() {
  const [videoLikes, setVideoLikes] = useState(FEATURED_VIDEOS.map(v => v.likes));
  const [likedVideos, setLikedVideos] = useState({});
  const [newComment, setNewComment] = useState('');
  const [videoComments, setVideoComments] = useState(FEATURED_VIDEOS.map(v => v.comments));
  const [activeCommentBox, setActiveCommentBox] = useState(null);

  const handleLikeVideo = (idx) => {
    const isLiked = likedVideos[idx];
    setLikedVideos({ ...likedVideos, [idx]: !isLiked });
    setVideoLikes(prev => {
      const updated = [...prev];
      updated[idx] = isLiked ? updated[idx] - 1 : updated[idx] + 1;
      return updated;
    });
  };

  const handleAddComment = (videoIdx) => {
    if (!newComment.trim()) return;
    setVideoComments(prev => {
      const updated = [...prev];
      updated[videoIdx] = [...updated[videoIdx], { author: 'You', text: newComment }];
      return updated;
    });
    setNewComment('');
  };

  const handleShare = (title, url) => {
    navigator.clipboard.writeText(url);
    alert(`Link copied to clipboard for: ${title}`);
  };

  return (
    <div className="relative pattachitra-pattern min-h-screen pt-28 pb-20">
      <KonarkWatermark className="fixed -bottom-20 -right-20 w-[400px] h-[400px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-xs font-black uppercase text-saffronOrange tracking-widest mb-2 flex items-center justify-center gap-2">
            <Sparkles size={14} className="text-templeYellow animate-pulse" />
            <span>Cinematic Travel Logs</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-black text-ivoryWhite">
            Featured Videos
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-jagannathRed via-saffronOrange to-templeYellow mx-auto mt-4" />
        </div>

        {/* Video Listings */}
        <div className="space-y-16">
          {FEATURED_VIDEOS.map((video, idx) => (
            <div
              key={video.id}
              className="glass-panel-glow rounded-3xl overflow-hidden border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8"
            >
              {/* Embed Video Box */}
              <div className="lg:col-span-7 aspect-video relative rounded-2xl overflow-hidden bg-black/50 border border-white/5 shadow-inner">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Video Info Panel */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[10px] text-templeYellow font-bold tracking-widest uppercase">
                      <MapPin size={10} />
                      <span>{video.location}</span>
                    </span>
                    <a
                      href={video.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-saffronOrange font-semibold hover:underline"
                    >
                      <span>Location Pin</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-ivoryWhite hover:text-templeYellow transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-sm text-ivoryWhite/60 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                {/* Interactivity Section */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <button
                        onClick={() => handleLikeVideo(idx)}
                        className={`flex items-center space-x-2 text-xs font-bold uppercase transition-colors ${
                          likedVideos[idx] ? 'text-jagannathRed' : 'text-ivoryWhite/60 hover:text-jagannathRed'
                        }`}
                      >
                        <Heart size={16} fill={likedVideos[idx] ? 'currentColor' : 'none'} />
                        <span>{videoLikes[idx]} Likes</span>
                      </button>
                      <button
                        onClick={() => setActiveCommentBox(activeCommentBox === idx ? null : idx)}
                        className="flex items-center space-x-2 text-xs font-bold text-ivoryWhite/60 hover:text-templeYellow uppercase transition-colors"
                      >
                        <MessageSquare size={16} />
                        <span>{videoComments[idx].length} Comments</span>
                      </button>
                    </div>
                    <button
                      onClick={() => handleShare(video.title, `https://youtu.be/${video.id}`)}
                      className="flex items-center space-x-1.5 text-xs font-bold text-ivoryWhite/60 hover:text-skyBlue uppercase transition-colors"
                    >
                      <Share2 size={16} />
                      <span>Share</span>
                    </button>
                  </div>

                  {/* Comments Box */}
                  {activeCommentBox === idx && (
                    <div className="space-y-3 pt-3">
                      <div className="max-h-36 overflow-y-auto space-y-2.5 pr-2">
                        {videoComments[idx].map((comment, cIdx) => (
                          <div key={cIdx} className="text-xs bg-white/5 p-2.5 rounded-xl border border-white/5">
                            <span className="font-bold text-templeYellow block">{comment.author}</span>
                            <span className="text-ivoryWhite/80 mt-0.5 block">{comment.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Add comment */}
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Add a public comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleAddComment(idx)}
                          className="bg-white/5 text-xs text-ivoryWhite px-3 py-2 rounded-lg border border-white/10 w-full focus:outline-none focus:border-saffronOrange"
                        />
                        <button
                          onClick={() => handleAddComment(idx)}
                          className="bg-saffronOrange text-templeBlack text-xs font-bold px-4 py-2 rounded-lg"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
