import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div 
      onClick={() => window.scrollTo(0, 0)} 
      className="fixed bottom-4 right-4 cursor-pointer p-2 bg-primary text-primary-foreground rounded-full shadow-lg transition-transform transform hover:scale-105"
      aria-label="Scroll to top"
    >
      ↑
    </div>
  );
};

export default ScrollToTop;