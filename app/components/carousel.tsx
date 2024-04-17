'use client';
import React, { PropsWithChildren } from "react";

interface Project {
  icon: JSX.Element;
  href: string;
  label: string;
  handle: string;
}

interface MultiCardCarouselProps {
  projects: Project[];
}

const MultiCardCarousel: React.FC<PropsWithChildren<MultiCardCarouselProps>> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="mt-2">
      <div className="w-11/12 ">
        <div className="relative">
          <div className="flex space-x-4">
            {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
              <div className="flex-none w-1/3 p-4 bg-white rounded-lg shadow-md" key={index}>
                <div className="flex items-center justify-center">
                  {project.icon}
                </div>
                <h3 className="text-lg font-bold">{project.label}</h3>
                <p className="text-gray-500">{project.handle}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 relative  bottom-44 ">
            <button className="w-6 h-6 rounded-full bg-gray-300  relative right-4" onClick={handlePrev}>&lt;</button>
            <button className="w-6 h-6 rounded-full bg-gray-300 relative left-10" onClick={handleNext}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default MultiCardCarousel;