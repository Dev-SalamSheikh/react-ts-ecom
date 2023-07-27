import { NavLink } from "react-router-dom";

// Mens Icons

const WomensDropdown = () => {
  // Navlinks
  const dropdownWomen = [
    {
      id: 1,
      title: "men_t-women_t-shirts",
      path: "/",
      image: "./images/dropdownWomen/icon1.png",
    },
    {
      id: 2,
      title: "women_croptops",
      path: "/",
      image: "./images/dropdownWomen/icon2.png",
    },
    {
      id: 3,
      title: "women_sweatshirt",
      path: "/",
      image: "./images/dropdownWomen/icon3.png",
    },
    {
      id: 4,
      title: "women_lognsleeve",
      path: "/",
      image: "./images/dropdownWomen/icon4.png",
    },
    {
      id: 5,
      title: "women_jackets",
      path: "/",
      image: "./images/dropdownWomen/icon5.png",
    },
    {
      id: 6,
      title: "women_shorts",
      path: "/",
      image: "./images/dropdownWomen/icon6.png",
    },
    {
      id: 7,
      title: "women_jeans",
      path: "/",
      image: "./images/dropdownWomen/icon7.png",
    },
    {
      id: 8,
      title: "women_pants",
      path: "/",
      image: "./images/dropdownWomen/icon8.png",
    },
    {
      id: 9,
      title: "women_dresses",
      path: "/",
      image: "./images/dropdownWomen/icon9.png",
    },
    {
      id: 10,
      title: "women_skirts",
      path: "/",
      image: "./images/dropdownWomen/icon10.png",
    },
    {
      id: 11,
      title: "women_bras",
      path: "/",
      image: "./images/dropdownWomen/icon11.png",
    },
    {
      id: 12,
      title: "women_sportbras",
      path: "/",
      image: "./images/dropdownWomen/icon12.png",
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
