import { FaArrowCircleRight, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import news from "../../data/news.json";
import Button from "../Base/Button";
import CardNews from "../Fragment/CardNews";

const NewsSection = () => {
  return (
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 w-full lg:py-20 md:py-16 py-10">
      <div className="flex items-center justify-between lg:mb-20 mb-10">
        <h1
          className="lg:text-3xl md:text-2xl text-xl font-extrabold text-center border-b-4 border-secondary"
          data-aos="fade-left"
          data-aos-duration="700"
        >
          B E R I T A
        </h1>
        <Link
          to={"/news"}
          className="flex items-center gap-2 text-tertiary lg:text-xl md:text-md text-xs font-bold text-secondary hover:text-primary"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          Lihat Semua <FaLongArrowAltRight />
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-2 gap-2 items-center lg:mb-10 md:mb-6 mb-5">
        {news.slice(0, 3).map((item, index) => (
          <CardNews
            key={index}
            id={item.id}
            image={item.image}
            author={item.author}
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
