import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Video } from './types/video';
import { VideoCard } from './components/VideoCard';
import { VideoPlayer } from './components/VideoPlayer';
import { UploadVideo } from './components/UploadVideo';

// Sample data - replace with actual API calls in production
const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'Beautiful Sunset Time-lapse',
    description: 'A stunning time-lapse video of a sunset over the ocean.',
    url: 'https://youtu.be/3A8IOEHyFtY?si=4qG5md30t-55hJbL',
    thumbnail: 'https://images.unsplash.com/photo-1502790671504-542ad42d5189?auto=format&fit=crop&w=800&q=60',
    duration: 120,
    uploadDate: new Date('2024-03-10'),
  },
  {
    id: '2',
    title: 'Urban Life Documentary',
    description: 'Exploring the vibrant classNameodern cities.',
    url: 'https://example.com/video2.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=60',
    duration: 360,
    uploadDate: new Date('2024-03-09'),
  },
  {
    id: '3',
    title: 'Beatiful nature',
    description: 'A stunning nature video.',
    url: 'https://youtu.be/S2sCNNz_Idw',
    thumbnail: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg',
    duration: 120,
    uploadDate: new Date('2024-12-22'),
  },
  {
    id: '4',
    title: 'Mountains',
    description: 'A beatiful video about mountains.',
    url: 'https://youtu.be/S2sCNNz_Idw',
    thumbnail: 'https://th.bing.com/th/id/OIP.W_itMW5hTkkEcy7YvUwQsgHaE8?rs=1&pid=ImgDetMain',
    duration: 325,
    uploadDate: new Date('2024-12-22'),
  },
  
];

function App() {
  const [videos, setVideos] = useState<Video[]>(sampleVideos);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [showUpload, setShowUpload] = useState(false);

  const handleUpload = (formData: FormData) => {
    // In a real app, you would make an API call here
    console.log('Uploading video:', formData);
    // For demo purposes, we'll just add a dummy video to the list
    const newVideo: Video = {
      id: String(videos.length + 1),
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      url: 'https://youtu.be/S2sCNNz_Idw',
      thumbnail: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=60',
      duration: 240,
      uploadDate: new Date(),
    };
    setVideos([newVideo, ...videos]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Video Manager</h1>
            <button
              onClick={() => setShowUpload(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Upload Video
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onSelect={setSelectedVideo}
            />
          ))}
        </div>
      </main>

      {selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300 w-50" style={{width:"25%" ,marginLeft:"120px"}}>
  <iframe
  
    width="20px"
    height="315"
    src="https://www.youtube.com/embed/3A8IOEHyFtY?si=6gu89CevhWEdoYDB"
    title="YouTube video player"
    frameBorder="0"
    allow="autoplay;"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    className="w-full h-full"
  ></iframe>
  <div className="p-4">
    <h3 className="text-lg font-bold text-gray-800">chicken recipe</h3>
    <p className="text-gray-600 mt-2">
    Best Chicken Curry Recipe cooking video. 
    </p>
  </div>
</div>



      {showUpload && (
        <UploadVideo
          onUpload={handleUpload}
          onClose={() => setShowUpload(false)}
        />
      )}

    </div>
    
  );
}

export default App;