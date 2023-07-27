import DropdownCard from "./DropdownCard";

const MenWomenDropdown = () => {
  // Mens Dropdown data
  const dropdownMan = [
    {
      id: 1,
      title: "men_t-shirts",
      image: "./images/dropdownMen/d-men-1.png",
    },
    {
      id: 2,
      title: "men_shortsleevebutton",
      image: "./images/dropdownMen/d-men-2.png",
    },
    {
      id: 3,
      title: "men_sweatshirt",
      image: "./images/dropdownMen/d-men-3.png",
    },
    {
      id: 4,
      title: "men_lognsleevebutton",
      image: "./images/dropdownMen/d-men-4.png",
    },
    {
      id: 5,
      title: "men_jackets",
      image: "./images/dropdownMen/d-men-5.png",
    },
    {
      id: 6,
      title: "men_shorts",
      image: "./images/dropdownMen/d-men-6.png",
    },
    {
      id: 7,
      title: "men_jeans",
      image: "./images/dropdownMen/d-men-7.png",
    },
    {
      id: 8,
      title: "men_pants",
      image: "./images/dropdownMen/d-men-8.png",
    },
  ];

  //   Womens Dropdown Data
  const dropdownWomen = [
    {
      id: 1,
      title: "men_t-women_t-shirts",
      image: "./images/dropdownWomen/icon1.png",
    },
    {
      id: 2,
      title: "women_croptops",
      image: "./images/dropdownWomen/icon2.png",
    },
    {
      id: 3,
      title: "women_sweatshirt",
      image: "./images/dropdownWomen/icon3.png",
    },
    {
      id: 4,
      title: "women_lognsleeve",
      image: "./images/dropdownWomen/icon4.png",
    },
    {
      id: 5,
      title: "women_jackets",
      image: "./images/dropdownWomen/icon5.png",
    },
    {
      id: 6,
      title: "women_shorts",
      image: "./images/dropdownWomen/icon6.png",
    },
    {
      id: 7,
      title: "women_jeans",
      image: "./images/dropdownWomen/icon7.png",
    },
    {
      id: 8,
      title: "women_pants",
      image: "./images/dropdownWomen/icon8.png",
    },
    {
      id: 9,
      title: "women_dresses",
      image: "./images/dropdownWomen/icon9.png",
    },
    {
      id: 10,
      title: "women_skirts",
      image: "./images/dropdownWomen/icon10.png",
    },
    {
      id: 11,
      title: "women_bras",
      image: "./images/dropdownWomen/icon11.png",
    },
    {
      id: 12,
      title: "women_sportbras",
      image: "./images/dropdownWomen/icon12.png",
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
