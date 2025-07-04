import React, { useState, useEffect, useRef } from 'react';
import Button from '../../../components/ui/Button';
import MobileOverlayBackdrop from 'pages/navigation-menu-mobile-overlay/components/MobileOverlayBackdrop';
import MobileOverlayHeader from 'pages/navigation-menu-mobile-overlay/components/MobileOverlayHeader';
import NavigationContent from 'pages/navigation-menu-mobile-overlay/components/NavigationContent';

const DesktopNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOverlayOpen]);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  const handleItemClick = (item) => {
    if (item.path && item.path !== '#') {
      window.location.href = item.path;
      closeOverlay();
    }
  };
  
  const navigationItems = [
    {
      label: { en: 'Home' },
      path: '/homepage-with-hero-carousel',
      icon: 'Home',
      description: { en: 'Discover luxury hospitality experiences'}
    },
    {
      label: { en: 'Destinations'},
      path: '#',
      icon: 'MapPin',
      description: { en: 'Explore our luxury properties worldwide' },
      submenu: [
        {
          label: { en: 'Americas' },
          path: '#',
          icon: 'Globe',
          description: { en: 'Luxury hotels across North and South America' }
        },
        {
          label: { en: 'Europe' },
          path: '#',
          icon: 'Building',
          description: { en: 'Historic and modern luxury in Europe' }
        },
        {
          label: { en: 'Asia Pacific'},
          path: '#',
          icon: 'Mountain',
          description: { en: 'Exotic destinations across Asia Pacific' }
        },
        {
          label: { en: 'Middle East & Africa' },
          path: '#',
          icon: 'Sun',
          description: { en: 'Luxury resorts in emerging destinations' }
        }
      ]
    },
    {
      label: { en: 'Experiences' },
      path: '#',
      icon: 'Star',
      description: { en: 'Curated luxury experiences and services'},
      submenu: [
        {
          label: { en: 'Dining' },
          path: '#',
          icon: 'Utensils',
          description: { en: 'World-class culinary experiences'}
        },
        {
          label: { en: 'Spa & Wellness' },
          path: '#',
          icon: 'Heart',
          description: { en: 'Rejuvenating spa and wellness treatments'}
        },
        {
          label: { en: 'Events & Meetings' },
          path: '#',
          icon: 'Calendar',
          description: { en: 'Elegant venues for special occasions' }
        }
      ]
    },
    {
      label: { en: 'Offers'},
      path: '#',
      icon: 'Gift',
      description: { en: 'Exclusive packages and special offers'}
    },
    {
      label: { en: 'Loyalty Program'},
      path: '#',
      icon: 'Award',
      description: { en: 'Marriott Bonvoy rewards and benefits'}
    },
  
  ];
  

  const handleMouseEnter = (itemId) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setHoveredItem(itemId);
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem(null);
    }, 150);
  };

  return (
    <div className="sticky top-0 z-[100] bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/homepage-with-hero-carousel" className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full text-primary">
                  <rect x="2" y="2" width="36" height="36" rx="8" fill="currentColor"/>
                  <rect x="6" y="6" width="28" height="28" rx="4" fill="#C9A96E"/>
                  <text x="20" y="26" textAnchor="middle" className="fill-primary font-heading font-semibold text-sm">RC</text>
                </svg>
              </div>
              <span className="font-heading font-semibold text-2xl text-primary">
                Ritz Carlton
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => handleMouseEnter(idx)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={item.path}
                  className={`
                    relative px-4 py-2 font-body font-medium text-base transition-all duration-300
                    ${hoveredItem === idx
                      ? 'text-accent' :'text-text-primary hover:text-accent'
                    }
                  `}
                >
                  {item.label.en}
                  <span
                    className={`
                      absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300
                      ${hoveredItem === idx ? 'scale-x-100' : 'scale-x-0'}
                    `}
                  />
                </a>

                {/* Dropdown Menu */}
                {activeDropdown === idx && item.submenu && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 min-w-[300px] bg-background border border-border rounded-luxury shadow-luxury-pronounced z-dropdown "
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <div className="p-4 flex flex-col gap-2">
                      {item.submenu.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.path}
                          className="block px-4 py-2 rounded hover:bg-surface transition-colors duration-200"
                        >
                          <div className="font-heading font-medium text-text-primary hover:text-accent transition-colors duration-200">
                            {sub.label.en}
                          </div>
                          <div className="font-caption text-sm text-text-secondary">
                            {sub.description.en}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
             <Button
              variant="ghost"
              size="sm"
              iconName={isOverlayOpen ? "X" : "Menu"}
              iconSize={24}
              onClick={toggleOverlay}
              className="text-text-primary hover:text-accent"
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      {isOverlayOpen && (
        <div className="fixed inset-0 z-overlay">
          <MobileOverlayBackdrop onClose={closeOverlay} />
          <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-background shadow-luxury-pronounced animate-slide-in-right overflow-hidden flex flex-col">
            <MobileOverlayHeader onClose={closeOverlay} />
            <NavigationContent 
              navigationItems={navigationItems}
              onItemClick={handleItemClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopNavigation;