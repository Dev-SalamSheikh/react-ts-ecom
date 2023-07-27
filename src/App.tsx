import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
