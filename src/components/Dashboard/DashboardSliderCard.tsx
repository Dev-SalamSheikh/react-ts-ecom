import { NavLink } from "react-router-dom";

interface DashboardSliderCard {
  img: string;
  name: string;
  price: string;
}

const DashboardSliderCard: React.FC<DashboardSliderCard> = ({
  img,
  name,
  price,
}) => {
  return (
    <NavLink to="/">
      <div className="w-full">
        <img src={img} alt="" className="w-full" />

        <p className="text-themeBlackBold text-lg font-semibold pt-2">{name}</p>
        <span className="text-dropdownText">{price}</span>
      </div>
    </NavLink>
  );
};

export default DashboardSliderCard;
