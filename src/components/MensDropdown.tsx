import { NavLink } from "react-router-dom";

// Mens Icons
import Men1 from "../assets/dropdownMen/d-men-1.png";
import Men2 from "../assets/dropdownMen/d-men-2.png";
import Men3 from "../assets/dropdownMen/d-men-3.png";
import Men4 from "../assets/dropdownMen/d-men-4.png";
import Men5 from "../assets/dropdownMen/d-men-5.png";
import Men6 from "../assets/dropdownMen/d-men-6.png";
import Men7 from "../assets/dropdownMen/d-men-7.png";
import Men8 from "../assets/dropdownMen/d-men-8.png";

const MensDropdown = () => {
  // Navlinks
  const dropdownMan = [
    {
      id: 1,
      title: "men_t-shirts",
      path: "/",
      image: Men1,
    },
    {
      id: 2,
      title: "men_shortsleevebutton",
      path: "/",
      image: Men2,
    },
    {
      id: 3,
      title: "men_sweatshirt",
      path: "/",
      image: Men3,
    },
    {
      id: 4,
      title: "men_lognsleevebutton",
      path: "/",
      image: Men4,
    },
    {
      id: 5,
      title: "men_jackets",
      path: "/",
      image: Men5,
    },
    {
      id: 6,
      title: "men_shorts",
      path: "/",
      image: Men6,
    },
    {
      id: 7,
      title: "men_jeans",
      path: "/",
      image: Men7,
    },
    {
      id: 8,
      title: "men_pants",
      path: "/",
      image: Men8,
    },
  ];
  return (
    <div className="mensdropdown bg-white w-max py-2 px-4 rounded-xl shadow-dropdown absolute top-full left-20 hidden z-50">
      {/* Dropdown icon */}
      <div className="absolute left-6 -top-[9px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="11"
          viewBox="0 0 16 11"
          fill="none"
        >
          <path
            d="M7.15459 0.986589C7.55496 0.482265 8.32065 0.482265 8.72102 0.986589L15.3106 9.28733C15.8309 9.94269 15.3642 10.9091 14.5274 10.9091H1.3482C0.511445 10.9091 0.0447321 9.94269 0.564993 9.28733L7.15459 0.986589Z"
            fill="#fff"
          />
        </svg>
      </div>

      {/* Mapping the dropdown items and returning each one */}
      <ul>
        {dropdownMan?.map((item) => {
          const { id, image, path, title } = item;

          return (
            <li
              key={id}
              className="flex items-center gap-2 px-3 py-2 bg-transparent hover:bg-dropdownHoverBG rounded-lg duration-200 cursor-pointer"
            >
              <img src={image} alt={title} />

              <NavLink to={path}>
                <p className="text-dropdownText">{title}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MensDropdown;
