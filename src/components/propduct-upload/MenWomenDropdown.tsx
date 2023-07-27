// Mens Icon
import Men1 from "../../assets/dropdownMen/d-men-1.png";
import Men2 from "../../assets/dropdownMen/d-men-2.png";
import Men3 from "../../assets/dropdownMen/d-men-3.png";
import Men4 from "../../assets/dropdownMen/d-men-4.png";
import Men5 from "../../assets/dropdownMen/d-men-5.png";
import Men6 from "../../assets/dropdownMen/d-men-6.png";
import Men7 from "../../assets/dropdownMen/d-men-7.png";
import Men8 from "../../assets/dropdownMen/d-men-8.png";

// Womens Icon
import Women1 from "../../assets/dropdownWomen/icon1.png";
import Women2 from "../../assets/dropdownWomen/icon2.png";
import Women3 from "../../assets/dropdownWomen/icon3.png";
import Women4 from "../../assets/dropdownWomen/icon4.png";
import Women5 from "../../assets/dropdownWomen/icon5.png";
import Women6 from "../../assets/dropdownWomen/icon6.png";
import Women7 from "../../assets/dropdownWomen/icon7.png";
import Women8 from "../../assets/dropdownWomen/icon8.png";
import Women9 from "../../assets/dropdownWomen/icon9.png";
import Women10 from "../../assets/dropdownWomen/icon10.png";
import Women11 from "../../assets/dropdownWomen/icon11.png";
import Women12 from "../../assets/dropdownWomen/icon12.png";

import DropdownCard from "./DropdownCard";

const MenWomenDropdown = () => {
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

  //   Womens Dropdown Data
  const dropdownWomen = [
    {
      id: 1,
      title: "men_t-women_t-shirts",
      image: Women1,
    },
    {
      id: 2,
      title: "women_croptops",
      image: Women2,
    },
    {
      id: 3,
      title: "women_sweatshirt",
      image: Women3,
    },
    {
      id: 4,
      title: "women_lognsleeve",
      image: Women4,
    },
    {
      id: 5,
      title: "women_jackets",
      image: Women5,
    },
    {
      id: 6,
      title: "women_shorts",
      image: Women6,
    },
    {
      id: 7,
      title: "women_jeans",
      image: Women7,
    },
    {
      id: 8,
      title: "women_pants",
      image: Women8,
    },
    {
      id: 9,
      title: "women_dresses",
      image: Women9,
    },
    {
      id: 10,
      title: "women_skirts",
      image: Women10,
    },
    {
      id: 11,
      title: "women_bras",
      image: Women11,
    },
    {
      id: 12,
      title: "women_sportbras",
      image: Women12,
    },
  ];
  return (
    <div className="w-full flex items-start justify-between md:flex-row flex-col gap-4 pb-14 border-b border-b-dashboardBorder">
      {/* Mens Dropdown */}
      <DropdownCard key="mens-dropdown" heading="Man" data={dropdownMan} />

      {/* Womens Dropdown */}
      <DropdownCard key="mens-dropdown" heading="Women" data={dropdownWomen} />
    </div>
  );
};

export default MenWomenDropdown;
