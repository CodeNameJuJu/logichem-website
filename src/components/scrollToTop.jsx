import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo(0, 0);
    };
    
    if (pathname) {
      setTimeout(handleScroll, 600);
    }
    
    return () => {
      clearTimeout(handleScroll);
    };
    
  }, [pathname]);

  return null;
}
