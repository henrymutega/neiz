import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Error404 from "../pages/errors/Error404";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/home",
    element: Home,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/services",
    element: Services,
  },
  {
    path: "/contact",
    element: Contact,
  },
  {
    path: "*",
    element: Error404,
  },
];
