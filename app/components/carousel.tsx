'use client'
import React, { PropsWithChildren } from "react";

interface MultiCardCarouselProps {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  projects: Project[];
}

interface Project {
  href: string;
}


// https://medium.com/@skaswathisk/multi-card-carousel-without-external-libraries-in-react-typescript-js-7834cb3d087f
const MultiCardCarousel: React.FC<PropsWithChildren<MultiCardCarouselProps>> = ({ children, currentIndex, setCurrentIndex, projects }) => {
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + React.Children.count(children)) % React.Children.count(children));
  };

  const handleRedirect = () => {
    window.location.href = projects[currentIndex].href;
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative w-full">
        <div className="flex space-x-4">

          {/* carousel project cards */}
          {React.Children.map(children, (child, index) => (
            <div key={index} className={`project-card ${index === currentIndex ? 'active' : 'inactive'}`}>
              {child}
            </div>
          ))}

        </div>

        {/* control buttons */}
        <div 
          className="flex items-center justify-between relative 
            bottom-0 left-0 
            right-0 px-4 py-2"
        >
            <button 
              className="text-4xl bg-transparent border border-transparent flex items-center justify-center relative
                w-auto h-auto 
                px-4 py-2" 
              onClick={handlePrev}
            >&lt;</button>
            
            <button 
              className="text-4xl bg-transparent border border-double flex items-center justify-center relative
                w-auto h-auto 
                px-4 py-2" 
              onClick={handleRedirect}
            >SELECT</button>
            
            <button 
              className="text-4xl bg-transparent border border-transparent flex items-center justify-center relative
                w-auto h-auto 
                px-4 py-2"
              onClick={handleNext}
            >&gt;</button>
            
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;