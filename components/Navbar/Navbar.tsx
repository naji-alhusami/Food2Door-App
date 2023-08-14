import React from "react";
import Image from "next/image";
import appIcon from "@/public/Images/app-icon.png";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header>
      <div>
        <Image src={appIcon} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/standings">Standings</Link>
          </li>
          <li>
            <Link href="/standings">Standings</Link>
          </li>
          <li>
            <Link href="/standings">Standings</Link>
          </li>
          <li>
            <Link href="/standings">Standings</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
