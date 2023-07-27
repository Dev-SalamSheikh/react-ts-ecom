import { useState } from "react";
import TshirtOutlet from "./TshirtOutlet";
import SweetShirtsOutlet from "./SweetShirtsOutlet";
import PantsOutlet from "./PantsOutlet";
import JeansOutlet from "./JeansOutlet";
import FilterHeading from "./FilterHeading";
import FilterSidebar from "./FilterSidebar";

const Filters = () => {
  // btns Data
  const btnsData = [
    {
      id: 1,
      title: "T-Shirt",
    },
    {
      id: 2,
      title: "Sweet Shirts",
    },
    {
      id: 3,
      title: "Pants",
    },
    {
      id: 4,
      title: "Jeans",
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
  ];

  // Sweet Shirts Data
  const sweatshirts = [
    {
      id: 1,
      title: "Product Name",
      price: "$50.00",
      img: "./images/sweatshirts.png",
    },
    {
      id: 2,
      title: "Product Name",
      price: "$50.00",
      img: "./images/sweatshirts.png",
    },
    {
      id: 3,
      title: "Product Name",
      price: "$50.00",
      img: "./images/sweatshirts.png",
    },
    {
      id: 4,
      title: "Product Name",
      price: "$50.00",
      img: "./images/sweatshirts.png",
    },
    {
      id: 5,
      title: "Product Name",
      price: "$50.00",
      img: "./images/sweatshirts.png",
    },
    {
      id: 6,
      title: "Product Name",
      price: "$50.00",
      img: "./images/sweatshirts.png",
    },
    {
      id: 7,
      title: "Product Name",
      price: "$50.00",
      img: "./images/sweatshirts.png",
    },
    {
      id: 8,
      title: "Product Name",
      price: "$50.00",
      img: "./images/sweatshirts.png",
    },
    {
      id: 9,
      title: "Product Name",
      price: "$50.00",
      img: "./images/sweatshirts.png",
    },
  ];

  // Sweet Shirts Data
  const pantsData = [
    {
      id: 1,
      title: "Product Name",
      price: "$30.00",
      img: "./images/pants.png",
    },
    {
      id: 2,
      title: "Product Name",
      price: "$30.00",
      img: "./images/pants.png",
    },
    {
      id: 3,
      title: "Product Name",
      price: "$30.00",
      img: "./images/pants.png",
    },
    {
      id: 4,
      title: "Product Name",
      price: "$30.00",
      img: "./images/pants.png",
    },
    {
      id: 5,
      title: "Product Name",
      price: "$30.00",
      img: "./images/pants.png",
    },
    {
      id: 6,
      title: "Product Name",
      price: "$30.00",
      img: "./images/pants.png",
    },
    {
      id: 7,
      title: "Product Name",
      price: "$30.00",
      img: "./images/pants.png",
    },
    {
      id: 8,
      title: "Product Name",
      price: "$30.00",
      img: "./images/pants.png",
    },
    {
      id: 9,
      title: "Product Name",
      price: "$30.00",
      img: "./images/pants.png",
    },
  ];

  // Jeans data
  const jeansData = [
    {
      id: 1,
      title: "Product Name",
      price: "$30.00",
      img: "./images/pants.png",
    },
    {
      id: 2,
      title: "Product Name",
      price: "$30.00",
      img: "./images/sweatshirts.png",
    },
    {
      id: 3,
      title: "Product Name",
      price: "$30.00",
      img: "./images/tshirt.png",
    },
    {
      id: 4,
      title: "Product Name",
      price: "$30.00",
      img: "./images/sweatshirts.png",
    },
    {
      id: 5,
      title: "Product Name",
      price: "$30.00",
      img: "./images/tshirt.png",
    },
    {
      id: 6,
      title: "Product Name",
      price: "$30.00",
      img: "./images/pants.png",
    },
    {
      id: 7,
      title: "Product Name",
      price: "$30.00",
      img: "./images/tshirt.png",
    },
    {
      id: 8,
      title: "Product Name",
      price: "$30.00",
      img: "./images/pants.png",
    },
    {
      id: 9,
      title: "Product Name",
      price: "$30.00",
      img: "./images/sweatshirts.png",
    },
  ];

  const options = [
    {
      id: 1,
      option: "Featured One",
    },
    {
      id: 2,
      option: "Featured Two",
    },
    {
      id: 3,
      option: "Featured Three",
    },
  ];

  // State for toggling the active button
  const [activeBtn, setActiveBtn] = useState(1);

  return (
    <>
      {/* filter cards */}
      <div className="lg:mt-16 mt-10 lg:mb-32 mb-20">
        {/* heading */}
        <FilterHeading heading="Category" options={options} />

        {/* Categories */}
        <div className="w-full flex items-start justify-between md:flex-row flex-col gap-10 lg:gap-16 mt-8">
          {/* Left Side Buttons */}
          <FilterSidebar
            key={"sidebar"}
            btnsData={btnsData}
            activeBtn={activeBtn}
            setActiveBtn={setActiveBtn}
          />

          <div className="w-full md:w-[75%] lg:w-[80%]">
            {activeBtn === 1 ? (
              <TshirtOutlet key="Tshirts" data={tshirtData} />
            ) : activeBtn === 2 ? (
              <SweetShirtsOutlet key="Sweet-Shirt" data={sweatshirts} />
            ) : activeBtn === 3 ? (
              <PantsOutlet data={pantsData} key="pants" />
            ) : activeBtn === 4 ? (
              <JeansOutlet key="jeans-data" data={jeansData} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filters;
