import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import Appnav from "./AppNav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <Appnav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Sidebar;
