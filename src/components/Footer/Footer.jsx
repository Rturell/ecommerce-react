import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const today = new Date();
const year = today.getFullYear();

function Footer() {
  return (
    <div className="bg-black py-5">
      <p className="text-md">© {year} ecommerce</p>
    </div>
  );
}

export default Footer;
