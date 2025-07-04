import React, { useState, useEffect } from 'react';
import NavigationItem from './NavigationItem';

const NavigationContent = ({ navigationItems, onItemClick }) => {
  const [expandedItems, setExpandedItems] = useState(new Set());
 

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="p-6 space-y-2 flex-1 overflow-y-auto">
      {navigationItems.map((item, index) => (
        <NavigationItem
          key={index}
          item={item}
          onItemClick={onItemClick}
          isExpanded={expandedItems.has(index)}
          onToggleExpanded={() => toggleExpanded(index)}
        />
      ))}
    </div>
  );
};

export default NavigationContent;