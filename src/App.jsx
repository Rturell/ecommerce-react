import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import HeroImage from './components/HeroImage/HeroImage';
import Footer from './components/Footer/Footer';
import CartPage from './components/CartPage/CartPage';
import ProductFilterContainer from './components/ProductFilterContainer/ProductFilterContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailCOntainer';


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={
              <>
                <HeroImage />
                <ItemListContainer greetings={"Bienvenidos a la tienda"} />
              </>
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
          <Route path="items/products/:category" element={<ProductFilterContainer />} />
          <Route path="*" element={<h1> Pagina no encontrada</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
