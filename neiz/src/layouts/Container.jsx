import { Route, Routes } from "react-router-dom";
import { routes } from "../utilities/Routes.jsx";
import ScrollTop from "../utilities/ScrollTop";

const Container = () => {
  return (
    <div className="container">
     
      <ScrollTop />
      <Routes>
        {routes.map((route, routeIndex) => (
          <Route
            key={routeIndex}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
      
    </div>
  );
};

export default Container;
