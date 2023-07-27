import Navbar from "../components/Navbar";
import BrandCategoryCards from "../components/brand-category/BrandCategoryCards";
import FilterHeading from "../components/category/FilterHeading";
import Nike from "../assets/brands/nike.png";
import Adidas from "../assets/brands/adidas.png";
import Levis from "../assets/brands/levis.png";
import Puma from "../assets/brands/puma.png";
import Louis from "../assets/brands/louis.png";

import Tshirt from "../assets/tshirt.png";
import Pagination from "../components/Pagination";

const BrandCategory = () => {
  // options
  const options = [
    {
      id: 1,
      option: "Popular",
    },
    {
      id: 2,
      option: "Popular Two",
    },
    {
      id: 3,
      option: "Popular Three",
    },
    {
      id: 4,
      option: "Popular Four",
    },
  ];

  // T-shirt Data
  const tshirtData = [
    {
      id: 1,
      title: "Product Name",
      price: "$50.00",
      img: Tshirt,
    },
    {
      id: 2,
      title: "Product Name",
      price: "$50.00",
      img: Tshirt,
    },
    {
      id: 3,
      title: "Product Name",
      price: "$50.00",
      img: Tshirt,
    },
    {
      id: 4,
      title: "Product Name",
      price: "$50.00",
      img: Tshirt,
    },
    {
      id: 5,
      title: "Product Name",
      price: "$50.00",
      img: Tshirt,
    },
    {
      id: 6,
      title: "Product Name",
      price: "$50.00",
      img: Tshirt,
    },
    {
      id: 7,
      title: "Product Name",
      price: "$50.00",
      img: Tshirt,
    },
    {
      id: 8,
      title: "Product Name",
      price: "$50.00",
      img: Tshirt,
    },
    {
      id: 9,
      title: "Product Name",
      price: "$50.00",
      img: Tshirt,
    },
    {
      id: 10,
      title: "Product Name",
      price: "$50.00",
      img: Tshirt,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar homepage={false} />
      <div className="container mx-auto lg:w-10/12 w-11/12 mt-24 pt-10 md:pt-20">
        {/* Heading */}
        <FilterHeading heading="Men Tshirts" options={options} />
        {/* Nike Products */}
        <BrandCategoryCards brandImg={Nike} data={tshirtData} />

        {/* adidas Products */}
        <BrandCategoryCards brandImg={Adidas} data={tshirtData} />

        {/* levis Products */}
        <BrandCategoryCards brandImg={Levis} data={tshirtData} />

        {/* Puma Products */}
        <BrandCategoryCards brandImg={Puma} data={tshirtData} />

        {/* Louis Products */}
        <BrandCategoryCards brandImg={Louis} data={tshirtData} />

        {/* Pagination */}
        <Pagination />
      </div>
    </>
  );
};

export default BrandCategory;
