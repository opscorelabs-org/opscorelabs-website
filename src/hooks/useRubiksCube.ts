import { useEffect, useRef, useState } from 'react';

export const useRubiksCube = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [currentX, setCurrentX] = useState(-25);
  const [currentY, setCurrentY] = useState(-35);
  const [isDragging, setIsDragging] = useState(false);
  const autoRotateRef = useRef(true);
  const animationIdRef = useRef<number>();
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const lastXRef = useRef(-25);
  const lastYRef = useRef(-35);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    const animateCube = () => {
      if (autoRotateRef.current && !isDragging) {
        setCurrentY((prev) => prev + 0.3);
        setCurrentX(() => -25 + Math.sin(Date.now() / 2000) * 10);
      }
      animationIdRef.current = requestAnimationFrame(animateCube);
    };

    animationIdRef.current = requestAnimationFrame(animateCube);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isDragging]);

  // Resume auto-rotation when dragging stops
  useEffect(() => {
    if (!isDragging) {
      // Small delay to ensure drag has fully ended
      const timeoutId = setTimeout(() => {
        autoRotateRef.current = true;
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      autoRotateRef.current = false;
    }
  }, [isDragging]);

  useEffect(() => {
    const cube = cubeRef.current;
    if (!cube) return;

    cube.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;
  }, [currentX, currentY]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    lastXRef.current = currentX;
    lastYRef.current = currentY;
    if (sceneRef.current) {
      sceneRef.current.style.cursor = 'grabbing';
    }
    e.preventDefault();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    startYRef.current = e.touches[0].clientY;
    lastXRef.current = currentX;
    lastYRef.current = currentY;
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMoveWrapper = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startXRef.current;
      const deltaY = e.clientY - startYRef.current;
      setCurrentY(lastYRef.current + deltaX * 0.5);
      setCurrentX(lastXRef.current - deltaY * 0.5);
    };

    const handleMouseUpWrapper = () => {
      if (isDragging) {
        setIsDragging(false);
        if (sceneRef.current) {
          sceneRef.current.style.cursor = 'grab';
        }
        // Auto-rotation will resume via the useEffect hook
      }
    };

    const handleTouchMoveWrapper = (e: TouchEvent) => {
      if (!isDragging) return;
      const deltaX = e.touches[0].clientX - startXRef.current;
      const deltaY = e.touches[0].clientY - startYRef.current;
      setCurrentY(lastYRef.current + deltaX * 0.5);
      setCurrentX(lastXRef.current - deltaY * 0.5);
      e.preventDefault();
    };

    const handleTouchEndWrapper = () => {
      setIsDragging(false);
      // Auto-rotation will resume via the useEffect hook
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMoveWrapper);
      window.addEventListener('mouseup', handleMouseUpWrapper);
      window.addEventListener('touchmove', handleTouchMoveWrapper, { passive: false });
      window.addEventListener('touchend', handleTouchEndWrapper);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveWrapper);
      window.removeEventListener('mouseup', handleMouseUpWrapper);
      window.removeEventListener('touchmove', handleTouchMoveWrapper);
      window.removeEventListener('touchend', handleTouchEndWrapper);
    };
  }, [isDragging]);

  return {
    cubeRef,
    sceneRef,
    handleMouseDown,
    handleTouchStart,
  };
};

