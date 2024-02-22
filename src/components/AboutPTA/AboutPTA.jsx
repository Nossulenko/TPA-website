import React, { useContext } from "react";
import TextContext from "../../TextContext";
import Image from "next/image";
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
  const { image } = aboutPTAData;
  const fallbackImageUrl = "";
  const textBlocks = aboutPTAData.about;
  const imageUrl = image && image.asset ? urlFor(image.asset).url() : fallbackImageUrl;
  return (
    <div className=" sm:h-screen relative w-full flex flex-col sm:flex-row my-10 sm:my-0">
      <div className=" sm:w-2/3 m-6">
        <div
          className="font-space-grotesk text-8xl sm:text-9xl font-medium leading-93 text-yellow"
          style={{ color: theme ? theme.textColor : "#FECF4F" }}
        >
          About TPA
        </div>
        <div className="sm:hidden -mt-24 ml-16">
          <Image src="/images/tpa.png" alt="r3" width={400} height={400} />
        </div>
        <div className="text-5xl font-medium leading-127.5 my-6">
          {textBlocks && textBlocks?.heading}
        </div>
        <div className="pl-8 sm:pl-0 ScrollContainer overflow-y-auto h-[80vh] sm:h-full custom-scrollbar">
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
      </div>

      <div className="hidden sm:block w-1/3 m-6">
        <Image src={imageUrl} alt="r3" width={400} height={400} />
      </div>
    </div>
  );
};

export default AboutPTA;
