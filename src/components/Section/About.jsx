import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Base/Button";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 lg:py-20 md:py-16 py-10 md:w-4/5 w-full mx-auto">
      <div className="grid md:grid-cols-2 grid-cols-1 bg-white rounded-lg p-10 lg:gap-10 md:gap-5 gap-3">
        <div className="grid-cols-1">
          <img
            src="/paslon.png"
            alt=""
            className="w-full"
            data-aos="fade-up"
            data-aos-duration="500"
          />
        </div>
        <div className="grid-cols-1 lg:space-y-5 md:space-y-3 space-y-2">
          <h2
            className="lg:text-3xl md:text-2xl text-lg font-semibold text-tertiary md:text-start text-center"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Siapakah CUDYAGUSTO ?
          </h2>
          <p
            className="lg:text-lg md:text-base text-sm text-justify"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Rusdy Mastura dan wakilnya merupakan pasangan dengan visi
            komplementer untuk memajukan Sulawesi Tengah. Rusdy berfokus pada
            pembangunan infrastruktur, pendidikan, dan kesehatan, sementara
            wakilnya berfokus pada pemberdayaan ekonomi lokal serta sektor
            pertanian dan perikanan. Bersama, mereka berkomitmen menciptakan
            pemerintahan inklusif yang mendorong pertumbuhan ekonomi merata dan
            kesejahteraan masyarakat.
          </p>
          <Link to={"/profile"} data-aos="fade-up" data-aos-duration="500">
            <Button className="w-full mt-4" data-aos="fade-up">
              Lihat Profil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
