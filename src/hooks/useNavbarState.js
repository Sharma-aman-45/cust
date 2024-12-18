import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavbarState = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Pages with colored headers where we need light text initially
  const pagesWithColoredHeaders = ['about', 'services', 'projects', 'contact'];
  const isPageWithColoredHeader = pagesWithColoredHeaders.some(page => 
    location.pathname === `/${page}`
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    isTransparent: !scrolled,
    shouldUseLightText: !scrolled && isPageWithColoredHeader,
    scrolled
  };
};