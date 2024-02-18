import React, { useContext } from "react";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

const ElevatingIdea = () => {
  return (
    <div className="relative w-full">
      <div className="h-[80vh] sm:h-[80vh] m-6">
        <div className=" font-space-grotesk text-8xl font-medium leading-93 uppercase">
          Elevating Ideas,
          <br />
          Enriching Lives
        </div>
        <div className="hidden sm:block font-space-grotesk text-4xl font-normal leading-127.5 my-6">
          Strategic Design
          <br />
          Meets Bespoke Innovation
        </div>
        <div className="sm:hidden absolute bottom-0 right-0 -mb-12">
          <img src="/images/r3small.png" alt="r3small" width={800} height={800}
           layout="responsive"
           />
          <div className="w-2/3 mx-16 text-4xl font-medium">
            Transcending Boundaries with Tailored Sustainable Innovation
          </div>
          <div className="m-16 flex justify-start items-center space-x-6 absolute -bottom-40">
            {" "}
            <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
              <div className="shadow-custom bg-yellow rounded-full p-1 border-darkYellow border-solid">
                <EastIcon />
              </div>
            </div>
            <div className=" text-black text-center font-space-grotesk text-2xl font-medium underline">
              Discover Our Projects
            </div>
          </div>
        </div>
        <div className="hidden sm:flex justify-start items-center space-x-6 absolute bottom-0">
          {" "}
          <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
            <div className="shadow-custom bg-yellow rounded-full p-1 border-darkYellow border-solid">
              <EastIcon />
            </div>
          </div>
          <div className=" text-black text-center font-space-grotesk text-22 font-medium underline">
            Discover Our Projects
          </div>
        </div>
      </div>
      {/* <div className="m-6 sm:m-0"> */}{" "}
      <div className="hidden sm:block absolute bottom-0 right-0 -mb-12 mr-8">
        <img src="/images/r3.png" alt="r3" width={800} height={800} 
        layout="responsive" 
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default ElevatingIdea;
