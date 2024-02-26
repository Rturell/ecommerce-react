import CartWidget from "../CartWidget/CartWidget";
import SiteLogo from "../SiteLogo/SiteLogo";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <div className="flex flex-row gap-10 justify-center py-5 bg-black items-center">
          <NavLink className="text-white hover:text-pink" to="/">
            <SiteLogo />
          </NavLink>

          <NavLink className="text-white hover:text-pink" to="/products/electronics">
            Electronic
          </NavLink>

          <NavLink className="text-white hover:text-pink" to="/products/jewelery">
            Jewelery
          </NavLink>

          <NavLink className="text-white hover:text-pink" to="/products/men's clothing">
            Men
          </NavLink>

          <NavLink className="text-white hover:text-pink" to="/products/women's clothing">
            Woman
          </NavLink>

          <NavLink to="/cart">
            <CartWidget />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
