import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <nav>
        <div className="flex flex-row gap-10">
          <h2>ecommerce</h2>
          <a href="">Link 1</a>
          <a href="">Link 2</a>
          <a href="">Link 3</a>
          <a href="">Link 4</a>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
