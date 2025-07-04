import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NavigationItem = ({ item, onItemClick, isExpanded, onToggleExpanded }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const handleMainClick = () => {
    if (item.path) {
      onItemClick(item);
    }
  };

  const handleExpandClick = (e) => {
    e.stopPropagation();
    onToggleExpanded();
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <button
          onClick={handleMainClick}
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
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconSize={20}
            onClick={handleExpandClick}
            className="text-text-secondary hover:text-accent ml-2"
          />
        )}
      </div>

      {/* Submenu */}
      {item.submenu && isExpanded && (
        <div className="ml-8 space-y-1 animate-slide-down">
          {item.submenu.map((subItem, subIndex) => (
            <button
              key={subIndex}
              onClick={() => onItemClick(subItem)}
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
  );
};

export default NavigationItem;