import React, { useState } from "react";
import NavBarDrawer from "./NavBarDrawer"; // Ensure the correct path to NavBarDrawer component
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-white">
      {/* Logo */}
      <img src="path/to/logo.png" alt="Logo" className="h-10" />

      {/* Hamburger Icon */}
      <div className="lg:hidden">
        <Hamburger toggled={open} toggle={setOpen} />
      </div>

      {/* Drawer Component */}
      <NavBarDrawer open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
