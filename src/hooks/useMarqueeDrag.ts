import { useEffect, useRef } from 'react';

export const useMarqueeDrag = (speed: number = 0.5) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const prevXRef = useRef(0);
  const animationIdRef = useRef<number>();
  const halfWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateDimensions = () => {
      return track.scrollWidth / 2;
    };

    halfWidthRef.current = updateDimensions();
    const handleResize = () => {
      halfWidthRef.current = updateDimensions();
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      if (!isDraggingRef.current) {
        positionRef.current -= speed;
      }

      if (positionRef.current <= -halfWidthRef.current) {
        positionRef.current = 0;
      }
      if (positionRef.current > 0) {
        positionRef.current = -halfWidthRef.current;
      }

      if (track) {
        track.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      startXRef.current = e.pageX;
      prevXRef.current = positionRef.current;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const delta = e.pageX - startXRef.current;
      positionRef.current = prevXRef.current + delta;
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleTouchStart = (e: TouchEvent) => {
      isDraggingRef.current = true;
      startXRef.current = e.touches[0].pageX;
      prevXRef.current = positionRef.current;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      const delta = e.touches[0].pageX - startXRef.current;
      positionRef.current = prevXRef.current + delta;
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const wrapper = track.parentElement;
    if (wrapper) {
      wrapper.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      wrapper.addEventListener('touchstart', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (wrapper) {
        wrapper.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        wrapper.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [speed]);

  return trackRef;
};

