import CartWidget from "../CartWidget/CartWidget";
import SiteLogo from "../SiteLogo/SiteLogo";

function NavBar() {
  return (
    <>
      <nav>
        <div className="flex flex-row gap-10 justify-center py-5 bg-black">
          <SiteLogo/>
          <h2 className="font-bold">ecommerce</h2>
          <a className="text-white hover:text-pink" href="">Link 1</a>
          <a className="text-white hover:text-pink" href="">Link 2</a>
          <a className="text-white hover:text-pink" href="">Link 3</a>
          <a className="text-white hover:text-pink" href="">Link 4</a>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
