"use client";
import React from "react";
import { useRouter } from "next/navigation"; 
import Button from "./button";
import Image from "next/image";
import Logo from "../images/Official Logo 1.png";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src={Logo}
          alt="Umurava Logo"
          className="h-8 mr-4"
          height={32}
          width={32}
        />
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Challenges & Hackathons</a>
            </li>
            <li>
              <a href="#">For Educational Institutions</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
        <Button onClick={() => router.push("/join")}>Join the Program</Button>
      </div>
    </header>
  );
};

export default Header;