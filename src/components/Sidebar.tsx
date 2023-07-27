import { NavLink } from "react-router-dom";
import { useState } from "react";

// Mens Icon
import Men1 from "../assets/dropdownMen/d-men-1.png";
import Men2 from "../assets/dropdownMen/d-men-2.png";
import Men3 from "../assets/dropdownMen/d-men-3.png";
import Men4 from "../assets/dropdownMen/d-men-4.png";
import Men5 from "../assets/dropdownMen/d-men-5.png";
import Men6 from "../assets/dropdownMen/d-men-6.png";
import Men7 from "../assets/dropdownMen/d-men-7.png";
import Men8 from "../assets/dropdownMen/d-men-8.png";

// Women icons
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

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: (show: boolean) => void;
}

const Sidebar = ({ showSidebar, setShowSidebar }: SidebarProps) => {
  // Mens Dropdown data
  const dropdownMan = [
    {
      id: 1,
      title: "men_t-shirts",

      image: Men1,
    },
    {
      id: 2,
      title: "men_shortsleevebutton",

      image: Men2,
    },
    {
      id: 3,
      title: "men_sweatshirt",

      image: Men3,
    },
    {
      id: 4,
      title: "men_lognsleevebutton",

      image: Men4,
    },
    {
      id: 5,
      title: "men_jackets",

      image: Men5,
    },
    {
      id: 6,
      title: "men_shorts",

      image: Men6,
    },
    {
      id: 7,
      title: "men_jeans",

      image: Men7,
    },
    {
      id: 8,
      title: "men_pants",

      image: Men8,
    },
  ];

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

  // states
  const [showMenItem, setShowMenItem] = useState(false);
  const [showWomen, setShowWomen] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div>
      <div
        className={`h-[100svh] w-[65%] bg-themeOrange fixed top-0 z-50 overflow-y-auto md:hidden block duration-500 ${
          showSidebar === true ? "right-0" : "-right-full"
        }`}
      >
        <div className="w-full h-full flex pt-20 flex-col gap-10 px-8 pb-4 relative">
          <div>
            <NavLink to="/" className="text-white">
              Home
            </NavLink>
          </div>

          <div className=" w-full">
            <div
              className="flex items-center justify-between"
              onClick={() => setShowMenItem(!showMenItem)}
            >
              <p className="text-white">Men</p>
              <i
                className={`fa-solid fa-chevron-down text-white ${
                  showMenItem === true ? "rotate-180" : "rotate-0"
                } duration-300`}
              ></i>
            </div>
            {/* Dropdown */}
            {showMenItem === true ? (
              <div className="mt-4">
                <ul>
                  {dropdownMan?.map((item) => {
                    const { id, image, title } = item;

                    return (
                      <div key={id} className="flex items-center gap-1">
                        <p className="flex items-center gap-2 py-2 bg-transparent rounded-lg cursor-pointer">
                          <img src={image} alt={title} />
                          <p className="text-white text-sm">{title}</p>
                        </p>
                      </div>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>

          <div className=" w-full">
            <div
              className="flex items-center justify-between"
              onClick={() => setShowWomen(!showWomen)}
            >
              <p className="text-white">Women</p>
              <i
                className={`fa-solid fa-chevron-down text-white ${
                  showWomen === true ? "rotate-180" : "rotate-0"
                } duration-300`}
              ></i>
            </div>

            {showWomen === true ? (
              <div className="mt-4">
                <ul>
                  {dropdownWomen?.map((item) => {
                    const { id, image, title } = item;

                    return (
                      <div key={id} className="flex items-center gap-1">
                        <p className="flex items-center gap-2 py-2 bg-transparent rounded-lg cursor-pointer">
                          <img src={image} alt={title} />
                          <p className="text-white text-sm">{title}</p>
                        </p>
                      </div>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>

          {/* Close Sidbar */}
          <div className="absolute right-4 top-4" onClick={toggleSidebar}>
            <i className="fa-solid fa-x text-xl text-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
