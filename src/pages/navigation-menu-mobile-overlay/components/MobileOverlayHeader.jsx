import React from 'react';
import Button from '../../../components/ui/Button';

const MobileOverlayHeader = ({ onClose }) => {


  return (
    <div className="sticky top-0 bg-background border-b border-border p-6 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8">
            <svg viewBox="0 0 40 40" className="w-full h-full text-primary">
              <rect x="2" y="2" width="36" height="36" rx="8" fill="currentColor"/>
              <rect x="6" y="6" width="28" height="28" rx="4" fill="#C9A96E"/>
              <text x="20" y="26" textAnchor="middle" className="fill-primary font-heading font-semibold text-sm">RC</text>
            </svg>
          </div>
          <span className="font-heading font-semibold text-xl text-primary">
            Menu
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          iconName="X"
          iconSize={24}
          onClick={onClose}
          className="text-text-primary hover:text-accent"
        />
      </div>
    </div>
  );
};

export default MobileOverlayHeader;