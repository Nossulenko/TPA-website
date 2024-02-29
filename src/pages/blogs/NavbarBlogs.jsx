import React, { useState, useContext } from "react";
import TextContext from "../../TextContext";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";
import getImageUrl from "../../lib/sanity";

const navData = [
  { id: 1, name: "Projects", link: "whatWeDo" },
  { id: 2, name: "Services", link: "services" },
  { id: 3, name: "Articles", link: "articles" },
  { id: 4, name: "Free Tools", link: "articles" },
  { id: 5, name: "Let's Talk", link: "letsTalk" },
];

const socialData = [
  { id: 1, imageSrc: "/images/Vector.png", alt: "Logo" },
  { id: 2, imageSrc: "/images/LikedIn.png", alt: "Logo" },
  { id: 3, imageSrc: "/images/yellowInsta.png", alt: "Logo" },
];

const navBarOptions = [
  { id: 1, name: "Cases", link: "" },
  { id: 2, name: "Blogs", link: "" },
  { id: 3, name: "About", link: "" },
  { id: 4, name: "Contact", link: "" },
];

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const MobileBurgerMenu = ({ isOpen, onClose, theme, email, navData, socialData }) => {
  return (
    <div
      className={`animate-fade-down animate-ease-out mt-[4.2rem] h-1/4 fixed inset-0 z-50 ${
        isOpen ? "bg-blue1" : "hidden bg-transparent"
      } transition-all duration-300`}
    >
      <div className="text-right m-10">
        <div className="text-2xl text-white">
          {navBarOptions &&
            navBarOptions.map((item) => (
              <div key={item.id} className="my-1 font-medium hsvelte-p4r7f7">
                <Link
                  to={item.link}
                  className="underline decoration-primary decoration-4 md:no-underline svelte-p4r7f7"
                  smooth
                  duration={500}
                  onClick={onClose}
                >
                  {item.name}
                </Link>{" "}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ navigationData }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  if (!navigationData) {
    return null; 
  }
  // const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const { name, icon, email, navData, socialData, bgImage } = navigationData;

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  // console.log("theme Navbar", theme);
  return (
    <div className="bg-blue1 sm:bg-white showHeader">
      <div className="">
        <div className="flex items-center justify-between ml-4 sm:ml-20 mr-4 sm:my-2 py-2 sm:py-0">
          <div className="flex items-center justify-start">
            <div className="">
              <Image src="/images/TPA.svg" alt="Logo" width={60} height={60} />
            </div>

            <div className="text-transparent text-stroke text-black text-2xl">Hollow Text</div>
          </div>
          <div className="flex items-center justify-end relative space-x-2 sm:space-x-12 ">
            {/* <div className="hidden sm:flex justify-center items-center space-x-12 font-medium"> */}
            <div className="hidden sm:flex justify-center items-center space-x-12 font-medium">
              {navBarOptions &&
                navBarOptions.map((option, index) => (
                  <div className="group" key={index}>
                    <Link
                      to={option.link}
                      className="px-4 option hover:cursor-pointer hover-strikethrough font-medium"
                    >
                      {" "}
                      {option.name}
                    </Link>
                  </div>
                ))}
              {/* {navBarOptions &&
                navBarOptions.map((option, index) => (
                  <Link
                    href={option.link}
                    key={index}
                    className="flex h-11 w-[115px] justify-center items-center relative group svelte-p4r7f7"
                  >
                    <div class="w-3/5 h-1 absolute bg-primary mix-blend-multiply -z-10 svelte-p4r7f7"></div>
                    {option.name}
                  </Link>
                ))} */}
            </div>
            <div
              className="sm:hidden pb-2 relative shadow-2xl cursor-pointer"
              onClick={handleMenuToggle}
            >
              <div className="">
                <Image src="/images/menu.svg" alt="Logo" width={25} height={25} />
              </div>
            </div>
            <div className="sm:hidden">
              <MobileBurgerMenu
                isOpen={isMenuOpen}
                onClose={handleMenuToggle}
                // theme={theme}
                email={email}
                navData={navData}
                socialData={socialData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
