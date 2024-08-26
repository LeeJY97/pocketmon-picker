import { useEffect, useRef } from "react";

const useDashboard = () => {

  const dashboardRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (dashboardRef.current) {
        dashboardRef.current.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    const element = dashboardRef.current;
    if (element) {
      element.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return dashboardRef;
}

export default useDashboard;