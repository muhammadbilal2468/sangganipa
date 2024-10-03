import { FaArrowCircleRight } from "react-icons/fa";
import news from "../../data/news.json";
import CardNews from "../Fragment/CardNews";
import Button from "../Base/Button";
import { Link } from "react-router-dom";

const NewsSection = () => {
  return (
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 w-full">
      <h1 className="lg:text-3xl md:text-2xl text-lg font-bold text-primary text-center lg:mb-20 md:mb-10 mb-6">
        B E R I T A
      </h1>
      <div className="grid grid-cols-3 lg:gap-10 md:gap-5 gap-3 items-center lg:mb-10 md:mb-6 mb-5">
        {news.slice(0, 3).map((item) => (
          <CardNews
            key={item.id}
            id={item.id}
            image={item.image}
            author={item.author}
            date={item.date}
            title={item.title}
            desc={item.desc}
            link={item.link}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to={"/news"}>
          <Button className="flex items-center gap-2">
            Lihat Lainnya <FaArrowCircleRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsSection;
