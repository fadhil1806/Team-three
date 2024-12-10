import Navbar from "@/components/navbar";
import Header from "@/components/header";
import About from "@/components/about";
import Statistics from "@/components/statistics";

import Newsletter from "@/components/newsletter";
import Team from "@/components/team";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Statistics />
      <Newsletter />
      <Team />
      <Footer /> 
    </div>
  );
};

export default Home;
