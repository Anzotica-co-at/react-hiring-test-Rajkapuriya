import React, { useEffect } from 'react';
import HotelSlider from './components/HotelSlider';
import WelcomeSection from './components/WelcomeSection';
import DesktopNavigation from 'pages/desktop-navigation-with-dropdowns/components/DesktopNavigation';
import HeroCarousel from './components/HeroCarousel';

const HomepageWithHeroCarousel = () => {
  useEffect(() => {
    // Set page title
    document.title = 'The Ritz-Carlton - Luxury Hotels & Resorts';
    
   
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <DesktopNavigation />
      
      {/* Hero Carousel */}
      <HeroCarousel/>

      <main>
        <HotelSlider />
        
        {/* Welcome Section */}
        <WelcomeSection />
        
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full text-primary-foreground">
                  <rect x="2" y="2" width="36" height="36" rx="8" fill="currentColor"/>
                  <rect x="6" y="6" width="28" height="28" rx="4" fill="#C9A96E"/>
                  <text x="20" y="26" textAnchor="middle" className="fill-primary font-heading font-semibold text-sm">RC</text>
                </svg>
              </div>
              <span className="font-heading font-semibold text-2xl">
                The Ritz-Carlton
              </span>
            </div>
            
            <p className="font-body text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Creating unforgettable experiences and lasting memories through exceptional service and luxury accommodations worldwide.
            </p>
            
            <div className="border-t border-primary-foreground/20 pt-8">
              <p className="font-caption text-sm text-primary-foreground/60">
                © {new Date().getFullYear()} The Ritz-Carlton Hotel Company, L.L.C. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomepageWithHeroCarousel;