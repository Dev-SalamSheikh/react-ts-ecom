import Navbar from "../components/Navbar";
import BenifitsCard from "../components/home/BenifitsCard";
import HomeBanner from "../components/home/HomeBanner";

const Home = () => {
  return (
    <div className="2xl:h-screen homebanner">
      <Navbar homepage={true} />

      {/* Banner */}
      <HomeBanner />

      <div className="container mx-auto lg:w-10/12 w-11/12">
        {/* Benifits Card */}
        <BenifitsCard />
      </div>
    </div>
  );
};

export default Home;
