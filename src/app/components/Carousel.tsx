"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import image1 from "/public/images/shutterstock_2404300609.jpg";
import image2 from "/public/images/shutterstock_2480344323.jpg";
import image3 from "/public/images/shutterstock_2404300635.jpg";
import image5 from "/public/images/shutterstock_2499137801.jpg";
import image4 from "/public/images/shutterstock_1998814448.jpg";
import faArrowLeft from "/public/icons/faArrowLeft.svg";
import faArrowRight from "/public/icons/faArrowRight.svg";

const images: StaticImageData[] = [image1, image2, image3, image4, image5];

interface CarouselProps {
  title: string;
  description: string;
}

/**
 * Carousel automated image slider, with next and previous buttons, 
 * used to display the title of the page, a brief description and 
 * multiple background images to make it interactive. 
 *  
 * @param title 
 * @param description 
 * @returns Carousel component
 */
const Carousel = ({ title, description }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 8000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative max-h-[60vh] w-full flex items-center justify-center overflow-hidden shadow-md rounded-2xl">
      <button
        onClick={prevImage}
        className="hidden md:block absolute top-1/2 left-2 transform -translate-y-1/2 bg-slate-500/60 px-3 py-2 rounded-full z-10"
      >
        <Image src={faArrowLeft} alt="Previous Image" width={28} height={28} />
      </button>

      <div
        className="flex min-h-[70vh] md:min-h-[60vh] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-end px-6 md:px-10 pb-10 rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7) 1%, rgba(145,145,145,0.3) 100%, rgba(255,255,255,0) 100%), url(${images[currentIndex].src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col gap-2 text-left sm:w-3/4 md:w-3/4 lg:w-3/5 mb-4 ml-8">
          <h1 className="text-gray-200 text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight lg:leading-tight tracking-tight">
        {title}
          </h1>
          <h2 className="text-white text-base sm:text-lg lg:text-xl font-light leading-relaxed">
            {description}
          </h2>
        </div>
      </div>

      <button
        onClick={nextImage}
        className="hidden md:block absolute top-1/2 right-2 transform -translate-y-1/2 bg-slate-500/60 px-3 py-2 rounded-full z-10"
      >
        <Image src={faArrowRight} alt="Next Image" width={28} height={28} />
      </button>
    </div>
  );
};

export default Carousel;
