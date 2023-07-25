import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import BrandDropdown from "../components/propduct-upload/BrandDropdown";
import MenWomenDropdown from "../components/propduct-upload/MenWomenDropdown";
const ProductUpload = () => {
  return (
    <>
      {/* Navbar */}
      <DashboardNavbar />

      {/* Container */}
      <div className="container mx-auto lg:w-7/12 w-11/12 my-14">
        {/* Select brand Dropdown */}
        <BrandDropdown />

        {/* Mens and womens dropdown */}
        <MenWomenDropdown />

        {/* Product Upload Cards */}
        <div className="py-16">
          {/* Card */}
          <div className="w-full flex items-center gap-20">
            {/* Left Side */}
            <div className="w-3/12 bg-uploadImageBG flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M24 37.5C23.5667 37.5 23.2087 37.3587 22.926 37.076C22.642 36.792 22.5 36.4333 22.5 36V25.5H12C11.5667 25.5 11.2087 25.358 10.926 25.074C10.642 24.7913 10.5 24.4333 10.5 24C10.5 23.5667 10.642 23.208 10.926 22.924C11.2087 22.6413 11.5667 22.5 12 22.5H22.5V12C22.5 11.5667 22.642 11.2087 22.926 10.926C23.2087 10.642 23.5667 10.5 24 10.5C24.4333 10.5 24.792 10.642 25.076 10.926C25.3587 11.2087 25.5 11.5667 25.5 12V22.5H36C36.4333 22.5 36.792 22.6413 37.076 22.924C37.3587 23.208 37.5 23.5667 37.5 24C37.5 24.4333 37.3587 24.7913 37.076 25.074C36.792 25.358 36.4333 25.5 36 25.5H25.5V36C25.5 36.4333 25.3587 36.792 25.076 37.076C24.792 37.3587 24.4333 37.5 24 37.5Z"
                  fill="#1C1B1F"
                />
              </svg>
            </div>

            {/* Right side */}
            <div className="w-9/12 py-2">
              {/* Upper Layer */}
              <div className="flex items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductUpload;
