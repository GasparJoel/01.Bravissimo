import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Hero } from "./Components/MenuNavbar/Hero";
import { About } from "./Components/MenuNavbar/About";
import { Menu } from "./Components/MenuNavbar/Menu";
import { Locations } from "./Components/MenuNavbar/Locations";
import { Contact } from "./Components/MenuNavbar/Contact";
import { Gallery } from "./Components/MenuNavbar/Gallery";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/about", element: <About /> },
      { path: "/menu", element: <Menu /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/locations", element: <Locations /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);
