import { useEffect, useRef } from "react";

const useWheel = () => {

  const ref = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (ref.current) {
        ref.current.scrollLeft += event.deltaY;
        event.preventDefault();
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (element) {
        element.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return ref;
}

export default useWheel;