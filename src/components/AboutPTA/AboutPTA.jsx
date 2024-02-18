import React, { useContext } from "react";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

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

const AboutPTA = () => {
  return (
    <div className="relative w-full sm:flex justify-start items-start">
      <div className="w-2/3 m-6">
        <div className=" font-space-grotesk text-7xl font-medium leading-93 text-yellow">About TPA</div>
        <div className="hidden sm:block font-space-grotesk text-3xl font-bold leading-127.5 my-6">
          {textBlocks[0].heading}
        </div>
        <div className="flex justify-start items-start space-x-4 my-4">
          <div className="w-1/2 text-black text-lg font-normal ">{textBlocks[0].desc1}</div>
          <div className="w-1/2 text-black text-lg font-normal ">{textBlocks[0].desc2}</div>
        </div>
        <div className="flex justify-start items-center space-x-4">
          <div className="w-1/2 text-black text-lg font-normal ">{textBlocks[0].desc3}</div>
          <div className="w-1/2 text-black text-lg font-normal ">{textBlocks[0].desc4}</div>
        </div>
      </div>

      <div className="hidden sm:block absolute -bottom-10 right-0  mr-8">
        <Image src="/images/tpa.png" alt="r3" width={400} height={400} 
        layout="responsive"
         />
      </div>
    </div>
  );
};

export default AboutPTA;
