import Image from "next/image";
import Hero from "./ui/components/home/Hero/page";
import Category from "./ui/components/home/Category";
import About from "./ui/components/home/About";
import OfferCombo from "./ui/components/home/OfferCombo/page";
import WhyChooseUs from "./ui/components/home/WhyChooseUs";
import Booking from "./ui/components/home/Booking";
import Menu from "./ui/components/home/Menu";
import Gallery from "./ui/components/home/Gallery";
import Team from "./ui/components/home/Team";
import Testimonial from "./ui/components/home/Testimonial";
import Blog from "./ui/components/home/Blog";
import BackToTop from "./ui/components/common/BackToTop";


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
    </>
  );
}
