import { Outlet } from "react-router-dom";
import "./style.css";

const Layout = () => {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
};

export default Layout;
