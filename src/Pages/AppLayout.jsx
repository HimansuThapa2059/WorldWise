import Sidebar from "../Components/Sidebar";
import Map from "../Components/Map";
import styles from "./AppLayout.module.css";
import User from "../Components/User";

const Layout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default Layout;
