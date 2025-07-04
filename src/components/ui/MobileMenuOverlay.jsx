import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const MobileMenuOverlay = ({ isOpen, onClose, navigationItems = [] }) => {
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setExpandedItems(new Set());
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const handleItemClick = (item) => {
    if (item.path) {
      window.location.href = item.path;
      onClose();
    }
  };

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('language', lang);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-overlay lg:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/20 backdrop-blur-sm animate-fade-in" 
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="absolute top-0 right-0 w-full max-w-sm h-full bg-background shadow-luxury-pronounced animate-slide-in-right overflow-y-auto">
        {/* Header */}
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
              <span className="font-heading font-semibold text-xl text-primary">Menu</span>
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

        {/* Navigation Items */}
        <div className="p-6 space-y-2">
          {navigationItems.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleItemClick(item)}
                  className="flex-1 flex items-center space-x-3 p-4 rounded-luxury hover:bg-surface transition-colors duration-fast group text-left"
                >
                  <Icon 
                    name={item.icon} 
                    size={20} 
                    className="text-accent flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-body font-medium text-text-primary group-hover:text-accent truncate">
                      {typeof item.label === 'object' ? item.label[currentLanguage] : item.label}
                    </div>
                    {item.description && (
                      <div className="font-caption text-sm text-text-secondary mt-1 line-clamp-2">
                        {typeof item.description === 'object' ? item.description[currentLanguage] : item.description}
                      </div>
                    )}
                  </div>
                </button>
                
                {item.submenu && item.submenu.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName={expandedItems.has(index) ? "ChevronUp" : "ChevronDown"}
                    iconSize={20}
                    onClick={() => toggleExpanded(index)}
                    className="text-text-secondary hover:text-accent ml-2"
                  />
                )}
              </div>

              {/* Submenu */}
              {item.submenu && expandedItems.has(index) && (
                <div className="ml-8 space-y-1 animate-slide-down">
                  {item.submenu.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      onClick={() => handleItemClick(subItem)}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-surface transition-colors duration-fast group text-left"
                    >
                      {subItem.icon && (
                        <Icon 
                          name={subItem.icon} 
                          size={16} 
                          className="text-text-secondary group-hover:text-accent flex-shrink-0" 
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="font-body text-text-secondary group-hover:text-accent truncate">
                          {typeof subItem.label === 'object' ? subItem.label[currentLanguage] : subItem.label}
                        </div>
                        {subItem.description && (
                          <div className="font-caption text-xs text-text-secondary mt-1 line-clamp-1">
                            {typeof subItem.description === 'object' ? subItem.description[currentLanguage] : subItem.description}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Language Selector */}
        <div className="sticky bottom-0 bg-background border-t border-border p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-text-primary">
              <Icon name="Globe" size={18} className="text-accent" />
              <span className="font-body font-medium">Language</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { code: 'en', name: 'EN', fullName: 'English' },
                { code: 'es', name: 'ES', fullName: 'Español' },
                { code: 'fr', name: 'FR', fullName: 'Français' }
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`
                    p-3 rounded-luxury text-center transition-colors duration-fast font-body font-medium
                    ${currentLanguage === lang.code
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-surface text-text-primary hover:bg-accent hover:text-accent-foreground'
                    }
                  `}
                >
                  <div className="text-sm">{lang.name}</div>
                  <div className="text-xs opacity-75">{lang.fullName}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuOverlay;