import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <div className="relative xl:px-32 lg:px-24 md:px-10 sm:px-5 mx-auto bg-secondary lg:mt-20 md:mt-16 mt-5">
      <div className="absolute z-20 bottom-0 left-0 md:w-96 w-40 bg-secondary rounded-full blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2" />
      <div className="mx-auto w-full max-w-screen-xl p-4 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 md:block sm:hidden">
            <Link to={"/"}>
              <img
                src="/logo.png"
                alt=""
                className="lg:h-10 md:h-8 sm:h-6 rounded-md bg-gray-100 p-1"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="lg:mb-6 md:mb-5 mb-4 lg:text-sm text-[10px] font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="lg:text-sm md:text-xs text-[10px] text-gray-400 font-medium cursor-pointer">
                <Link to={"/work-program"}>
                  <li className="lg:mb-4 md:mb-3 mb-2">Program Kerja</li>
                </Link>
                <Link to={"/news"}>
                  <li>Berita</li>
                </Link>
              </ul>
            </div>
            <div>
              <h2 className="lg:mb-6 md:mb-5 mb-4 lg:text-sm text-[10px] font-semibold text-white uppercase">
                Media
              </h2>
              <ul className="lg:text-sm md:text-xs text-[10px] text-gray-400 font-medium cursor-pointer">
                <li className="lg:mb-4 md:mb-3 mb-2">RM Media</li>
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
              Copyright™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            <Link to={"https://www.instagram.com/cudysah3/"} target="#blank">
              <FaInstagram className="text-white lg:text-2xl md:text-lg text-sm cursor-pointer" />
            </Link>
            <Link
              to={"https://www.facebook.com/CudySah20242029"}
              target="#blank"
            >
              <FaFacebookSquare className="text-white lg:text-2xl md:text-lg text-sm cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
