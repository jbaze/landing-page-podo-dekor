import { useState, useRef, useCallback, useEffect } from 'react';
import beforeImage from "@assets/generated_images/Before_renovation_unfinished_room_5e54a70b.png";
import afterImage from "@assets/generated_images/After_renovation_finished_room_47ff5f4a.png";

export default function TransformationSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  }, [isDragging]);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="relative">
      <div 
        ref={containerRef}
        className="relative w-full h-96 overflow-hidden rounded-lg cursor-grab active:cursor-grabbing"
        style={{ '--position': `${sliderPosition}%` } as React.CSSProperties}
      >
        {/* After image (bottom layer) */}
        <div className="absolute inset-0">
          <img 
            src={afterImage} 
            alt="По реновирање"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
        
        {/* Before image (top layer, clipped) */}
        <div 
          className="absolute inset-0"
          style={{ 
            clipPath: `inset(0 calc(100% - ${sliderPosition}%) 0 0)` 
          }}
        >
          <img 
            src={beforeImage} 
            alt="Пред реновирање"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
        
        {/* Draggable handle */}
        <div 
          className="absolute top-0 h-full w-1 bg-white cursor-ew-resize z-10 shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg flex items-center justify-center">
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-4 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
          <span className="text-sm font-medium text-foreground">Пред</span>
        </div>
        
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2">
          <span className="text-sm font-medium text-foreground">По</span>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3">
        <h4 className="font-bold text-foreground">Трансформација простора</h4>
        <p className="text-sm text-muted-foreground">Повлечете да видите трансформацијата</p>
      </div>
    </div>
  );
}