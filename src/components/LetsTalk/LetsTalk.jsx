import React, { useState, useContext } from "react";
import TextContext from "../../TextContext";

import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
const LetsTalk = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const data = {
      name: name,
      email: email,
      companyName: companyName,
      message: message,
    };

    console.log(data);
  };
  return (
    <>
      <div className="relative w-full flex flex-wrap">
        <div className="w-full h-[60vh] sm:h-[60vh] sm:m-6 mx-6">
          <div className="text-8xl sm:text-8xl text-yellow">Let's talk</div>
          <div className="sm:w-1/2 text-4xl my-6">Inspired to build your sustainable future</div>
          <div className="sm:w-1/2 text-xl">Lets Innovate Together</div>
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

          <div className="my:10 sm:my-0 flex justify-start items-center space-x-6 absolute cursor-pointer">
            {" "}
            <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl">
              <div className="shadow-custom bg-yellow rounded-full p-1 border-darkYellow border-solid">
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
          <div className="hidden sm:block absolute bottom-20 right-0 -mb-24 mr-30">
            <Image
              src="/images/map1.png"
              alt="map1"
              width={250}
              height={250}
              // layout="fixed"
              className="absolute z-0 ml-4"
            />
            <div className="relative z-10 my-12">
              <div className="w-96 text-black text-4xl font-bold break-words">UK Office</div>
              <div className="w-66 text-black text-lg break-words ml-12">
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
              <div className="w-96 text-black text-4xl font-bold break-words ">BE Office</div>
              <div className="w-66 text-black text-lg break-words ml-12">
                Thonetlaan 74,
                <br />
                2050 Antwerp
                <br />
                Belgium
              </div>
            </div>

            <Image className="ml-8" src="/images/map2.png" alt="map2" width={200} height={200} />
          </div>
        </div>
      </div>

      <div className="sm:mt-20 ml-8 h-44 sm:flex items-center justify-start sm:space-x-16">
        <div className="sm:flex items-center">
          <div className=" ">Mail Us :</div>
          <div className=" underline">hello@productarchitects.eu</div>
        </div>

        <div className="sm:ml-24 flex my-10 sm:my-0">
          <div className="sm:mx-4">Socials</div>
          <div className="flex space-x-2">
            <Image src="/images/xicon.png" alt="map2" width={31} height={31} />
            <Image src="/images/linkdin.png" alt="map2" width={31} height={31} />
            <Image src="/images/insta.png" alt="map2" width={31} height={31} />
          </div>
        </div>

        <div className="hidden">
          <div className="right-0 mr-30">
            <Image
              src="/images/map1.png"
              alt="map1"
              width={250}
              height={250}
              className="absolute z-0 ml-4"
            />
            <div className="relative z-10 my-12">
              <div className="w-96 text-black text-4xl font-bold break-words">UK Office</div>
              <div className="w-66 text-black text-lg break-words ml-12">
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

          <div className="right-0 -mb-12 mr-25">
            <div className="relative z-10">
              <div className="w-96 text-black text-4xl font-bold break-words ">BE Office</div>
              <div className="w-66 text-black text-lg break-words ml-12">
                Thonetlaan 74,
                <br />
                2050 Antwerp
                <br />
                Belgium
              </div>
            </div>

            <Image className="ml-8" src="/images/map2.png" alt="map2" width={200} height={200} />
          </div>
        </div>

        <div className="sm:flex items-center">
          <div className="text-black text-lg font-normal underline sm:mx-4">
            Terms and conditions
          </div>
          <div className="text-black text-lg font-normal">
            Copyright © 2022. The Product Architects
          </div>
        </div>
      </div>
    </>
  );
};

export default LetsTalk;
