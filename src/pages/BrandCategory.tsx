import { useState } from "react";
import Navbar from "../components/Navbar";
import BrandCategoryCards from "../components/brand-category/BrandCategoryCards";
import FilterHeading from "../components/category/FilterHeading";
import Nike from "../assets/brands/nike.png";
import Adidas from "../assets/brands/adidas.png";
import Levis from "../assets/brands/levis.png";
import Puma from "../assets/brands/puma.png";
import Louis from "../assets/brands/louis.png";

import Tshirt from "../assets/tshirt.png";

const BrandCategory = () => {
  // options
  const options = [
    {
      id: 1,
      option: "Popular",
    },
    {
      id: 2,
      option: "Popular Two",
    },
    {
      id: 3,
      option: "Popular Three",
    },
    {
      id: 4,
      option: "Popular Four",
    },
  ];

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

  // pagination buttons
  const paginationBtns = [
    {
      id: 1,
      pageNo: "1",
    },
    {
      id: 2,
      pageNo: "2",
    },
    {
      id: 3,
      pageNo: "3",
    },
    {
      id: 4,
      pageNo: "4",
    },
    {
      id: 5,
      pageNo: "5",
    },
  ];

  const [activePage, setActivePage] = useState(1);

  return (
    <>
      {/* Navbar */}
      <Navbar homepage={false} />
      <div className="container mx-auto lg:w-10/12 w-11/12 mt-24 pt-20">
        {/* Heading */}
        <FilterHeading heading="Men Tshirts" options={options} />
        {/* Nike Products */}
        <BrandCategoryCards brandImg={Nike} data={tshirtData} />

        {/* adidas Products */}
        <BrandCategoryCards brandImg={Adidas} data={tshirtData} />

        {/* levis Products */}
        <BrandCategoryCards brandImg={Levis} data={tshirtData} />

        {/* Puma Products */}
        <BrandCategoryCards brandImg={Puma} data={tshirtData} />

        {/* Louis Products */}
        <BrandCategoryCards brandImg={Louis} data={tshirtData} />

        {/* Pagination */}
        <div className="mt-24 mb-14">
          <div className="flex items-center justify-center gap-[10px]">
            {/* Prev Btn */}
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setActivePage((prev) => prev - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M10.9 17.1C11.05 16.95 11.125 16.7707 11.125 16.562C11.125 16.354 11.05 16.175 10.9 16.025L7.6 12.75H19.375C19.5917 12.75 19.7707 12.679 19.912 12.537C20.054 12.3957 20.125 12.2167 20.125 12C20.125 11.7834 20.054 11.604 19.912 11.462C19.7707 11.3207 19.5917 11.25 19.375 11.25H7.6L10.925 7.95002C11.0583 7.80002 11.125 7.62502 11.125 7.42502C11.125 7.22502 11.05 7.05002 10.9 6.90002C10.75 6.73336 10.575 6.65002 10.375 6.65002C10.175 6.65002 9.99167 6.73336 9.825 6.90002L5.35 11.375C5.26667 11.4584 5.204 11.554 5.162 11.662C5.12067 11.7707 5.1 11.8834 5.1 12C5.1 12.1167 5.12067 12.229 5.162 12.337C5.204 12.4457 5.26667 12.5417 5.35 12.625L9.85 17.125C10 17.275 10.175 17.35 10.375 17.35C10.575 17.35 10.75 17.2667 10.9 17.1Z"
                  fill="#3D424D"
                />
              </svg>

              <p className="text-placeholderColor2">Prev</p>
            </div>

            {/* Middle */}
            <div className="flex items-center gap-[10px]">
              {paginationBtns?.map((btn) => {
                const { id, pageNo } = btn;

                return (
                  <button
                    onClick={() => setActivePage(id)}
                    key={id}
                    className={`bg-dropdownHoverBG text-placeholderColor2 w-12 h-12 border outline-none rounded-full cursor-pointer ${
                      activePage === id
                        ? "text-themeOrange border border-themeOrange"
                        : ""
                    }`}
                  >
                    {id === 4 ? "..." : pageNo}
                  </button>
                );
              })}
            </div>

            {/* next Btn */}
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setActivePage((prev) => prev + 1)}
            >
              <p className="text-placeholderColor2">Next</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M14.3246 17.1C14.1746 16.95 14.0996 16.7707 14.0996 16.562C14.0996 16.354 14.1746 16.175 14.3246 16.025L17.6246 12.75H5.84961C5.63294 12.75 5.45394 12.679 5.31261 12.537C5.17061 12.3957 5.09961 12.2167 5.09961 12C5.09961 11.7834 5.17061 11.604 5.31261 11.462C5.45394 11.3207 5.63294 11.25 5.84961 11.25H17.6246L14.2996 7.95002C14.1663 7.80002 14.0996 7.62502 14.0996 7.42502C14.0996 7.22502 14.1746 7.05002 14.3246 6.90002C14.4746 6.73336 14.6496 6.65002 14.8496 6.65002C15.0496 6.65002 15.2329 6.73336 15.3996 6.90002L19.8746 11.375C19.9579 11.4584 20.0206 11.554 20.0626 11.662C20.1039 11.7707 20.1246 11.8834 20.1246 12C20.1246 12.1167 20.1039 12.229 20.0626 12.337C20.0206 12.4457 19.9579 12.5417 19.8746 12.625L15.3746 17.125C15.2246 17.275 15.0496 17.35 14.8496 17.35C14.6496 17.35 14.4746 17.2667 14.3246 17.1Z"
                  fill="#3D424D"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCategory;
