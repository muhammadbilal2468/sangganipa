import "aos/dist/aos.css";
import BannerSection from "../../components/Section/BannerSection";
import GallerySection from "../../components/Section/GallerySection";
import NewsSection from "../../components/Section/NewsSection";
import VissionMissonSection from "../../components/Section/VissionMissionSection";
import WorkProgramSection from "../../components/Section/WorkProgramSection";
import Layout from "../../layouts/Layout";

const LandingPage = () => {
  return (
    <Layout>
      <BannerSection />
      <VissionMissonSection />
      <WorkProgramSection />
      <NewsSection />
      <GallerySection />
    </Layout>
  );
};

export default LandingPage;
