import React, { useContext, useState } from "react";
import TextContext from "../../TextContext";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";
import getImageUrl from "../../lib/sanity";

const textBlocks = [
  {
    id: "01",
    heading: "Elevating Ideas, Enriching Lives",
    desc1:
      "As sustainable service designers, we are passionate about today's generation and those that follow. We want to offer them the product experiences and services they deserve while safeguarding the planet's resources.",
    desc2:
      "Start to finish At The Product Architects (TPA), we can propel your product from idea to customer-validated prototype and business model in as little as four weeks.",
    desc3:
      "Our goal is to help businesses create user-centered experiences and minimize time-to-market through validation and purposeful execution. By focusing on essentials and backing assumptions with concrete evidence, we enable informed decisions and inspire confidence.",
    desc4:
      "In focused design sprints, TPA combines behavioral design, design thinking and system thinking. Iteration is central to our strategic design methodology, with a relentless focus on gathering feedback to refine and optimize the overall experience.",
  },
];

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const AboutPTA = ({ aboutPTAData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const [isHovered, setIsHovered] = useState(false);
  const hoverStyle = {
    boxShadow: `0px 0px 4px 4px ${theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"}`,
  };
  const { image } = aboutPTAData;
  const fallbackImageUrl = "";
  const textBlocks = aboutPTAData.about;
  const imageUrl = image && image.asset ? urlFor(image.asset).url() : fallbackImageUrl;
  return (
    <div className=" lg:h-screen relative w-full flex flex-col lg:flex-row my-10 sm:my-0">
      <div className="max-w-[1800px] mx-auto relative w-full flex flex-col lg:flex-row my-10 sm:my-0">
        {" "}
        <div className=" lg:w-2/3 m-4 xs:m-6">
          <div
            className="font-space-grotesk text-8xl sm:text-9xl font-medium leading-93 text-yellow"
            style={{ color: theme ? theme.textColor : "#FECF4F" }}
          >
            About TPA
          </div>
          <div className="sm:hidden">
            <Image src="/images/tpa.png" alt="r3" width={400} height={400} />
          </div>
          <div className="text-4xl font-medium leading-127.5 my-6">
            {textBlocks && textBlocks?.heading}
          </div>
          <div className=" sm:pl-0  custom-scrollbar">
            <div className="sm:flex justify-start items-start sm:space-x-4 my-4">
              <div className="w-full sm:w-1/2 text-black text-xl font-normal ">
                {textBlocks && textBlocks?.desc1}
              </div>
              <div className="w-full sm:w-1/2 text-black text-xl font-normal ">
                {textBlocks && textBlocks?.desc2}
              </div>
            </div>
            <div className=" sm:flex justify-start items-center sm:space-x-4">
              <div className="w-full sm:w-1/2 text-black text-xl font-normal ">
                {textBlocks && textBlocks?.desc3}
              </div>
              <div className="w-full sm:w-1/2 text-black text-xl font-normal ">
                {textBlocks && textBlocks?.desc4}
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 flex justify-start items-center space-x-6">
            {" "}
            <div className="w-fit pb-2 sm:relative  shadow-2xl cursor-pointer">
              <div
                className=" rounded-full p-1  border-solid"
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
            <Link href="/aboutus">
              <div className="text-black text-center font-space-grotesk text-22 font-medium underline">
                About The product architects
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden sm:block lg:w-1/3 m-6">
          <Image src={imageUrl} alt="r3" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default AboutPTA;
