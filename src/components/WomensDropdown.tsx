import { NavLink } from "react-router-dom";

// Mens Icons
import Women1 from "../assets/dropdownWomen/icon1.png";
import Women2 from "../assets/dropdownWomen/icon2.png";
import Women3 from "../assets/dropdownWomen/icon3.png";
import Women4 from "../assets/dropdownWomen/icon4.png";
import Women5 from "../assets/dropdownWomen/icon5.png";
import Women6 from "../assets/dropdownWomen/icon6.png";
import Women7 from "../assets/dropdownWomen/icon7.png";
import Women8 from "../assets/dropdownWomen/icon8.png";
import Women9 from "../assets/dropdownWomen/icon9.png";
import Women10 from "../assets/dropdownWomen/icon10.png";
import Women11 from "../assets/dropdownWomen/icon11.png";
import Women12 from "../assets/dropdownWomen/icon12.png";

const WomensDropdown = () => {
  // Navlinks
  const dropdownWomen = [
    {
      id: 1,
      title: "men_t-women_t-shirts",
      path: "/",
      image: Women1,
    },
    {
      id: 2,
      title: "women_croptops",
      path: "/",
      image: Women2,
    },
    {
      id: 3,
      title: "women_sweatshirt",
      path: "/",
      image: Women3,
    },
    {
      id: 4,
      title: "women_lognsleeve",
      path: "/",
      image: Women4,
    },
    {
      id: 5,
      title: "women_jackets",
      path: "/",
      image: Women5,
    },
    {
      id: 6,
      title: "women_shorts",
      path: "/",
      image: Women6,
    },
    {
      id: 7,
      title: "women_jeans",
      path: "/",
      image: Women7,
    },
    {
      id: 8,
      title: "women_pants",
      path: "/",
      image: Women8,
    },
    {
      id: 9,
      title: "women_dresses",
      path: "/",
      image: Women9,
    },
    {
      id: 10,
      title: "women_skirts",
      path: "/",
      image: Women10,
    },
    {
      id: 11,
      title: "women_bras",
      path: "/",
      image: Women11,
    },
    {
      id: 12,
      title: "women_sportbras",
      path: "/",
      image: Women12,
    },
  ];

  return (
    <div className="womensdropdown bg-white w-max py-2 px-4 rounded-xl shadow-dropdown absolute top-full left-[165px] hidden z-50">
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
        {dropdownWomen?.map((item) => {
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

export default WomensDropdown;
