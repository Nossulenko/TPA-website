import React, { useState, useContext } from "react";
import TextContext from "../../TextContext";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  if (!source) {
    console.error("Invalid source provided to urlFor function");
    return fallbackimageUrl; // replace with whatever appropriate
  }
  return builder.image(source);
}

const HowToOperate = ({ howToOperateData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const { image } = howToOperateData;
  const fallbackImageUrl = "";
  const textBlocks = howToOperateData.operations;
  const imageUrl = image && image.asset ? urlFor(image.asset).url() : fallbackImageUrl;
  let themeColor = theme ? theme.textColor : "#FECF4F";

  // use JavaScript to directly set the style properties for scrollbars
  if (typeof window !== "undefined") {
    // if we're in the browser environment
    window.document.body.style.scrollbarColor = `${themeColor} #ffffff`;
  }
  return (
    <div className="relative w-full mb-10 sm:mb-0 m-2 sm:m-0">
      <div className="h-screen sm:h-screen sm:flex items-start justify-start">
        <div className=" sm:w-[78.666667%] overflow-y-auto h-screen scrollbar scrollbar-thumb-yellow scrollbar-thumb-rounded">
          <div
            className="text-yellow font-space-grotesk text-8xl sm:text-9xl font-medium my-12"
            style={{ color: theme ? theme.textColor : "#FECF4F" }}
          >
            How to operate
          </div>
          {textBlocks &&
            textBlocks.map((block) => (
              <div className="m-4 sm:m-0 my-10" key={block.id}>
                <div className="sm:w-10/12 flex justify-start items-center space-x-4 sm:mt-20">
                  <div
                    className="text-5xl text-yellow"
                    style={{ color: theme ? theme.textColor : "#FECF4F" }}
                  >
                    {block.id}
                  </div>
                  <div className="text-3xl sm:text-5xl font-bold">{block.heading}</div>
                </div>
                <div className="my-4 sm:my-0 sm:mt-8 mx-1 sm:mx-16 text-2xl">
                  {block.subHeading}
                </div>
                <div className="mr-4 sm:mx-44 text-2xl">{block.desc}</div>
              </div>
            ))}
        </div>
        <div className="sm:h-screen hidden w-full sm:w-1/3 sm:flex sm:items-center justify-end">
          <Image className="" src={imageUrl} alt={`diego`} width={500} height={480} />
        </div>
      </div>
    </div>
  );
};

export default HowToOperate;
