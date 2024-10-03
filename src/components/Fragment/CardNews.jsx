import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardNews = ({ id, image, author, date, title, desc, link }) => {
  return (
    <div
      key={id}
      className="flex flex-col w-full h-full gap-2 cursor-pointer rounded-lg bg-white shadow-2xl lg:p-4 p-2 pb-3"
    >
      <img
        src={`${image}`}
        alt=""
        className="w-full lg:h-36 md:h-24 h-20 rounded-xl"
      />
      <div className="flex flex-col gap-2">
        <div className="flex lg:text-sm md:text-[9px] text-[6px] gap-1 justify-between">
          <p className="font-bold">{author}</p>
          <p className="">{date}</p>
        </div>
        <Link to={link}>
          <h2 className="font-bold text-primary lg:text-lg md:text-sm text-[10px]">
            {title.length > 100 ? `${title.slice(0, 40)}...` : title}
          </h2>
        </Link>
        <p className=" lg:text-xs text-[7px] text-justify">
          {desc.length > 100 ? `${desc.slice(0, 100)}...` : desc}
        </p>
      </div>
    </div>
  );
};

CardNews.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  link: PropTypes.string,
};

export default CardNews;
