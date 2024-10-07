import "aos/dist/aos.css";
import BannerSection from "../../components/Section/BannerSection";
import GallerySection from "../../components/Section/GallerySection";
import NewsSection from "../../components/Section/NewsSection";
import WorkProgramSection from "../../components/Section/WorkProgramSection";
import Layout from "../../layouts/Layout";
import About from "../../components/Section/About";
import VissionMissonSection from "../../components/Section/VissionMissionSection";
import Slide from "../../components/Section/Slide";

const LandingPage = () => {
  return (
    <Layout>
      <BannerSection />
      <Slide />
      <About />
      <VissionMissonSection />
      <WorkProgramSection />
      <NewsSection />
      <GallerySection />
    </Layout>
  );
};

export default LandingPage;
