import React from "react";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

const textBlocks = [
  {
    image: "/images/whatwedoImage.jpeg",
    heading: "Level Up your User Testing Skills",
    desc: "In our previous article, we delved into the essentials of conducting effective user testing, from ensuring a representative sample to avoiding biases. However, the quest for improving user testing never stops. Building on our comprehensive guide, we at The Product Architects BV (TPA) present four additional tips to take your user testing to the next level...",
  },
  {
    image: "/images/whatwedoImage.jpeg",
    heading: "How the Donut Economy drives sustainability",
    desc: "With current rates of resource depletion and growing stress on our social model, it is impossible to maintain this idea of economics. The Doughnut Economy is an alternative approach, one that strives to spread growth and find balance. What best practices and design questions should we adhere to so that we can drive sustainability forward?...",
  },
  {
    image: "/images/whatwedoImage.jpeg",
    heading: "What is Strategic Product Design",
    desc: "Innovation and product creation processes (where 'product' relates to actual products, services, digital, physical or phygital experiences) are inherently difficult for a lot of companies. This usually results in products that cannot meet customer needs, long and time-consuming projects, or even budgetary graveyards...",
  },
];

const HowWeOperate = () => {
  return (
    <div className="relative w-full my-10">
      <div className="text-yellow font-space-grotesk text-7xl sm:text-8xl font-medium  my-12 mx-4 sm:m-0">
        How we operate
      </div>
      <div className="h-[90vh] sm:h-[90vh] hidden sm:flex flex-col space-y-8 sm:space-y-0 mx-4 sm:mx-0 sm:flex-row sm:space-x-10 m-6">
        {textBlocks.map((block, index) => (
          <div key={index} className="mb-8 w-full sm:w-1/3">
            <div className="rounded-2xl">
              <Image
                className="rounded-2xl"
                src={block.image}
                alt={`Image ${index}`}
                width={300}
                height={300}
              />
            </div>
            <div className="flex justify-start items-center space-x-6 my-4 w-[62%]">
              <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
                <div className="shadow-custom bg-yellow rounded-full p-1 border-darkYellow border-solid">
                  <EastIcon />
                </div>
              </div>
              <div className="text-black font-space-grotesk text-22 font-medium underline">
                {block.heading}
              </div>
            </div>
            <div className="w-5/6">{block.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeOperate;
