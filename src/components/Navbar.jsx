import React, { useState, useContext } from "react";
import TextContext from "../TextContext";
import Image from "next/image";
// import Link from "next/link";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navData = [
  { id: 1, name: "Projects", link: "whatWeDo" },
  { id: 2, name: "Services", link: "services" },
  { id: 3, name: "Articles", link: "articles" },
  { id: 4, name: "Free Tools", link: "articles" }, // You might want to change the 'link'
  { id: 5, name: "Let's Talk", link: "letsTalk" },
];

const socialData = [
  { id: 1, imageSrc: "/images/Vector.png", alt: "Logo" },
  { id: 2, imageSrc: "/images/LikedIn.png", alt: "Logo" },
  { id: 3, imageSrc: "/images/yellowInsta.png", alt: "Logo" },
];

const contactData = [
  {
    id: 1,
    type: "Mail Us:",
    link: "mailto:hello@productarchitects.eu",
    text: "hello@productarchitects.eu",
  },
  // Add other contact options here as needed
];

const MobileBurgerMenu = ({ isOpen, onClose, theme }) => {
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
          <div className="my-1 cursor-pointer">
            <Link to="whatWeDo" smooth duration={500} onClick={onClose}>
              Projects
            </Link>{" "}
          </div>
          <div className="my-1 cursor-pointer">
            {" "}
            <Link to="services" smooth duration={500} onClick={onClose}>
              Services
            </Link>
          </div>
          <div className="my-1 cursor-pointer">
            {" "}
            <Link to="articles" smooth duration={500} onClick={onClose}>
              Articles
            </Link>
          </div>
          <div className="my-1 cursor-pointer">
            <Link to="articles" smooth duration={500} onClick={onClose}>
              Free Tools
            </Link>
          </div>
          <div className="my-1 cursor-pointer">
            {" "}
            <Link to="letsTalk" smooth duration={500} onClick={onClose}>
              Let's Talk
            </Link>
          </div>
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

const WebBurgerMenu = ({ isOpen, onClose, theme }) => {
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
          <div className="flex items-center justify-start relative space-x-4 m-10">
            <div className="pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
              <div
                className="shadow-custom bg-yellow rounded-full p-1 border-yellow border-solid"
                onClick={onClose}
                style={{
                  backgroundColor: theme ? theme.textColor : "#FECF4F",
                  borderColor: theme ? theme.textColor : "#FECF4F",
                  boxShadow: `0px 0px 4px 4px ${
                    theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"
                  }`,
                }}
              >
                <MenuIcon />
              </div>
            </div>
            <div className="hidden sm:block">The Product Architects</div>
          </div>

          {/* Second div in the middle */}
          <div className="flex-1 flex items-center justify-start m-10">
            <div className="flex items-center justify-center space-x-8">
              <div className="cursor-pointer" onClick={onClose}>
                <CloseIcon />
              </div>
              {navData.map((item) => (
                <div key={item.id} className="my-1 cursor-pointer">
                  <Link to={item.link} smooth duration={500} onClick={onClose}>
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Third div at the bottom */}
          <div className="flex justify-between m-10">
            <div className="flex space-x-4 placeholder:text-center">
              {contactData.map((item) => (
                <div key={item.id} className="flex space-x-4 placeholder:text-center">
                  <div className="">{item.type}</div>
                  <div className="underline">
                    <Link href={item.link}>{item.text}</Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-4">
              {socialData.map((item) => (
                <div key={item.id}>
                  <Image src={item.imageSrc} alt={item.alt} width={20} height={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/2">
          {/* Second div content (assuming it's an image) */}
          <Image src="/images/resource.png" alt="Logo" width={800} height={800} />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <div className="">
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
              <div
                className="shadow-custom bg-yellow rounded-full p-1 border-yellow border-solid"
                style={{
                  backgroundColor: theme ? theme.textColor : "#FECF4F",
                  borderColor: theme ? theme.textColor : "#FECF4F",
                  boxShadow: `0px 0px 4px 4px ${
                    theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"
                  }`,
                }}
              >
                <MenuIcon />
              </div>
            </div>
            <div className="sm:hidden">
              <MobileBurgerMenu isOpen={isMenuOpen} onClose={handleMenuToggle} theme={theme} />
            </div>
            <div className="hidden sm:block">
              <WebBurgerMenu isOpen={isMenuOpen} onClose={handleMenuToggle} theme={theme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
