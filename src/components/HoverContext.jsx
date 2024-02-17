import React, { createContext, useContext, useState } from 'react';

const HoverContext = createContext();

export const HoverProvider = ({ children }) => {
  const [overlayData, setOverlayData] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (data) => {
    setOverlayData(data);
    setIsHovered(true);
    console.log(isHovered)
  };

  const handleLeave = () => {
    setOverlayData(null);
    setIsHovered(false);
    console.log(isHovered)
  };

  return (
    <HoverContext.Provider value={{ overlayData, isHovered, handleHover, handleLeave }}>
      {children}
    </HoverContext.Provider>
  );
};

export const useHover = () => {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error('useHover must be used within a HoverProvider');
  }
  return context;
};
