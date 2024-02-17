import React, { useContext } from "react";
import TextContext from "../../TextContext";

import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
const LetsTalk = () => {
  const bgText = useContext(TextContext);
  return (
    <>
      <div className="relative w-full">
        <div className="h-[60vh] sm:h-[60vh] m-6">
        <div
  className="font-space-grotesk text-4xl sm:text-8xl font-medium leading-93 break-words"
  style={{ color: "#FECF4F" }}
>
  Let’s talk
</div>
          <div class="hidden sm:block font-space-grotesk text-3xl font-bold leading-127.5 my-6">
            Inspired to build
            <br />
            your sustainable future
          </div>
          <div className="text-black text-lg font-bold break-words">
            Lets Innovate Together
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <input
                type="text"
                className="w-96 h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-96 h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 outline-none mx-4"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-96 h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 outline-none"
                placeholder="Company Name"
                style={{ width: "49rem" }}
              />
            </div>
            <div>
              <textarea
                className="w-795 h-150 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 pt-4 outline-none resize-none"
                placeholder="Message"
                style={{ width: "49rem", height: "5rem" }}
              />
            </div>
          </div>
      
          <div
            className="hidden sm:flex justify-start items-center space-x-6 absolute bottom-10 -mb-24"
          
          >
            {" "}
            <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
              <div className="shadow-custom bg-yellow rounded-full p-1 border-darkYellow border-solid">
                <EastIcon />
              </div>
            </div>
            <div class=" text-black text-center font-space-grotesk text-22 font-medium ">
              Submit
            </div>
          </div>
        </div>
        {/* <div className="m-6 sm:m-0"> */}{" "}
        <div>
          <div className="hidden sm:block absolute bottom-20 right-0 -mb-24 mr-30">
            <img
              src="/images/map1.png"
              alt="map1"
              width={250}
              height={250}
              layout="fixed"
              className="absolute z-0 ml-4"
              style={{ zIndex: -1 }}
            />
            <div className="relative z-10 my-12">
              <div className="w-96 text-black text-4xl font-bold break-words">
                UK Office
              </div>
              <div className="w-66 text-black text-lg font-bold break-words ml-12">
                Guardian House,
                <br />
                7 N Bar St
                <br />
                Banbury OX16 0TB
                <br />
                United Kingdom
              </div>
            </div>
          </div>

          <div className="hidden sm:block absolute bottom-80 right-0 -mb-12 mr-25">
            <div style={{ marginBottom: "-10rem" }} className="relative z-10">
              <div className="w-96 text-black text-4xl font-bold break-words ">
                BE Office
              </div>
              <div className="w-66 text-black text-lg font-bold break-words ml-12">
                Thonetlaan 74,
                <br />
                2050 Antwerp
                <br />
                Belgium
              </div>
            </div>

            <Image
            className="ml-8"
              src="/images/map2.png"
              alt="map2"
              width={200}
              height={200}
              layout="fixed"
            />
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="ml-8 w-487 h-44 flex items-center">
        <span className="text-black text-lg font-bold break-words">
          Mail Us :
        </span>
        <span className="text-black text-lg font-bold underline break-words">
          hello@productarchitects.eu
        </span>
   
        <div className="text-black text-lg font-normal break-words ml-24 " >
          Socials
        </div>
        <div className="mx-2">
          <Image
            src="/images/xicon.png"
            alt="map2"
            width={20}
            height={20}
            layout="fixed"
          />
        </div>
        <div className="mx-2">
          <Image
            src="/images/linkdin.png"
            alt="map2"
            width={20}
            height={20}
            layout="fixed"
          />
        </div>
        <div className="mx-2">
          <Image
            src="/images/insta.png"
            alt="map2"
            width={20}
            height={20}
            layout="fixed"
          />
        </div>
        <div>
          <span className="text-black text-lg font-normal underline break-words  ml-36 mx-4">
            Terms and conditions
          </span>
          <span className="text-black text-lg font-normal break-words  ml-24">
            &nbsp; Copyright © 2022. The Product Architects
          </span>
        </div>
      </div>

      {/* <div className="w-96 h-24 text-yellow-500 text-5xl font-normal break-words">
      Let’s talk
    </div>
    <div className="text-black text-xl font-medium break-words">
      Inspired to build <br className="md:hidden" /> your sustainable future
    </div>
    <div className="w-72 h-11 text-black text-lg font-medium break-words">
      Let's Innovate Together
    </div>
    <div className="w-96 text-black text-4xl font-bold break-words">
      BE Office
    </div>
    <div className="w-66 h-22 text-black text-lg font-medium break-words">
      Thonetlaan 74,<br />
      2050 Antwerp<br />
      Belgium
    </div>
    <div>
      <Image
        src="/images/map1.png" 
        alt="Map Image"
        width={239}
        height={202}
      />
    </div>
    <input
      type="text"
      className="w-96 h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 outline-none"
      placeholder="Enter your text here..."
    />
      <input
      type="text"
      className="w-96 h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 outline-none"
      placeholder="Enter your text here..."
    />
       <input
      type="text"
      className="w-96 h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 outline-none"
      placeholder="Enter your text here..."
    />
        <textarea
      className="w-795 h-142 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 pt-4 outline-none resize-none"
      placeholder="Enter your text here..."
    /> */}
    </>
  );
};

export default LetsTalk;
