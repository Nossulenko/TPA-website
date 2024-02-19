import React from "react";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

const textBlocks = [
  {
    id: "01",
    heading: "Embracing Finite Resources with Circularity",
    subHeading: "The scarcity of resources is an undeniable reality.",
    desc: "We champion sustainable design principles. Our focus is on creating products that not only serve current needs but also contribute to a sustainable future. By integrating circularity, we not only help conserve resources but also create more value and longevity in every product.",
  },
  {
    id: "02",
    heading: "Innovation equals Non-Linear Thinking",
    subHeading: "Innovation doesn't follow a straight path.",
    desc: "Our team thrives on complex challenges, employing an iterative and non-linear thinking approach that progressively hones in on solutions and meets the needs of each project. We dive deep into each mission, combining creative exploration with strategic analysis to bring forth breakthrough innovations.",
  },
  {
    id: "03",
    heading: "Level Up your User Testing Skills",
    subHeading: "Level Up your User Testing Skills",
    desc: "In our previous article, we delved into the essentials of conducting effective user testing, from ensuring a representative sample to avoiding biases. However, the quest for improving user testing never stops. Building on our comprehensive guide, we at The Product Architects BV (TPA) present four additional tips to take your user testing to the next level...",
  },
];

const HowToOperate = () => {
  return (
    <div className="relative w-full mb-10 sm:mb-0 m-6">
      <div className="h-screen sm:h-screen sm:flex items-start justify-start">
        <div className=" sm:w-[78.666667%] overflow-y-auto h-screen scrollbar scrollbar-thumb-yellow scrollbar-thumb-rounded">
          <div className="text-yellow font-space-grotesk text-8xl sm:text-9xl font-medium my-12 mx-4 sm:m-0">
            How to operate
          </div>
          {textBlocks.map((block) => (
            <div className="m-4 sm:m-0 my-10" key={block.id}>
              <div className="sm:w-10/12 flex justify-start items-center space-x-4 sm:mt-20">
                <div className="text-5xl text-yellow">{block.id}</div>
                <div className="text-3xl sm:text-5xl font-bold">{block.heading}</div>
              </div>
              <div className="my-4 sm:my-0 sm:mt-8 mx-1 sm:mx-16 text-2xl">{block.subHeading}</div>
              <div className="mr-4 sm:mx-44 text-2xl">{block.desc}</div>
            </div>
          ))}
        </div>
        <div className="sm:h-screen hidden w-full sm:w-1/3 sm:flex sm:items-center justify-end">
          <Image className="" src="/images/diego.png" alt={`diego`} width={500} height={480} />
        </div>
      </div>
    </div>
  );
};

export default HowToOperate;
