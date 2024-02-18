import React, { useContext } from "react";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

const textBlocks = [
  "Transcending Boundaries with Tailored Sustainable Innovation",
  "Our approach blends in-depth research with creative insight, ensuring every idea is grounded yet groundbreaking. We co-create with a blend of cross-sector expertise, strategy and intuition, focusing on meaningful impact.",
  "Whether you&apos;re a nimble start-up or a sprawling multinational, our team is equipped to guide you towards success at every scale.",
  "Proud partner of the Duval Union family, we leverage a network of expertise to amplify our added value.",
];

const WhatweDo = () => {
  return (
    <div className="relative w-full sm:flex justify-start items-center">
      <div className="h-[90vh] sm:h-[90vh] m-6 sm:w-[45%]">
        <div className="">
          <div className="text-yellow font-space-grotesk text-7xl sm:text-8xl font-medium leading-93 my-12 mx-4 sm:m-0">
            What we do
          </div>
          <div className="sm:hidden  bottom-0 right-0 mr-4">
            <img src="/images/r3.png" alt="r3" width={800} height={800} />
          </div>
          <div className="mx-4 sm:m-0 w-10/12 sm:w-10/12">
            <div className=" font-space-grotesk text-4xl font-normal leading-127.5 my-6">
              {textBlocks[0]}
            </div>

            {textBlocks.slice(1).map((text, index) => (
              <div
                key={index}
                className=" font-space-grotesk text-xl font-normal leading-127.5 my-6 min-h-fit"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="z-10 absolute hidden sm:block bottom-0 right-0 -mb-12 mr-8">
        <div className="relative">
          <img
            className="relative z-10"
            src="/images/r3.png"
            alt="r3"
            width={800}
            height={800}
            // layout="fixed"
          />
          <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 w-40 h-40 shadow-custom2 bg-yellow rounded-full p-1 border-darkYellow border-solid"></div>
        </div>
      </div>

      <div className="my:20 sm:my-0 ml-10 flex justify-start items-center space-x-6 absolute -bottom-1">
        <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
          <div className="shadow-custom bg-yellow rounded-full p-1 border-darkYellow border-solid">
            <EastIcon />
          </div>
        </div>
        <div className="text-black text-center font-space-grotesk text-22 font-medium underline">
          Discover Our Projects
        </div>
      </div>
    </div>
  );
};

export default WhatweDo;
