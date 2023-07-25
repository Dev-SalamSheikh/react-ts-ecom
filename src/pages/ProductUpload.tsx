import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import BrandDropdown from "../components/propduct-upload/BrandDropdown";
import MenWomenDropdown from "../components/propduct-upload/MenWomenDropdown";
import UploadProductsContainer from "../components/propduct-upload/UploadProductsContainer";
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
        <UploadProductsContainer />
      </div>
    </>
  );
};

export default ProductUpload;
