import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import FooterSection from "../components/Section/FooterSection";
import NavbarSection from "../components/Section/NavbarSection";

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  };

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    scrollToTop();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-100">
      <NavbarSection isScrolled={isScrolled} />
      <div className="relative w-full pt-20">{children}</div>
      <FooterSection />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
