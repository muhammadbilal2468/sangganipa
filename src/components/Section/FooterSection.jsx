import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 mx-auto bg-secondary lg:mt-20 md:mt-16 mt-5">
      <div className="absolute z-20 bottom-0 left-0 md:w-96 w-40 bg-secondary rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2" />
      <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="lg:text-2xl md:text-lg sm:text-sm font-extrabold text-white">
              SANGGANIPA
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="lg:mb-6 md:mb-5 mb-4 lg:text-sm text-[10px] font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="lg:text-sm md:text-xs text-[10px] text-gray-400 font-medium cursor-pointer">
                <li className="lg:mb-4 md:mb-3 mb-2">Program Kerja</li>
                <li>Berita</li>
              </ul>
            </div>
            <div>
              <h2 className="lg:mb-6 md:mb-5 mb-4 lg:text-sm text-[10px] font-semibold text-white uppercase">
                Kontak
              </h2>
              <ul className="lg:text-sm md:text-xs text-[10px] text-gray-400 font-medium cursor-pointer">
                <li className="lg:mb-4 md:mb-3 mb-2">Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div>
              <h2 className="lg:mb-6 md:mb-5 mb-4 lg:text-sm text-[10px] font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="lg:text-sm md:text-xs text-[10px] text-gray-400 font-medium cursor-pointer">
                <li className="lg:mb-4 md:mb-3 mb-2">Privacy Policy</li>
                <li>Terms &amp; Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="lg:text-sm md:text-xs text-[8px] text-gray-400 sm:text-cente">
            © 2024{" "}
            <a
              href="https://muhammadbilalll.vercel.app/"
              className="hover:underline"
              target="#blank"
            >
              Copyright Muhammad Bilal™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            <Link to={""} target="#blank">
              <FaWhatsapp className="text-white lg:text-2xl md:text-lg text-sm cursor-pointer" />
            </Link>
            <Link to={""} target="#blank">
              <FaInstagram className="text-white lg:text-2xl md:text-lg text-sm cursor-pointer" />
            </Link>
            <Link to={""} target="#blank">
              <FaTelegram className="text-white lg:text-2xl md:text-lg text-sm cursor-pointer" />
            </Link>
            <Link to={""} target="#blank">
              <FaFacebookSquare className="text-white lg:text-2xl md:text-lg text-sm cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
