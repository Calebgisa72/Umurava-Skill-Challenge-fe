"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "./button";
import Image from "next/image";
import Logo from "../images/umurava-logo.png";

const Header: React.FC = () => {
  const router = useRouter();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Challenges & Hackathons", href: "/challenges" },
    { name: "For Educational Institutions", href: "/education" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center gap-8">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={Logo}
              alt="Umurava Logo"
              width={120}
              height={70}
              priority
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex flex-1">
            <ul className="flex flex-row items-center justify-center gap-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary-color transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex-shrink-0">
            <Button onClick={() => router.push("/join")}>
              Join the Program
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
