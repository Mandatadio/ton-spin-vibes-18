import { useEffect, useRef } from 'react';
import turntableImage from '@/assets/turntable-hero.jpg';

const TurntableHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // For now, we'll use the generated image as a placeholder
    // In a real implementation, you would replace this with the actual video URL
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
    }
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent drop-shadow">
          🎵 PEDRO AUDIO 🎵
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          The hottest audio memecoin on TON! 🔥🚀
        </p>
        <p className="text-lg text-accent font-semibold mt-2">
          CTO JUST LAUNCHED! Don't miss the moon mission! 🌙
        </p>
      </div>

      {/* DJ Turntable Frame */}
      <div className="turntable-frame animate-pulse-glow group">
        {/* For demo purposes, using the generated image */}
        <div 
          className="absolute inset-2 rounded-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${turntableImage})`,
            filter: 'brightness(0.9) contrast(1.1)',
          }}
        />
        
        {/* Video element (hidden for now, ready for actual video) */}
        <video
          ref={videoRef}
          className="absolute inset-2 w-full h-full object-cover rounded-full opacity-0"
          poster={turntableImage}
          style={{ display: 'none' }} // Remove this when you have the actual video
        >
          <source src="/path-to-your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Vinyl record center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full border-2 border-primary/50 z-10" />
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          CTO just launched • Community driven • 48h Wall of Fame
        </p>
      </div>
    </section>
  );
};

export default TurntableHero;