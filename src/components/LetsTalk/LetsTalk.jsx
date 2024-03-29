import React, { useState, useContext } from "react";
import TextContext from "../../TextContext";
import Link from "next/link";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";
import getImageUrl from "../../lib/sanity";

const textBlocks1 = [
  {
    image: "/images/map1.png",
    officeName: "UK Office",
    address: "Guardian House,7 N Bar StBanbury OX16 0TB United Kingdom",
  },
  {
    image: "/images/map2.png",
    officeName: "BE Office",
    address: "Thonetlaan 74, 2050 Antwerp Belgium",
  },
];
const headings = {
  heading: "Inspired to build your sustainable future",
  subHeading: "Lets Innovate Together",
};

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const LetsTalk = ({ letsTalkData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");
  const currentYear = new Date().getFullYear();
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    boxShadow: `0px 0px 4px 4px ${theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"}`,
  };

  const handleSubmit = () => {
    const data = {
      name: name,
      email: email,
      companyName: companyName,
      message: message,
    };

    console.log(data);
  };

  const textBlocksofficeLocations =
    letsTalkData && letsTalkData.officeLocations ? letsTalkData.officeLocations : [];
  const { heading, subHeading } = letsTalkData || headings;

  const textBlocks = textBlocksofficeLocations.map((block) => {
    const imageUrl = urlFor(block.image.asset).url();
    return {
      image: imageUrl,
      officeName: block.officeName,
      address: block.address,
    };
  });
  // console.log("letsTalkData rec", letsTalkData);
  return (
    <>
      <div className="max-w-[1800px] mx-auto relative w-full flex flex-wrap 2k7:top-[45rem] 2k4:top-80">
        <div className="w-full sm:h-[60vh] 2k:h-[50vh] sm:m-6 mx-6">
          <div
            className="text-8xl sm:text-8xl text-yellow"
            style={{ color: theme ? theme.textColor : "#FECF4F" }}
          >
            Let's talk
          </div>
          <div className="w-[56%] lg:w-1/2 text-4xl mb-20 my-6">{heading}</div>
          <div className="sm:w-1/2 text-xl">{subHeading}</div>
          <div className="sm:w-1/2 sm:flex flex-wrap justify-center">
            <div className="sm:w-1/2 py-1">
              <input
                type="text"
                className="w-full h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 outline-none"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="sm:w-1/2 py-1 sm:pl-2">
              <input
                type="email"
                className="w-full h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-full py-1">
              <input
                type="text"
                className="w-full h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 outline-none"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="w-full py-1">
              <textarea
                className="w-full h-40 sm:h-24 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 pt-4 outline-none resize-none"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className="my:10 sm:my-0 flex justify-start items-center space-x-6  cursor-pointer">
            {" "}
            <div className="w-fit pb-2 relative shadow-2xl">
              <div
                className="rounded-full p-1 border-solid"
                onMouseOver={() => setIsHovered(true)}
                onMouseOut={() => setIsHovered(false)}
                style={{
                  ...(isHovered ? hoverStyle : {}),
                  backgroundColor: theme ? theme.textColor : "#FECF4F",
                  borderColor: theme ? theme.textColor : "#FECF4F",
                }}
              >
                <EastIcon />
              </div>
            </div>
            <div
              onClick={handleSubmit}
              className=" text-black text-center font-space-grotesk text-xl font-medium "
            >
              Submit
            </div>
          </div>
        </div>

        <div>
          <div className="hidden sm:block absolute bottom-20 lg:bottom-40 lg1:bottom-20 -right-20 lg:right-0 -mb-24 mr-30 2k:top-96">
            <Image
              src={textBlocks[0] && textBlocks[0].image}
              alt="map1"
              width={250}
              height={250}
              // layout="fixed"
              className="absolute z-0 ml-4"
            />
            <div className="relative z-10 my-12">
              <div className="w-96 text-black text-4xl font-bold break-words">
                {textBlocks[0] && textBlocks[0].officeName}
              </div>
              <div className="w-66 sm:w-40 text-black text-lg break-words ml-12">
                {textBlocks[0] && textBlocks[0].address}
              </div>
            </div>
          </div>

          <div className="hidden sm:block absolute bottom-80 lg:bottom-[26rem] lg1:bottom-80 -right-20 lg:right-0 -mb-12 mr-25 2k:top-52">
            <div style={{ marginBottom: "-10rem" }} className="relative z-10">
              <div className="w-96 text-black text-4xl font-bold break-words ">
                {" "}
                {textBlocks[1] && textBlocks[1].officeName}
              </div>
              <div className="w-66 sm:w-40 text-black text-lg break-words ml-12">
                {textBlocks[1] && textBlocks[1].address}
              </div>
            </div>

            <Image
              className="ml-8"
              src={textBlocks[1] && textBlocks[1].image}
              alt="map2"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto sm:mt-20 ml-8 sm:ml-0 h-44 2xl:mt-40 sm:flex sm:flex-wrap lg1:flex-nowrap items-center justify-start lg1:space-x-16 relative 2xl:bottom-0 2k:-bottom-4 lg1:mx-auto md:ml-4 ">
        <div className="w-1/2 lg1:w-1/3 sm:flex lg1:items-center mt-24 sm:mt-0">
          <div className=" ">Mail Us :</div>
          <div className="underline transition-all duration-500 ease-in-out transform hover:scale-[1.01]">
            <Link href="mailto:hello@productarchitects.eu">hello@productarchitects.eu</Link>
          </div>
        </div>

        <div className="lg:ml-24 flex my-10 sm:my-0 space-x-8">
          <div className="sm:mx-4 text-xl">Socials</div>
          <div className="flex space-x-5 sm:space-x-6">
            <Image
              className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-glow"
              src="/images/xicon.png"
              alt="map2"
              width={31}
              height={31}
            />
            <Image
              className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-glow"
              src="/images/linkdin.png"
              alt="map2"
              width={31}
              height={31}
            />
            <Image
              className="cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-glow"
              src="/images/insta.png"
              alt="map2"
              width={31}
              height={31}
            />
          </div>
        </div>

        <div className="sm:hidden">
          <div className="relative my-12">
            <div className="flex justify-center items-start">
              {" "}
              <Image
                src="/images/map2.png"
                alt="map1"
                width={250}
                height={250}
                className="z-0 ml-4"
              />
            </div>
            <div className="w-3/5 absolute top-12 left-0 bottom-0 flex flex-col justify-center items-center z-10">
              <div className="text-5xl font-bold break-words">BE Office</div>
              <div className="text-2xl break-words">Thonetlaan 74, 2050 Antwerp Belgium</div>
            </div>
          </div>

          <div className="relative my-12">
            <div className="flex justify-center items-start">
              {" "}
              <Image
                src="/images/map1.png"
                alt="map1"
                width={250}
                height={250}
                className="z-0 ml-4"
              />
            </div>
            <div className="w-3/5 absolute top-12 left-0 bottom-0 flex flex-col justify-center items-center z-10">
              <div className="text-5xl font-bold break-words">UK Office</div>
              <div className="text-2xl break-words">
                Guardian House, 7 N Bar St, Banbury OX16 0TB, United Kingdom
              </div>
            </div>
          </div>
        </div>

        <div className="sm:flex items-center py-12 sm:py-0 mx-0 sm:space-x-24 lg-space-x-0">
          <div className="text-black text-lg font-normal underline">Terms and conditions</div>
          <div className="text-black text-lg font-normal ">
            Copyright © {currentYear}. The Product Architects
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsTalk;
