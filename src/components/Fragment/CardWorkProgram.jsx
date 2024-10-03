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
          alt=""
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20"
        />
        <img
          src="/vector1.png"
          alt=""
          className="absolute -top-1 -left-5 z-10 lg:w-32 nd:w-20 w-16 -rotate-45"
        />
        <img
          src="/vector1.png"
          alt=""
          className="absolute -top-1 -right-5 z-10 lg:w-32 nd:w-20 w-16 rotate-45"
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
