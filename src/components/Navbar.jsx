import React from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ fonts }) => {
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
            <div className="pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
              <div className="shadow-custom bg-yellow  rounded-full p-1 border-darkYellow border-solid">
                <MenuIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
