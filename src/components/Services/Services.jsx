import React, { useState, useContext } from "react";
import TextContext from "../../TextContext";
import Link from "next/link";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  if (!source) {
    console.error("Invalid source provided to urlFor function");
    return fallbackimageUrl; // replace with whatever appropriate
  }
  return builder.image(source);
}

const textBlocks = [
  {
    id: "01",
    heading: "Test First, Build Later",
    subHeading: "At the heart of our process  lies rapid prototyping and user validation.",
    desc: "We believe in testing ideas in real-world scenarios to refine and perfect them before full-scale development. This approach not only saves time and resources, but also ensures that the final product truly resonates with its intended audience.",
  },
  {
    id: "02",
    heading: "Innovation through Dedication and Non-Linear Thinking",
    subHeading: "Innovation doesn't follow a straight path. Our team thrives on complex ",
    desc: "challenges, employing an iterative and non-linear thinking approach that progressively hones in on solutions and meets the needs of each project.We dive deep into each mission, combining creative exploration with strategic analysis to bring forth breakthrough innovations.",
  },
  {
    id: "03",
    heading: "Embracing Circularity in a Resource-Constrained World ",
    subHeading: "Understanding the scarcity of resources, we champion sustainable",
    desc: "design principles. Our focus is on creating products that not only serve current needs but also contribute to a sustainable future. By integrating circularity, we not only help conserve resources but also create more value and longevity in every product.",
  },
];

const Services = ({ servicesData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const [isHovered, setIsHovered] = useState(false);
  const hoverStyle = {
    boxShadow: `0px 0px 4px 4px ${theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"}`,
  };
  const { image } = servicesData;
  const fallbackImageUrl = "";
  const textBlocks = servicesData.services;
  const imageUrl = image && image.asset ? urlFor(image.asset).url() : fallbackImageUrl;

  return (
    <div className="relative w-full mb-10 m-2 sm:m-6 ">
      <div className="sm:h-screen sm:flex items-start justify-center sm:space-x-8">
        <div className="sm:w-1/2">
          <div
            className="text-yellow font-space-grotesk text-[60px] sm:text-8xl font-medium my-12 mx-4 sm:m-0"
            style={{ color: theme ? theme.textColor : "#FECF4F", whiteSpace:'pre' }}
          >
            How we operate
          </div>
          <div className="sm:pt-20 pt-0 w-10/12 sm:w-full flex items-center justify-center sm:justify-start ml-4 sm:ml-0 2xl:py-24">
            <Image className="" src={imageUrl} alt={`plmbr`} width={400} height={400} />
          </div>
          <div className="hidden sm:flex justify-start items-center space-x-6 mt-12">
            {" "}
            <div className="w-fit pb-2 relative  shadow-2xl cursor-pointer">
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
            <Link href="/services">
              <div className="text-black text-center font-space-grotesk text-22 font-medium underline">
                Discover our Services
              </div>
            </Link>
          </div>
        </div>
        <div
          className="sm:w-2/3 ScrollContainer overflow-y-auto h-screen scrollbar scrollbar-thumb-yellow scrollbar-thumb-rounded"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#FECF4F #ffffff" }}
        >
          {textBlocks &&
            textBlocks.map((block) => (
              <div className="m-4 sm:m-0 my-10" key={block.id}>
                <div className="sm:w-10/12 flex justify-start  space-x-4 sm:mt-20">
                  <div className="text-[50px] sm:text-4xl" style={{ color: theme ? theme.textColor : "#FECF4F", whiteSpace:'pre' }}>{block.id}</div>
                 <div className="text-[50px] sm:text-4xl font-bold">{block.heading}</div>
                </div>
                <div className="my-4 sm:my-0 sm:mt-8 mx-1 text-xl">{block.subHeading}</div>
                <div className="mr-4 sm:mx-32 text-xl">{block.desc}</div>
              </div>
            ))}
        </div>
        <div className="m-4 flex sm:hidden justify-start items-center space-x-6 bottom-8">
          {" "}
          <div className="w-fit pb-2 relative  shadow-2xl cursor-pointer">
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
          <Link href="/services">
            <div className="text-black text-center font-space-grotesk text-22 font-medium underline">
              Discover our Services
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
