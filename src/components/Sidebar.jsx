// TPA-Website/src/components/Sidebar.jsx
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import TextContext from "../TextContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as ScrollLink } from "react-scroll";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../lib/sanity";
import getImageUrl from "../lib/sanity";
import Image from "next/image";
import SquareLoader from "react-spinners/SquareLoader";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const Sidebar = ({ isOpen, setIsOpen, navigationData, color }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const [isHovered, setIsHovered] = useState(false);
  const { name, icon, email, navBarOptions, navData, socialData, bgImage } = navigationData;
  const hoverStyle = {
    boxShadow: `0px 0px 4px 4px ${theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"}`,
    backgroundColor: theme ? theme.textColor : "#FECF4F",
    borderColor: theme ? theme.textColor : "#FECF4F",
  };
  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsHovered(false);
  };
  //   console.log("navData", navData);
  return (
    <div
      className={`hidden md:block h-screen  -mt-4 fixed bg-yellow ${
        isOpen ? "w-52 mr-8" : "w-0"
      } transition-all duration-200 z-50`}
    >
      <div className="">
        {" "}
        <button
          onClick={handleToggle}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
          style={{
            backgroundColor: color === "yellow" ? (theme ? theme.textColor : "#FECF4F") : "",
            borderColor: color === "yellow" ? (theme ? theme.textColor : "#FECF4F") : "",
            ...(isHovered ? hoverStyle : {}),

            backgroundColor: theme ? theme.textColor : "#FECF4F",
            borderColor: theme ? theme.textColor : "#FECF4F",
          }}
          className={`rounded-full p-1 border-solid mt-8 mx-4 2k1:ml-8 2k2:ml-40 2k3:ml-64 2k4:ml-[26rem] 2k5:ml-[37rem] 2k6:ml-[48rem] 2k7:ml-[64rem] 2k8:ml-[80rem] 2k9:ml-[90rem]  ${
            isOpen ? "hidden" : ""
          }`}
        >
          {isOpen ? "" : <MenuIcon />}
        </button>
        {isOpen && (
          <div className="">
            {" "}
            <div className="flex flex-col items-center justify-center h-screen">
              <div className="cursor-pointer mb-20" onClick={handleToggle}>
                <CloseIcon />
              </div>
              <div className="mb-8">
                <Image src="/images/1_black.png" alt="Logo" width={149} height={136} />
              </div>

              <div className="text-2xl">
                {navData &&
                  navData.map((item) => (
                    <div
                      key={item.id}
                      className="my-2 cursor-pointer transition duration-500 ease-in-out transform hover:scale-[1.02]"
                    >
                      <Link href={item.link} smooth duration={500} onClick={handleToggle}>
                        {item.name}
                      </Link>{" "}
                    </div>
                  ))}
                <div className="my-2 cursor-pointer transition duration-500 ease-in-out transform hover:scale-[1.02]">
                  <ScrollLink to="letsTalk" smooth duration={500} onClick={handleToggle}>
                    Lets Talk
                  </ScrollLink>{" "}
                </div>
              </div>
              <div className="flex items-center justify-center my-10 space-x-4">
                {socialData &&
                  socialData.map((item) => (
                    <div key={item.id} className="">
                      <Image
                        className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-glow"
                        src={urlFor(item.imageSrc.asset).url()}
                        alt={item.alt}
                        width={26}
                        height={27.811}
                      />
                    </div>
                  ))}
              </div>
              {/* <div className="text-center text-2xl">
           <div className="">Mail Us:</div>
           <div className="underline">
             <Link href={`mailto:${email}`}>{email}</Link>
           </div>
         </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
