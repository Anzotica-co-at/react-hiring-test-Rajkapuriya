import React from 'react';
import Icon from 'components/AppIcon';
const MobileOverlayHeader = ({ onClose }) => {


  return (
    <div className="sticky top-0 bg-background border-b border-border p-6 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={onClose}
            className="p-2 text-2xl text-text-primary hover:text-accent bg-transparent border-none focus:outline-none"
            aria-label="Close menu"
          >
            ×
          </button>
          <a href="/" className="block">  
            <div className="h-40 w-40">
              <img
                src="/assets/images/logo.png"
                alt="The Ritz-Carlton Logo"
                className="w-full h-full object-contain"
              />
            </div>  
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-[#1c1c1c] cursor-pointer">
            <Icon name="Globe" size={22} />
          </span>
          <span className="text-[#1c1c1c] cursor-pointer">
            <Icon name="User" size={22} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileOverlayHeader;