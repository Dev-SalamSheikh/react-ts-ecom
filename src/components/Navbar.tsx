import { NavLink } from "react-router-dom";
import Button from "./Button";
import MensDropdown from "./MensDropdown";
import WomensDropdown from "./WomensDropdown";

interface NavbarProps {
  homepage: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ homepage }) => {
  return (
    // Navbar Start
    <div
      className={`${
        homepage === true ? "bg-transparent" : "bg-navBG"
      } absolute top-0 left-0 w-full h-24 flex items-center justify-center navbar`}
    >
      {/* Container Start */}
      <div className="container mx-auto lg:w-10/12 w-11/12 h-full">
        <div className="w-full flex items-center justify-between h-full">
          {/* Left */}
          <div>
            <NavLink to="/">
              <h1 className="text-black text-3xl font-semibold">LOGO</h1>
            </NavLink>
          </div>

          {/* middle */}
          <div className="h-full relative">
            <ul className="h-full flex items-center justify-center gap-12 text-themeBlack">
              <li className="h-full flex items-center justify-center">
                <NavLink to="/">Home</NavLink>
              </li>

              <li className="h-full flex items-center justify-center man">
                <NavLink to="/men">Men</NavLink>

                {/* Mens Dropdown */}
                <MensDropdown />
              </li>

              <li className="h-full flex items-center justify-center women">
                <NavLink to="/women">Women</NavLink>

                {/* Womens dropdown */}
                <WomensDropdown />
              </li>
            </ul>
          </div>

          {/* right */}
          <div>
            {/* Calling Button Component */}
            <Button text="Get Started" bgColorCode="#DE3435" />
          </div>
        </div>
      </div>
      {/* Container end */}
    </div>
    // Navbar Start
  );
};

export default Navbar;
