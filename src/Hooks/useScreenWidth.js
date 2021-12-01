import { useLayoutEffect, useState } from 'react';

const useScreenWidth= ()=>  {
    const [width, setWidth] = useState(0);
    
  useLayoutEffect(() => {
    function updateSize() {
        setWidth(window.screen.width);
    }
    window.addEventListener('resize', updateSize);
    updateSize();  
    return () => window.removeEventListener('resize', updateSize);
  }, []);
    
  return width;
}

export default useScreenWidth;