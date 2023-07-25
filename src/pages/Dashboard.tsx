import DashboardFilter from "../components/Dashboard/DashboardFilter";
import DashboardHeading from "../components/Dashboard/DashboardHeading";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import DashboardProducts from "../components/Dashboard/DashboardProducts";

const Dashboard = () => {
  return (
    <>
      {/* Navbar */}
      <DashboardNavbar />
      {/* Container */}
      <div className="container mx-auto lg:w-10/12 w-11/12">
        {/* Page heading */}
        <DashboardHeading />
        {/* Filter */}
        <DashboardFilter />
        {/* Product */}
        <DashboardProducts />
      </div>
    </>
  );
};

export default Dashboard;
