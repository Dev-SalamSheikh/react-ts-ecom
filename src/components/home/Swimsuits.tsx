import Slider from "../Slider";
import Heading from "./Heading";

const Swimsuits = () => {
  // trending cards Data
  const swimsuitsData = [
    {
      id: 1,
      img: "./images/swimsuit.png",
      title: "Product Name",
      price: "$50.00",
      oldPrice: "$60.00",
    },
    {
      id: 2,
      img: "./images/swimsuit.png",
      title: "Product Name",
      price: "$50.00",
      oldPrice: "$60.00",
    },
    {
      id: 3,
      img: "./images/swimsuit.png",
      title: "Product Name",
      price: "$50.00",
      oldPrice: "$60.00",
    },
    {
      id: 4,
      img: "./images/swimsuit.png",
      title: "Product Name",
      price: "$50.00",
      oldPrice: "$60.00",
    },
    {
      id: 5,
      img: "./images/swimsuit.png",
      title: "Product Name",
      price: "$50.00",
      oldPrice: "$60.00",
    },
    {
      id: 6,
      img: "./images/swimsuit.png",
      title: "Product Name",
      price: "$50.00",
      oldPrice: "$60.00",
    },
    {
      id: 7,
      img: "./images/swimsuit.png",
      title: "Product Name",
      price: "$50.00",
      oldPrice: "$60.00",
    },
  ];

  return (
    <div className="py-32 bg-grayBg">
      <div className="container mx-auto lg:w-10/12 w-11/12">
        {/* Heading */}
        <Heading title="Swimsuits" />

        {/* Contents */}
        <div className="mt-10">
          {/* Silder */}
          <Slider ItemView={5} data={swimsuitsData} isHomePage={true} />
        </div>
      </div>
    </div>
  );
};

export default Swimsuits;
