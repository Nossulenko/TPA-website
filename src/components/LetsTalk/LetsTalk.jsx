import React, { useContext } from "react";
import TextContext from "../../TextContext";
import Image from 'next/image';
const LetsTalk = () => {
  const bgText = useContext(TextContext);
  return (
     <>
     
     <div className="w-96 h-24 text-yellow-500 text-5xl font-normal break-words">
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
    />
     </>
     
     );
};

export default LetsTalk;
