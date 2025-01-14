import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
