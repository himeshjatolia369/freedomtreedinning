import { Routes, Route } from "react-router-dom";
import CeramicShop from "./components/CeramicShop";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CeramicShop />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
