import React from 'react';
import { X } from 'lucide-react';
import { Video } from '../types/video';

interface VideoPlayerProps {
  video: Video;
  onClose: () => void;
}

export function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{video.title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <video
          src={video.url}
          controls
          className="w-full rounded-lg"
          autoPlay
        >
          Your browser does not support the video tag.
        </video>
        <div className="mt-4">
          <p className="text-gray-600">{video.description}</p>
          <p className="text-sm text-gray-500 mt-2">
            Uploaded on {new Date(video.uploadDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}