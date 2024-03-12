import React, { useState, useContext } from "react";
import TextContext from "../TextContext";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../lib/sanity";
import getImageUrl from "../lib/sanity";
import SquareLoader from "react-spinners/SquareLoader";

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

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const MobileBurgerMenu = ({ isOpen, onClose, theme, email, navData, socialData }) => {
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
          {navData &&
            navData.map((item) => (
              <div
                key={item.id}
                className="my-1 cursor-pointer transition duration-500 ease-in-out transform hover:scale-[1.02]"
              >
                <ScrollLink to={item.link} smooth duration={500} onClick={onClose}>
                  {item.name}
                </ScrollLink>{" "}
              </div>
            ))}
        </div>
        <div className="flex items-center justify-center my-10 space-x-4">
          {socialData &&
            socialData.map((item) => (
              <div key={item.id} className="">
                <Image
                  src={urlFor(item.imageSrc.asset).url()}
                  alt={item.alt}
                  width={50}
                  height={50}
                />
              </div>
            ))}
        </div>
        <div className="text-center text-2xl">
          <div className="">Mail Us:</div>
          <div className="underline">
            <Link href={`mailto:${email}`}>{email}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const WebBurgerMenu = ({
  isOpen,
  onClose,
  theme,
  name,
  email,
  navData,
  socialData,
  bgImage,
  handleMouseOver,
  handleMouseOut,
  handleMenuToggle,
  isHovered,
  hoverStyle,
}) => {
  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? theme.textColor : "hidden bg-transparent"
      } transition-all duration-300`}
      style={{
        backgroundColor: theme ? theme.textColor : "#FECF4F",
      }}
    >
      <div className="flex justify-between">
        <div className="w-1/2 flex flex-col h-screen">
          {/* First div at the top */}
          <Link href="/" className="flex items-center justify-start relative space-x-4 m-10">
            <div className="pb-2 relative hover:bg-gradient-radial shadow-2xl cursor-pointer">
              <div
                className="shadow-custom  rounded-full p-1  border-solid"
                onClick={onClose}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                style={{
                  ...(isHovered ? hoverStyle : {}),
                  backgroundColor: theme ? theme.textColor : "#FECF4F",
                  borderColor: theme ? theme.textColor : "#FECF4F",
                }}
              >
                <MenuIcon />
              </div>
            </div>
            <div className="hidden sm:block cursor-pointer transition duration-500 ease-in-out transform hover:scale-[1.02]">
              {name}
            </div>
          </Link>

          {/* Second div in the middle */}
          <div className="flex-1 flex items-center justify-start m-10">
            <div className="flex items-center justify-center space-x-8">
              <div className="cursor-pointer" onClick={onClose}>
                <CloseIcon />
              </div>
              {navData &&
                navData.map((item) => (
                  <div
                    key={item.id}
                    className="my-1 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-[1.02]"
                  >
                    <ScrollLink to={item.link} smooth duration={500} onClick={onClose}>
                      {item.name}
                    </ScrollLink>
                  </div>
                ))}
            </div>
          </div>

          {/* Third div at the bottom */}
          <div className="flex justify-between m-10">
            <div className="flex space-x-4 placeholder:text-center">
              <div className="flex space-x-4 placeholder:text-center">
                <div className="">Mail Us:</div>
                <div className="underline transition-all duration-500 ease-in-out transform hover:scale-[1.02]">
                  <Link href={`mailto:${email}`}>{email}</Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4">
              {socialData &&
                socialData.map((item) => (
                  <div
                    key={item.id}
                    className="cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-[1.02]"
                  >
                    <Image
                      src={urlFor(item.imageSrc.asset).url()}
                      alt={item.alt}
                      width={20}
                      height={20}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="w-1/2">
          {/* Second div content (assuming it's an image) */}
          {/* <Image
            src={bgImage && bgImage.asset && urlFor(bgImage.asset).url()}
            alt="Logo"
            width={800}
            height={800}
          /> */}
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ navigationData, color }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const { name, icon, email, navBarOptions, navData, socialData, bgImage } = navigationData;
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    boxShadow: `0px 0px 4px 4px ${theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"}`,
  };
  if (!navigationData) {
    return (
      <div className=" col-span-full flex items-center justify-center">
        {<SquareLoader className="my-80" color={color} />}
      </div>
    );
  }

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="">
      <div className="">
        <div className="flex items-center justify-between m-6 sm:mx-0">
          <Link href="/" className="flex items-center justify-start">
            <div>
              <Image
                src={icon && icon.asset ? urlFor(icon.asset).url() : undefined}
                alt="Logo"
                width={40}
                height={40}
                // className="transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-darkYellow hover:text-darkYellow"
                className="transition-all duration-500 ease-in-out transform hover:scale-[1.02]"
              />
            </div>
            <div className="transition duration-500 ease-in-out transform hover:scale-[1.02]">
              {name}
            </div>
            {/* <div className="text-3xl transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow">
              TPA
            </div> */}
            {/* <div className="text-transparent text-stroke text-black text-2xl">Hollow Text</div> */}
          </Link>
          <div className="flex items-center justify-end relative space-x-4">
            <div className="hidden sm:block cursor-pointer transition duration-500 ease-in-out transform hover:scale-[1.02]">
              {navBarOptions && navBarOptions[0].optionName}
            </div>
            <div className="relative shadow-2xl cursor-pointer" onClick={handleMenuToggle}>
              <div
                className=" rounded-full p-1 border-solid"
                onClick={handleMenuToggle}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                style={{
                  ...(isHovered ? hoverStyle : {}),
                  backgroundColor: theme ? theme.textColor : "#FECF4F",
                  borderColor: theme ? theme.textColor : "#FECF4F",
                }}
              >
                <MenuIcon />
              </div>
            </div>
            <div className="sm:hidden">
              <MobileBurgerMenu
                isOpen={isMenuOpen}
                onClose={handleMenuToggle}
                theme={theme}
                email={email}
                navData={navData}
                socialData={socialData}
                color={color}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                handleMenuToggle={handleMenuToggle}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                hoverStyle={hoverStyle}
              />
            </div>
            <div className="hidden sm:block">
              <WebBurgerMenu
                isOpen={isMenuOpen}
                onClose={handleMenuToggle}
                theme={theme}
                name={name}
                email={email}
                navData={navData}
                socialData={socialData}
                bgImage={bgImage}
                color={color}
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                handleMenuToggle={handleMenuToggle}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                hoverStyle={hoverStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
