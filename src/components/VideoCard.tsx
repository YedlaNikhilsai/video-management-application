import React from 'react';
import { Play, Clock } from 'lucide-react';
import { Video } from '../types/video';

interface VideoCardProps {
  video: Video;
  onSelect: (video: Video) => void;
}

export function VideoCard({ video, onSelect }: VideoCardProps) {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onSelect(video)}
    >
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded-md text-sm flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {formatDuration(video.duration)}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate">{video.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
        <div className="mt-2 text-sm text-gray-500">
          {new Date(video.uploadDate).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}