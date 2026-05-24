import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Languages from "../components/Languages/Languages";
import Videos from "../components/Videos/Videos";
import WhyCodera from "../components/WhyCodera/WhyCodera";
import Footer from "../components/Footer/Footer";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Marquee from "../components/Marquee/Marquee";
import LivePreview from "../components/LivePreview/LivePreview";

function Home() {

  return (

    <div className="bg-black min-h-screen">

      <Navbar />
      <Hero/>
      
      {/* <Marquee/> */}
      <Languages/>
      <HowItWorks/>
      <Videos/>
      <WhyCodera/>
      <LivePreview/>
      <Footer/>

    </div>
  );
}

export default Home;