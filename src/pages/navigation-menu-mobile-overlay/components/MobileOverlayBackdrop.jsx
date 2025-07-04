import React from 'react';

const MobileOverlayBackdrop = ({ onClose }) => {
  return (
    <div 
      className="absolute inset-0 bg-primary/20 backdrop-blur-sm animate-fade-in" 
      onClick={onClose}
    />
  );
};

export default MobileOverlayBackdrop;