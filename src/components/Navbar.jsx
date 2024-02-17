import React from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ fonts }) => {
  return (
    <div className="">
      <div className={fonts[0]}>
        <div className="flex items-center justify-between m-6">
          <div className="flex items-start justify-start">
            <div className="">
              <Image src="/images/logo.png" alt="Logo" width={40} height={40} layout="fixed" />
            </div>
            <div className="">The Product Architects</div>
            <div className="text-transparent text-stroke text-black text-2xl">Hollow Text</div>
          </div>
          <div className="flex items-start justify-end relative space-x-4">
            <div className="">Sustainable Service Design</div>
            <div className="pb-2 relative bg-gradient-radial">
              <div className="bg-yellow rounded-full p-1 border-darkYellow border-solid">
                <MenuIcon />
              </div>
              {/* <div className="absolute inset-0 rounded-full " /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
