import PropTypes from "prop-types";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarSection = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav
      className={`fixed top-0 left-0 w-full duration-300 transition z-40 ${
        isScrolled ? "bg-secondary" : "bg-gray-200"
      }`}
    >
      <div className="xl:px-32 lg:px-24 md:px-10 sm:px-5 mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 lg:text-2xl md:text-lg sm:text-sm font-extrabold">
          <Link to={"/"}>
            <img
              src="/logo.png"
              alt=""
              className="lg:w-28 md:w-20 w-14  rounded-md bg-gray-100 p-1"
            />
          </Link>
          <h1 className={isScrolled ? "text-white" : "text-black"}>
            SANGGANIPA
          </h1>
        </div>

        <div className="sm:hidden md:block flex lg:space-x-6 md:space-x-2 lg:text-lg md:text-sm">
          <Link
            to={"/"}
            className={`font-semibold py-1 rounded-lg lg:py-3 3 md:py-2 lg:px-5 md:px-2 ${
              isScrolled
                ? "text-white hover:text-black hover:bg-white"
                : "text-black hover:bg-secondary hover:text-white"
            }`}
          >
            Beranda
          </Link>
          <Link
            to={"/profile"}
            className={`font-semibold py-1 rounded-lg lg:py-3 3 md:py-2 lg:px-5 md:px-2 ${
              isScrolled
                ? "text-white hover:text-black hover:bg-white"
                : "text-black hover:bg-secondary hover:text-white"
            }`}
          >
            Profil
          </Link>
          <Link
            to={"/work-program"}
            className={`font-semibold py-1 rounded-lg lg:py-3 3 md:py-2 lg:px-5 md:px-2 ${
              isScrolled
                ? "text-white hover:text-black hover:bg-white"
                : "text-black hover:bg-secondary hover:text-white"
            }`}
          >
            Program Kerja
          </Link>
          <Link
            to={"/news"}
            className={`font-semibold py-1 rounded-lg lg:py-3 3 md:py-2 lg:px-5 md:px-2 ${
              isScrolled
                ? "text-white hover:text-black hover:bg-white"
                : "text-black hover:bg-secondary hover:text-white"
            }`}
          >
            Berita
          </Link>
          <Link
            to={"/gallery"}
            className={`font-semibold py-1 rounded-lg lg:py-3 3 md:py-2 lg:px-5 md:px-2 ${
              isScrolled
                ? "text-white hover:text-black hover:bg-white"
                : "text-black hover:bg-secondary hover:text-white"
            }`}
          >
            Galeri
          </Link>
        </div>

        <div
          onClick={handleToggleNavbar}
          className="sm:block md:hidden fixed right-5 top-5 font-bold cursor-pointer z-50"
        >
          {isMenuOpen ? (
            <FaTimes className="text-white" />
          ) : (
            <FaBars className={isScrolled ? "text-white" : ""} />
          )}
        </div>

        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-full h-fit bg-secondary shadow-md z-40 flex flex-col items-start p-5 pt-16 space-y-3 border-b-4 border-black">
            <Link
              to={"/"}
              className="text-white text-center font-semibold w-full"
            >
              Beranda
            </Link>
            <Link
              to={"/profile"}
              className="text-white text-center font-semibold w-full"
            >
              Profil
            </Link>
            <Link
              to={"/work-program"}
              className="text-white text-center font-semibold w-full"
            >
              Program Kerja
            </Link>
            <Link
              to={"/news"}
              className="text-white text-center font-semibold w-full"
            >
              Berita
            </Link>
            <Link
              to={"/gallery"}
              className="text-white text-center font-semibold w-full"
            >
              Galeri
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

NavbarSection.propTypes = {
  isScrolled: PropTypes.bool.isRequired,
};

export default NavbarSection;
