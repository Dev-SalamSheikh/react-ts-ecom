import Navbar from "../components/Navbar";
import BrandCategoryCards from "../components/brand-category/BrandCategoryCards";
import FilterHeading from "../components/category/FilterHeading";
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
      img: "./images/tshirt.png",
    },
    {
      id: 2,
      title: "Product Name",
      price: "$50.00",
      img: "./images/tshirt.png",
    },
    {
      id: 3,
      title: "Product Name",
      price: "$50.00",
      img: "./images/tshirt.png",
    },
    {
      id: 4,
      title: "Product Name",
      price: "$50.00",
      img: "./images/tshirt.png",
    },
    {
      id: 5,
      title: "Product Name",
      price: "$50.00",
      img: "./images/tshirt.png",
    },
    {
      id: 6,
      title: "Product Name",
      price: "$50.00",
      img: "./images/tshirt.png",
    },
    {
      id: 7,
      title: "Product Name",
      price: "$50.00",
      img: "./images/tshirt.png",
    },
    {
      id: 8,
      title: "Product Name",
      price: "$50.00",
      img: "./images/tshirt.png",
    },
    {
      id: 9,
      title: "Product Name",
      price: "$50.00",
      img: "./images/tshirt.png",
    },
    {
      id: 10,
      title: "Product Name",
      price: "$50.00",
      img: "./images/tshirt.png",
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
        <BrandCategoryCards
          brandImg="./images/brands/nike.png"
          data={tshirtData}
        />

        {/* adidas Products */}
        <BrandCategoryCards
          brandImg="./images/brands/adidas.png"
          data={tshirtData}
        />

        {/* levis Products */}
        <BrandCategoryCards
          brandImg="./images/brands/levis.png"
          data={tshirtData}
        />

        {/* Puma Products */}
        <BrandCategoryCards
          brandImg="./images/brands/puma.png"
          data={tshirtData}
        />

        {/* Louis Products */}
        <BrandCategoryCards
          brandImg="./images/brands/louis.png"
          data={tshirtData}
        />

        {/* Pagination */}
        <Pagination />
      </div>
    </>
  );
};

export default BrandCategory;
