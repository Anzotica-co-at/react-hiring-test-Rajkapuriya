import React, { useState, useEffect, useRef } from 'react';
import Icon from '../AppIcon';

const DropdownMenu = ({ 
  trigger, 
  items = [], 
  position = 'bottom-left',
  className = '',
  onItemClick,
  closeOnClick = true 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item, event) => {
    if (onItemClick) {
      onItemClick(item, event);
    }
    
    if (closeOnClick) {
      setIsOpen(false);
    }
  };

  const getPositionClasses = () => {
    const positions = {
      'bottom-left': 'top-full left-0 mt-2',
      'bottom-right': 'top-full right-0 mt-2',
      'top-left': 'bottom-full left-0 mb-2',
      'top-right': 'bottom-full right-0 mb-2',
      'left': 'right-full top-0 mr-2',
      'right': 'left-full top-0 ml-2'
    };
    return positions[position] || positions['bottom-left'];
  };

  const renderItem = (item, index) => {
    if (item.type === 'divider') {
      return <div key={index} className="h-px bg-border my-2" />;
    }

    if (item.type === 'header') {
      return (
        <div key={index} className="px-4 py-2 text-xs font-caption font-medium text-text-secondary uppercase tracking-wider">
          {typeof item.label === 'object' ? item.label[currentLanguage] : item.label}
        </div>
      );
    }

    const isDisabled = item.disabled;
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    return (
      <div key={index} className="relative group">
        <button
          onClick={(e) => !isDisabled && handleItemClick(item, e)}
          disabled={isDisabled}
          className={`
            w-full flex items-center justify-between px-4 py-3 text-left transition-colors duration-fast
            ${isDisabled 
              ? 'text-text-secondary cursor-not-allowed opacity-50' :'text-text-primary hover:text-accent hover:bg-surface cursor-pointer'
            }
          `}
        >
          <div className="flex items-center space-x-3">
            {item.icon && (
              <Icon 
                name={item.icon} 
                size={18} 
                className={isDisabled ? 'text-text-secondary' : 'text-accent'} 
              />
            )}
            <div>
              <div className="font-body font-medium">
                {typeof item.label === 'object' ? item.label[currentLanguage] : item.label}
              </div>
              {item.description && (
                <div className="text-sm font-caption text-text-secondary mt-1">
                  {typeof item.description === 'object' ? item.description[currentLanguage] : item.description}
                </div>
              )}
            </div>
          </div>
          
          {hasSubmenu && (
            <Icon name="ChevronRight" size={16} className="text-text-secondary" />
          )}
          
          {item.shortcut && (
            <span className="text-xs font-mono text-text-secondary bg-surface px-2 py-1 rounded">
              {item.shortcut}
            </span>
          )}
        </button>

        {/* Submenu */}
        {hasSubmenu && (
          <div className="absolute left-full top-0 ml-2 w-64 bg-background border border-border rounded-luxury shadow-luxury-pronounced opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-fast z-dropdown">
            <div className="py-2">
              {item.submenu.map((subItem, subIndex) => renderItem(subItem, subIndex))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div ref={triggerRef} onClick={handleTriggerClick}>
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={`
            absolute ${getPositionClasses()} w-64 bg-background border border-border rounded-luxury 
            shadow-luxury-pronounced animate-slide-down z-dropdown
          `}
        >
          <div className="py-2">
            {items.map((item, index) => renderItem(item, index))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;