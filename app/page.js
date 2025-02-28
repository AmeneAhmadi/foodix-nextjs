import Image from "next/image";
import Hero from "./components/home/Hero";
import Category from "./components/home/Category";
import About from "./components/home/About";
import OfferCombo from "./components/home/OfferCombo";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Booking from "./components/common/Booking";
import Menu from "./components/home/Menu";
import Gallery from "./components/home/Gallery";
import Team from "./components/home/Team";
import Testimonial from "./components/home/Testimonial";
import Blog from "./components/home/Blog";
import BackToTop from "./components/common/BackToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <About />
      <OfferCombo />
      <WhyChooseUs />
      <Booking />
      <Menu />
      <Gallery />
      <Team />
      <Testimonial />
      <Blog />
      <BackToTop />
    </>
  );
}
