import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import HeroImage from './components/HeroImage/HeroImage';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <NavBar />
      <HeroImage />
      <ItemListContainer greetings={"Bienvenidos a la tienda"} />
      <Footer/>
    </>
  );
}

export default App
