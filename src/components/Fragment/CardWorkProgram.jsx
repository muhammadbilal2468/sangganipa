import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";

const CardWorkProgram = ({ id, image, title, desc, reverse }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row items-start lg:gap-32 md:gap-16 gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      key={id}
      data-aos="fade-up"
      data-aos-duration="500"
    >
      {/* Bagian Gambar */}
      <div className="relative w-full md:w-1/2 lg:h-72 md:h-56 h-40">
        <img
          src={image}
          alt="program kerja"
          className="absolute top-0 left-0 right-0 bottom-0 w-fit h-full z-20 mx-auto"
        />
      </div>

      {/* Bagian Deskripsi */}
      <div className="lg:space-y-4 space-y-2 md:w-1/2">
        <h2 className="lg:text-3xl md:text-2xl text-lg font-semibold text-tertiary md:text-start text-center">
          {title}
        </h2>
        {/* Render array of desc with custom indent */}
        <ul className="lg:text-xl md:text-base text-sm list-disc list-inside space-y-1">
          {desc.map((item, index) => (
            <li
              key={index}
              className="relative"
              style={{
                textIndent: "-1.5em",
                paddingLeft: "1.5em",
                whiteSpace: "pre-wrap",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CardWorkProgram.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.arrayOf(PropTypes.string), // Desc sebagai array string
  reverse: PropTypes.bool,
};

export default CardWorkProgram;
