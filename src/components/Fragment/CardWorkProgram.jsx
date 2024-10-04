import PropTypes from "prop-types";

const CardWorkProgram = ({ id, image, title, desc, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-start lg:gap-32 md:gap-16 gap-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      key={id}
    >
      {/* Bagian Gambar */}
      <div className="relative w-full md:w-1/2 lg:h-72 md:h-56 h-40">
        <img
          src={image}
          alt="porgram kerja"
          className="absolute top-0 left-0 right-0 bottom-0 w-fit h-full z-20 mx-auto"
        />
      </div>

      {/* Bagian Deskripsi */}
      <div className="lg:space-y-4 space-y-2 md:w-1/2">
        <h2 className="lg:text-3xl md:text-base text-xs font-semibold text-tertiary">
          {title}
        </h2>
        <p className="lg:text-base md:text-xs text-[8px] text-justify">
          {desc}
        </p>
      </div>
    </div>
  );
};

CardWorkProgram.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  reverse: PropTypes.bool,
};

export default CardWorkProgram;
