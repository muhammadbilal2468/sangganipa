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
        isScrolled ? "bg-secondary" : "bg-gray-100"
      }`}
    >
      <div className="xl:px-32 lg:px-24 md:px-10 sm:px-5 mx-auto py-4 flex justify-between items-center">
        <div className="lg:text-2xl md:text-lg sm:text-sm font-extrabold">
          <Link to={"/"}>
            <img
              src="/logo.png"
              alt=""
              className="lg:h-10 md:h-8 sm:h-6 rounded-md bg-gray-100 p-1"
            />
          </Link>
        </div>

        <div className="sm:hidden md:block flex lg:space-x-6 md:space-x-2">
          <Link
            to={"/"}
            className={`lg:text-base md:text-xs font-semibold py-1 rounded-lg lg:px-3 md:px-0.5 ${
              isScrolled
                ? "text-white hover:text-primary hover:bg-white"
                : "text-black hover:bg-tertiary hover:text-white"
            }`}
          >
            Beranda
          </Link>
          <Link
            to={"/profile"}
            className={`lg:text-base md:text-xs font-semibold py-1 rounded-lg lg:px-3 md:px-0.5 ${
              isScrolled
                ? "text-white hover:text-primary hover:bg-white"
                : "text-black hover:bg-tertiary hover:text-white"
            }`}
          >
            Profil
          </Link>
          <Link
            to={"/work-program"}
            className={`lg:text-base md:text-xs font-semibold py-1 rounded-lg lg:px-3 md:px-0.5 ${
              isScrolled
                ? "text-white hover:text-primary hover:bg-white"
                : "text-black hover:bg-tertiary hover:text-white"
            }`}
          >
            Program Kerja
          </Link>
          <Link
            to={"/news"}
            className={`lg:text-base md:text-xs font-semibold py-1 rounded-lg lg:px-3 md:px-0.5 ${
              isScrolled
                ? "text-white hover:text-primary hover:bg-white"
                : "text-black hover:bg-tertiary hover:text-white"
            }`}
          >
            Berita
          </Link>
          <Link
            to={"/gallery"}
            className={`lg:text-base md:text-xs font-semibold py-1 rounded-lg lg:px-3 md:px-0.5 ${
              isScrolled
                ? "text-white hover:text-primary hover:bg-white"
                : "text-black hover:bg-tertiary hover:text-white"
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
            <FaTimes />
          ) : (
            <FaBars className={isScrolled ? "text-white" : ""} />
          )}
        </div>

        {isMenuOpen && (
          <div className="fixed top-0 right-0 w-full h-fit bg-primary shadow-md z-40 flex flex-col items-start p-5 pt-16 space-y-3 border-b-4 border-black">
            <Link
              to={"/"}
              className="lg:text-base md:text-xs text-center font-semibold w-full"
            >
              Beranda
            </Link>
            <Link
              to={"/profile"}
              className="lg:text-base md:text-xs text-center font-semibold w-full"
            >
              Profil
            </Link>
            <Link
              to={"/work-program"}
              className="lg:text-base md:text-xs text-center font-semibold w-full"
            >
              Program Kerja
            </Link>
            <Link
              to={"/news"}
              className="lg:text-base md:text-xs text-center font-semibold w-full"
            >
              Berita
            </Link>
            <Link
              to={"/gallery"}
              className="lg:text-base md:text-xs text-center font-semibold w-full"
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
