import Navbar from "../components/Navbar";
import BenifitsCard from "../components/home/BenifitsCard";
import Blogs from "../components/home/Blogs";
import BrandsLogo from "../components/home/BrandsLogo";
import Categories from "../components/home/Categories";
import CollectionBanners from "../components/home/CollectionBanners";
import DiscountBanners from "../components/home/DiscountBanners";
import FollowUs from "../components/home/FollowUs";
import HomeBanner from "../components/home/HomeBanner";
import Swimsuits from "../components/home/Swimsuits";
import TrendingProducts from "../components/home/TrendingProducts";
import Tshirts from "../components/home/Tshirts";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar homepage={true} />

      {/* Banner */}
      <HomeBanner />

      {/* Benifits Card */}
      <BenifitsCard />

      {/* Categories */}
      <Categories />

      {/* Discount Banner */}
      <DiscountBanners />

      {/* Trending Products */}
      <TrendingProducts />

      {/* Collection Banner */}
      <CollectionBanners />

      {/* Swim Suits */}
      <Swimsuits />

      {/* Hot T-shits */}
      <Tshirts />

      {/* Recent Blogs */}
      <Blogs />

      {/* Logos */}
      <BrandsLogo />

      {/* Follow Us */}
      <FollowUs />
    </>
  );
};

export default Home;
