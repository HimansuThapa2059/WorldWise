import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Homepage from "./Pages/Homepage";
import Login from "./Pages/Login";
import PageNotFound from "./Pages/PageNotFound";
import Layout from "./Pages/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<Layout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
