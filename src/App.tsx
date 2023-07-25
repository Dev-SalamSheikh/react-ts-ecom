import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "swiper/css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
