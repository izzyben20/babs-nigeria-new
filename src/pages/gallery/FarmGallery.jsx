import { motion } from 'framer-motion';
import { ChevronRight, Image, Video } from 'lucide-react';
import { useState, useRef } from 'react';

const FarmGallery = () => {
  // Your gallery data without thumbnails
  const galleryData = {
    photos: [
      {
        id: 1,
        title: 'Land Preparation',
        url: '/images/land_preparations.jpg',
        description: 'Preparing the land for planting crops',
      },
      // Add more photos as needed
    ],
    videos: [
      {
        id: 1,
        title: 'Planting',
        url: '/videos/planting_pictures.mp4',
      },
      {
        id: 2,
        title: 'Planting',
        url: '/videos/planting.mp4',
      },
    ],
  };

  const [activeTab, setActiveTab] = useState('photos');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const videoRef = useRef(null);
  const videoThumbnailRefs = useRef({});

  const openMedia = (media) => {
    setSelectedMedia(media);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const captureThumbnail = (videoId, videoElement) => {
    if (!videoThumbnailRefs.current[videoId] && videoElement) {
      const canvas = document.createElement('canvas');
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      videoThumbnailRefs.current[videoId] = canvas.toDataURL();
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden bg-emerald-800 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/farm-hero.jpg')] bg-cover bg-center opacity-30"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4 z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Farm Gallery
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Explore our agricultural operations through photos and videos from
            our farm
          </p>
        </motion.div>
      </section>

      {/* Gallery Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab('photos')}
                className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                  activeTab === 'photos'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-emerald-800 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <Image className="w-5 h-5 mr-2" />
                  Photos ({galleryData.photos.length})
                </div>
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                  activeTab === 'videos'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-emerald-800 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center">
                  <Video className="w-5 h-5 mr-2" />
                  Videos ({galleryData.videos.length})
                </div>
              </button>
            </div>
          </motion.div>

          {/* Gallery Content */}
          {galleryData[activeTab].length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No {activeTab} available yet.
              </p>
            </div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {activeTab === 'photos'
                ? galleryData.photos.map((photo) => (
                    <motion.div
                      key={photo.id}
                      whileHover={{ scale: 1.03 }}
                      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      onClick={() => openMedia(photo)}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <div>
                            <h3 className="text-white font-semibold">
                              {photo.title}
                            </h3>
                            <p className="text-emerald-100 text-sm">
                              {photo.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                : galleryData.videos.map((video) => (
                    <div key={video.id}>
                      <video
                        className="hidden"
                        ref={(el) => {
                          if (el) {
                            el.addEventListener('loadeddata', () => {
                              captureThumbnail(video.id, el);
                            });
                          }
                        }}
                        src={video.url}
                        crossOrigin="anonymous"
                      />
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                        onClick={() => openMedia(video)}
                      >
                        <div className="relative h-48 overflow-hidden">
                          {videoThumbnailRefs.current[video.id] ? (
                            <img
                              src={videoThumbnailRefs.current[video.id]}
                              alt={video.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <Video className="w-12 h-12 text-gray-400" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                              <Video className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <h3 className="text-white font-semibold">
                              {video.title}
                            </h3>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeMedia}
            className="absolute top-4 right-4 text-white hover:text-emerald-400 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="max-w-4xl w-full max-h-[90vh] overflow-auto">
            {activeTab === 'photos' ? (
              <div className="relative">
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.title}
                  className="w-full max-h-[80vh] object-contain"
                />
                <div className="bg-black/70 text-white p-4">
                  <h3 className="text-xl font-bold">{selectedMedia.title}</h3>
                  <p className="text-emerald-200">
                    {selectedMedia.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-black">
                <video ref={videoRef} controls autoPlay className="w-full">
                  <source src={selectedMedia.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="bg-black/70 text-white p-4">
                  <h3 className="text-xl font-bold">{selectedMedia.title}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Visit Our Farm?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Schedule a tour to see our operations firsthand and learn about
              our sustainable farming practices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Visit
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FarmGallery;
