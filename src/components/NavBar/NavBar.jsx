import CartWidget from "../CartWidget/CartWidget";
import SiteLogo from "../SiteLogo/SiteLogo";

function NavBar() {
  return (
    <>
      <nav>
        <div className="flex flex-row gap-10 justify-center py-5 bg-black items-center">
          <SiteLogo/>
          <a className="text-white hover:text-pink" href="">Nosotros</a>
          <a className="text-white hover:text-pink" href="">Productos</a>
          <a className="text-white hover:text-pink" href="">Contacto</a>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
