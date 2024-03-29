import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import HeroImage from "./components/HeroImage/HeroImage";
import Footer from "./components/Footer/Footer";
import CartPage from "./components/CartPage/CartPage";
import ProductFilterContainer from "./components/ProductFilterContainer/ProductFilterContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroImage />
                  <ItemListContainer greetings={"Welcome to the store"} />
                </>
              }
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/products/:id" element={<ItemDetailContainer />} />
            <Route
              path="/items/products/:category"
              element={<ProductFilterContainer />}
            />
            <Route path="*" element={<h1> Pagina no encontrada!</h1>} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
