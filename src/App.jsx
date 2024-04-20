import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import Layout from "./Pages/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/" element={<Homepage />} />
        <Route path="app" element={<Layout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
