import { Link } from "react-router-dom";
import Navbar from "../Components/PageNav";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <p>Homepage</p>
      <Link to="/app">App</Link>
    </div>
  );
};

export default Homepage;
