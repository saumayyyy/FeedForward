import React, { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionRef = useRef();

  // Clone the first image and append it at the end for a seamless loop
  const extendedImages = [...images, images[0]];

  useEffect(() => {
    // Reset the timeout when currentIndex changes
    if (transitionRef.current) {
      clearTimeout(transitionRef.current);
    }

    transitionRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000); // Change image every 2 seconds

    return () => clearTimeout(transitionRef.current);
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex === extendedImages.length - 1) {
      // Delay the reset to prevent flickering
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // Wait for the transition to finish
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, extendedImages.length]);

  useEffect(() => {
    if (!isTransitioning) {
      // Jump to the start (first image) without transition
      setCurrentIndex(0);
    }
  }, [isTransitioning]);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden">
      <div
        className={`flex transition-transform ${isTransitioning ? 'duration-1000' : ''}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 1s ease' : 'none',
        }}
      >
        {extendedImages.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto object-cover" style={{ height: '400px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
