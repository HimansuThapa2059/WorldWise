import Sidebar from "../Components/Sidebar";
import Map from "../Components/Map";
import styles from "./AppLayout.module.css";

const Layout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
};

export default Layout;
