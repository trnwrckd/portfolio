import Aos from "aos";
import { useEffect } from "react";
import ContactBtn from "../../../Shared/ContactBtn/ContactBtn";
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects/Projects";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out-sine" });
  }, []);

  return (
    <div id="home" data-aos="fade-in" data-aos-duration="1200">
      <Header />
      <Banner />
      <About />
      <Projects />
      <Experience />
      <ContactBtn></ContactBtn>
      <Footer />
    </div>
  );
};

export default Home;
