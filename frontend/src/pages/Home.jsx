import HeroSlider from "../components/Hero/HeroSlider";
import Services from "../components/Services/Services";
import Categories from "../components/Categories/Categories";
import Featured from "../components/Featured/Featured";
import Stats from "../components/Stats/Stats";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <HeroSlider />
      <Services />
      <Categories />
      <Featured />
      <Stats />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;
