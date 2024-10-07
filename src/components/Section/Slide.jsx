import { useState, useEffect } from "react";
import slide from "../../data/slide.json";

const Slide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slide.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slide.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="w-full relative">
      <div className="relative lg:px-60 md:px-24 px-10 sm:px-5 lg:py-20 md:py-16 py-10 w-full lg:h-[500px] md:h-[400px] h-[250px]">
        <div className="relative h-full overflow-hidden rounded-lg">
          {slide.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute block w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 z-30 flex items-center justify-center h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 -translate-y-1/2 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 rounded-full bg-white/30 hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1L1 5l4 4"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 -translate-y-1/2 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center h-8 w-8 md:h-10 md:w-10 lg:h-10 lg:w-10 rounded-full bg-white/30 hover:bg-white/50">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 9l4-4-4-4"
                />
              </svg>
            </span>
          </button>

          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
            {slide.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 lg:w-3 lg:h-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
