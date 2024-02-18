import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const BurgerMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "bg-yellow" : "hidden bg-transparent"
      } transition-all duration-300`}
    >
      <div className="flex flex-col items-center justify-center m-10">
        <div className="">
          <Image src="/images/1_black.png" alt="Logo" width={200} height={200} />
        </div>
        <div className="cursor-pointer my-8" onClick={onClose}>
          <CloseIcon />
        </div>
        <div className="text-2xl">
          <div className="my-1">Projects</div>
          <div className="my-1">Services</div>
          <div className="my-1">Articles</div>
          <div className="my-1">Free Tools</div>
          <div className="my-1">Let's Talk</div>
        </div>
        <div className="flex items-center justify-center my-10 space-x-4">
          <div className="">
            {" "}
            <Image src="/images/Vector.png" alt="Logo" width={50} height={50} />
          </div>
          <div className="">
            {" "}
            <Image src="/images/LikedIn.png" alt="Logo" width={50} height={50} />
          </div>
          <div className="">
            {" "}
            <Image src="/images/yellowInsta.png" alt="Logo" width={50} height={50} />
          </div>
        </div>
        <div className="text-center text-2xl">
          <div className="">Mail Us:</div>
          <div className="underline">
            <Link href="mailto:hello@productarchitects.eu">hello@productarchitects.eu</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ fonts }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <div className={fonts[0]}>
        <div className="flex items-center justify-between m-6">
          <div className="flex items-center justify-start">
            <div className="">
              <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
            </div>
            <div className="">The Product Architects</div>
            <div className="text-transparent text-stroke text-black text-2xl">Hollow Text</div>
          </div>
          <div className="flex items-center justify-end relative space-x-4">
            <div className="hidden sm:block">Sustainable Service Design</div>
            <div
              className="pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer"
              onClick={handleMenuToggle}
            >
              <div className="shadow-custom bg-yellow rounded-full p-1 border-darkYellow border-solid">
                <MenuIcon />
              </div>
            </div>
            <div className="sm:hidden">
              <BurgerMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
