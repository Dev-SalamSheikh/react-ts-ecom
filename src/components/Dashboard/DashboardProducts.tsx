import DashboardProductCard from "./DashboardProductCard";
import Tshirt from "../../assets/tshirt.png";
import sShirt from "../../assets/sweatshirts.png";
import pant from "../../assets/pants.png";

const DashboardProducts = () => {
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

  // Sweet Shirts Data
  const sweatshirts = [
    {
      id: 1,
      title: "Product Name",
      price: "$50.00",
      img: sShirt,
    },
    {
      id: 2,
      title: "Product Name",
      price: "$50.00",
      img: sShirt,
    },
    {
      id: 3,
      title: "Product Name",
      price: "$50.00",
      img: sShirt,
    },
    {
      id: 4,
      title: "Product Name",
      price: "$50.00",
      img: sShirt,
    },
    {
      id: 5,
      title: "Product Name",
      price: "$50.00",
      img: sShirt,
    },
    {
      id: 6,
      title: "Product Name",
      price: "$50.00",
      img: sShirt,
    },
    {
      id: 7,
      title: "Product Name",
      price: "$50.00",
      img: sShirt,
    },
    {
      id: 8,
      title: "Product Name",
      price: "$50.00",
      img: sShirt,
    },
    {
      id: 9,
      title: "Product Name",
      price: "$50.00",
      img: sShirt,
    },
    {
      id: 10,
      title: "Product Name",
      price: "$50.00",
      img: sShirt,
    },
  ];

  // Sweet Shirts Data
  const pantsData = [
    {
      id: 1,
      title: "Product Name",
      price: "$30.00",
      img: pant,
    },
    {
      id: 2,
      title: "Product Name",
      price: "$30.00",
      img: pant,
    },
    {
      id: 3,
      title: "Product Name",
      price: "$30.00",
      img: pant,
    },
    {
      id: 4,
      title: "Product Name",
      price: "$30.00",
      img: pant,
    },
    {
      id: 5,
      title: "Product Name",
      price: "$30.00",
      img: pant,
    },
    {
      id: 6,
      title: "Product Name",
      price: "$30.00",
      img: pant,
    },
    {
      id: 7,
      title: "Product Name",
      price: "$30.00",
      img: pant,
    },
    {
      id: 8,
      title: "Product Name",
      price: "$30.00",
      img: pant,
    },
    {
      id: 9,
      title: "Product Name",
      price: "$30.00",
      img: pant,
    },
    {
      id: 10,
      title: "Product Name",
      price: "$30.00",
      img: pant,
    },
  ];

  return (
    <div className="mt-12">
      {/* Product Card */}
      <DashboardProductCard data={tshirtData} title="T-shirt" />
      <DashboardProductCard data={sweatshirts} title="Sweatshirts" />
      <DashboardProductCard data={pantsData} title="Pants" />
    </div>
  );
};

export default DashboardProducts;
