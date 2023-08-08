import React from "react";
import Image from "next/image";
import PLLogo from "@/public/Images/PLLogo.jpg"

const Navbar: React.FC = () => {
  return (
    <header>
      <div>
        <Image src={PLLogo} alt="logo" />
      </div>
    </header>
  );
};

export default Navbar;
