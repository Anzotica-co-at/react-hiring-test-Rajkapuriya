import React, { useState, useEffect, useRef } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Luxury Redefined",
      subtitle: "Experience unparalleled elegance and sophistication",
      description: "Discover a world where every detail is crafted to perfection, where luxury meets comfort in the most extraordinary way.",
      cta: "Explore Suites"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      title: "Culinary Excellence",
      subtitle: "Savor world-class dining experiences",
      description: "Indulge in exceptional cuisine crafted by renowned chefs, featuring the finest ingredients and innovative culinary techniques.",
      cta: "View Restaurants"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Wellness & Spa",
      subtitle: "Rejuvenate your mind, body, and soul",
      description: "Escape to our world-class spa sanctuary where ancient wellness traditions meet modern luxury treatments.",
      cta: "Book Spa"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Exclusive Experiences",
      subtitle: "Create unforgettable memories",
      description: "Discover bespoke experiences tailored to your desires, from private yacht charters to exclusive cultural tours.",
      cta: "Discover More"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [isPlaying, currentSlide]);

  const startAutoPlay = () => {
    stopAutoPlay();
    
    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
      setProgress(0);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const goToPrevious = () => {
    setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
    setProgress(0);
  };

  const goToNext = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    } else if (e.key === ' ') {
      e.preventDefault();
      togglePlayPause();
    }
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-primary"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Hero carousel"
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    <div className="space-y-6 text-primary-foreground">
                      <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                        {slide.title}
                      </h1>
                      
                      <p className="font-body text-xl sm:text-2xl font-medium opacity-90">
                        {slide.subtitle}
                      </p>
                      
                      <p className="font-body text-lg leading-relaxed opacity-80 max-w-xl">
                        {slide.description}
                      </p>
                      
                      <div className="pt-4">
                        <Button
                          text={slide.cta}
                          variant="solid"
                          className="font-medium"
                          onClick={() => console.log(`Clicked: ${slide.cta}`)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Previous/Next Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 pointer-events-auto bg-background/20 hover:bg-background/40 text-primary-foreground backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center"
          aria-label="Previous slide"
        >
          <Icon name="ChevronLeft" size={28} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 pointer-events-auto bg-background/20 hover:bg-background/40 text-primary-foreground backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center"
          aria-label="Next slide"
        >
          <Icon name="ChevronRight" size={28} />
        </button>

        {/* Bottom Navigation Panel */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto">
          <div className="bg-background/90 backdrop-blur-sm rounded-luxury shadow-luxury-pronounced p-4 sm:p-6">
            <div className="flex items-center justify-center space-x-6">
              {/* Slide Indicators */}
              <div className="flex items-center space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-accent scale-125' :'bg-text-secondary hover:bg-accent/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="font-mono text-sm text-text-secondary">
                {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={togglePlayPause}
                className="text-text-secondary hover:text-accent p-2"
                aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
              </button>
            </div>

            {/* Progress Bar */}
            {isPlaying && (
              <div className="mt-4 w-full h-1 bg-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-100 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Keyboard Navigation Hint */}
        {/* <div className="absolute top-4 right-4 pointer-events-none hidden sm:block">
          <div className="bg-background/80 backdrop-blur-sm rounded-luxury px-3 py-2 text-xs font-caption text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="Keyboard" size={14} />
              <span>← → Space</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HeroCarousel;