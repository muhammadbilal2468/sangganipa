import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Base/Button";

const CardNews = ({ id, image, title, author, desc, link }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      key={id}
      className="flex flex-col w-full h-full gap-5 cursor-pointer rounded-lg bg-white lg:p-4 p-2 pb-3"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <img
        src={`${image}`}
        alt=""
        className="w-full lg:h-48 md:h-48 h-48 rounded-xl object-cover"
      />
      <div className="flex flex-col gap-5 h-full">
        <div className="h-full flex flex-col gap-2 flex-grow">
          <h2 className="font-bold text-secondary lg:text-2xl md:text-xl text-lg">
            {title.length > 100 ? `${title.slice(0, 40)}...` : title}
          </h2>
          <p className="lg:text-lg md:text-md text-sm text-justify">
            {desc.length > 100 ? `${desc.slice(0, 100)}...` : desc}
          </p>
        </div>
        <Link to={link} target="_blank">
          <Button className="flex items-center gap-2 justify-self-end mt-auto justify-center w-full">
            {author}
          </Button>
        </Link>
      </div>
    </div>
  );
};

CardNews.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
};

export default CardNews;
