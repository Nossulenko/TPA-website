import React, { useState, useContext } from "react";
import TextContext from "../../TextContext";

import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

const LetsTalk2 = () => {
  // return <div>LetsTalk2</div>;
  //  return (
  //   <>
  //     <div className="relative w-full">
  //       <div className="h-[60vh] sm:h-[60vh] m-6">
  //         <div className="font-space-grotesk text-4xl sm:text-8xl font-medium leading-93 break-words text-yellow">
  //           Let's talk
  //         </div>
  //         <div className="hidden sm:block font-space-grotesk text-3xl leading-127.5 my-6">
  //           Inspired to build
  //           <br />
  //           your sustainable future
  //         </div>
  //         <div className="text-black text-lg break-words">Lets Innovate Together</div>
  //         <div className="flex flex-col space-y-4">
  //           <div>
  //             <input
  //               type="text"
  //               className="w-96 h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 outline-none"
  //               placeholder="Name"
  //               value={name}
  //               onChange={(e) => setName(e.target.value)}
  //             />
  //             <input
  //               type="email"
  //               className="w-96 h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 outline-none mx-4"
  //               placeholder="Email"
  //               value={email}
  //               onChange={(e) => setEmail(e.target.value)}
  //             />
  //           </div>
  //           <div>
  //             <input
  //               type="text"
  //               className="w-full h-12 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 outline-none"
  //               placeholder="Company Name"
  //               value={companyName}
  //               onChange={(e) => setCompanyName(e.target.value)}
  //             />
  //           </div>
  //           <div>
  //             <textarea
  //               className="w-795 h-150 bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md rounded-lg pl-4 pt-4 outline-none resize-none"
  //               placeholder="Message"
  //               style={{ width: "49rem", height: "5rem" }}
  //               value={message}
  //               onChange={(e) => setMessage(e.target.value)}
  //             />
  //           </div>
  //         </div>

  //         <div className="hidden sm:flex justify-start items-center space-x-6 absolute bottom-10 -mb-24">
  //           {" "}
  //           <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
  //             <div className="shadow-custom bg-yellow rounded-full p-1 border-darkYellow border-solid">
  //               <EastIcon />
  //             </div>
  //           </div>
  //           <div
  //             onClick={handleSubmit}
  //             className=" text-black text-center font-space-grotesk text-xl font-medium "
  //           >
  //             Submit
  //           </div>
  //         </div>
  //       </div>

  //       <div>
  //         <div className="hidden sm:block absolute bottom-20 right-0 -mb-24 mr-30">
  //           <Image
  //             src="/images/map1.png"
  //             alt="map1"
  //             width={250}
  //             height={250}
  //             layout="fixed"
  //             className="absolute z-0 ml-4"
  //           />
  //           <div className="relative z-10 my-12">
  //             <div className="w-96 text-black text-4xl font-bold break-words">UK Office</div>
  //             <div className="w-66 text-black text-lg break-words ml-12">
  //               Guardian House,
  //               <br />
  //               7 N Bar St
  //               <br />
  //               Banbury OX16 0TB
  //               <br />
  //               United Kingdom
  //             </div>
  //           </div>
  //         </div>

  //         <div className="hidden sm:block absolute bottom-80 right-0 -mb-12 mr-25">
  //           <div style={{ marginBottom: "-10rem" }} className="relative z-10">
  //             <div className="w-96 text-black text-4xl font-bold break-words ">BE Office</div>
  //             <div className="w-66 text-black text-lg break-words ml-12">
  //               Thonetlaan 74,
  //               <br />
  //               2050 Antwerp
  //               <br />
  //               Belgium
  //             </div>
  //           </div>

  //           <Image
  //             className="ml-8"
  //             src="/images/map2.png"
  //             alt="map2"
  //             width={200}
  //             height={200}
  //             layout="fixed"
  //           />
  //         </div>
  //       </div>
  //     </div>

  //     <div className="ml-8 h-44 flex items-center space-x-5">
  //       <div>
  //         <span className="text-black text-lg ">Mail Us :</span>
  //         <span className="text-black text-lg underline">hello@productarchitects.eu</span>
  //       </div>

  //       <div className="ml-24 flex">
  //         <div className="text-black text-lg font-normal">Socials</div>
  //         <div className="flex space-x-2">
  //           <Image src="/images/xicon.png" alt="map2" width={20} height={20} layout="fixed" />
  //           <Image src="/images/linkdin.png" alt="map2" width={20} height={20} layout="fixed" />
  //           <Image src="/images/insta.png" alt="map2" width={20} height={20} layout="fixed" />
  //         </div>
  //       </div>

  //       <div className="ml-36">
  //         <span className="text-black text-lg font-normal underline mx-4">
  //           Terms and conditions
  //         </span>
  //         <span className="text-black text-lg font-normal ml-24 mr-4">
  //           &nbsp; Copyright © 2022. The Product Architects
  //         </span>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default LetsTalk2;
