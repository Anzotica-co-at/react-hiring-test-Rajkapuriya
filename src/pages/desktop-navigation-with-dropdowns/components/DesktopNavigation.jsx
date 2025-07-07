import MobileOverlayBackdrop from "pages/navigation-menu-mobile-overlay/components/MobileOverlayBackdrop";
import MobileOverlayHeader from "pages/navigation-menu-mobile-overlay/components/MobileOverlayHeader";
import NavigationContent from "pages/navigation-menu-mobile-overlay/components/NavigationContent";
import React, { useState, useRef, useEffect } from "react";

const DesktopNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOverlayOpen]);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  const handleItemClick = (item) => {
    if (item.path && item.path !== "#") {
      window.location.href = item.path;
      closeOverlay();
    }
  };

  const navigationItems = [
    {
      label: "HOTELS & RESORTS",
      path: "#",
      submenu: [
        {
          label: { en: "Luxury Hotels" },
          path: "/hotels/luxury"
        },
      ]
    },
    {
      label: "RITZ-CARLTON RESERVE",
      path: "#",
    },
    {
      label: "RESIDENCES",
      path: "#",
    },
    {
      label: "YACHTS",
      path: "#",
       submenu: [
        {
          label: { en: "Resort Destinations" },
          path: "/hotels/resorts"
        }
      ]
    },
    {
      label: "ABOUT THE RITZ-CARLTON",
      path: "#",
    },
    {
      label: "THE JOURNEY",
      path: "#",
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
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100 w-full ">
      <div className="w-full px-12 ">
        <div className="flex justify-between items-center w-full py-3 px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="block">
              <div className="flex flex-col items-center">
                <div className="h-12 mb-1">
                  <img
                    src="/assets/images/logo.png"
                    alt="The Ritz-Carlton Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </a>
          </div>

          {/* Right side - Language and Buttons */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center text-[#1c1c1c] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 "
              >
                <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="ml-1">English</span>
            </div>

            <button className="hidden lg:block text-xs font-medium text-[#1c1c1c] border border-[#1c1c1c] px-10 py-4 rounded-sm hover:bg-[#1c1c1c] hover:text-white transition-colors duration-200 ">
              Sign in or Join
            </button>

            {/* Mobile menu button */}
            <button onClick={toggleOverlay}  className="lg:hidden text-[#1c1c1c] p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between">
          <div className="flex items-center space-x-8 pt-1 px-4">
          {navigationItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group border-b-4 border-transparent py-4 hover:border-b-4 hover:border-[#1c1c1c] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.path}
                className={`
                    relative text-xs tracking-wider font-normal uppercase
                         text-[#1c1c1c] transition-colors duration-200
                  `}
              >
                {item.label}
              </a>

             
            </div>
          ))}
          </div>
          <div className="flex items-center space-x-8 py-1 px-4">
          <button className="hidden lg:block text-xs font-medium text-white bg-[#1c1c1c] px-10 py-4 px-4hover:opacity-70 transition-colors duration-200 ">
            Reserve Now
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOverlayOpen && (
        <div className="fixed inset-0 z-overlay">
          <MobileOverlayBackdrop onClose={closeOverlay} />
          <div className="absolute top-0 right-0 w-full  h-full bg-background shadow-luxury-pronounced animate-slide-in-right overflow-hidden flex flex-col">
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
