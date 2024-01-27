import React from 'react'

const today = new Date();
const year = today.getFullYear();

function Footer() {
  return (
    <div className="bg-black py-5">
      <p className="text-md">© {year} ecommerce</p>
    </div>
  );
}

export default Footer