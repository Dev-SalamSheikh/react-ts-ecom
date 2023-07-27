import Nike from "../../assets/brands/nike.png";
import Adidas from "../../assets/brands/adidas.png";
import Levis from "../../assets/brands/levis.png";
import Puma from "../../assets/brands/puma.png";
import Louis from "../../assets/brands/louis.png";

const BrandsLogo = () => {
  const brandsLogo = [
    {
      id: 1,
      image: Nike,
    },
    {
      id: 2,
      image: Adidas,
    },
    {
      id: 3,
      image: Levis,
    },
    {
      id: 4,
      image: Puma,
    },
    {
      id: 5,
      image: Louis,
    },
  ];

  return (
    <div className="bg-grayBg">
      <div className="container mx-auto lg:w-10/12 w-11/12 py-[60px]">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-10">
          {brandsLogo?.map((logo) => (
            <div key={logo.id} className="flex items-center justify-center">
              <img src={logo.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsLogo;
