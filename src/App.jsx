import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhoWeAre from "./components/WhoWeAre";
import Project from "./components/Project";
import Process from "./components/Process";
import WhyChooseUs from "./components/WhyChooseUs";
import Feedback from "./components/Feedback";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Project />
      <Process />
      <WhyChooseUs />
      <Feedback/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
