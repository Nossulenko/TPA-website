import React, { useContext } from "react";
import TextContext from "../../TextContext";
import Image from "next/image";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";
import getImageUrl from "../../lib/sanity";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const WhatweDo = ({ whatWeDoData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const { heading, paragraph1, paragraph2, paragraph3, linkText, link, image } = whatWeDoData;
  const paragraphs = [paragraph1, paragraph2, paragraph3];
  // console.log("image", image.asset._ref);
  return (
    <div className="relative w-full sm:flex justify-start items-center">
      <div className=" sm:h-[90vh] m-6 sm:w-[45%]">
        <div className="">
          <div
            className="text-yellow font-space-grotesk text-7xl sm:text-8xl font-medium leading-93 my-12 mx-4 sm:m-0"
            style={{ color: theme ? theme.textColor : "#FECF4F" }}
          >
            What we do
          </div>
          <div className="sm:hidden  bottom-0 right-0 mr-4">
            <img src="/images/r3.png" alt="r3" width={800} height={800} />
          </div>
          <div className="mx-4 sm:m-0 w-10/12 sm:w-10/12">
            <div className=" font-space-grotesk text-4xl font-normal leading-127.5 my-6">
              {heading}
            </div>

            {paragraphs.map((paragraph, index) => (
              <div
                key={index}
                className="font-space-grotesk text-xl font-normal leading-127.5 my-6 min-h-fit"
              >
                {paragraph}
              </div>
            ))}
          </div>
        </div>
        <div className="my:20 sm:my-0 ml-10 sm:ml-0 flex justify-start items-center space-x-6 -bottom-1">
          <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer">
            <div
              className="shadow-custom bg-yellow rounded-full p-1 border-yellow border-solid"
              style={{
                backgroundColor: theme ? theme.textColor : "#FECF4F",
                borderColor: theme ? theme.textColor : "#FECF4F",
                boxShadow: `0px 0px 4px 4px ${
                  theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"
                }`,
              }}
            >
              <EastIcon />
            </div>
          </div>
          {link && (
            <Link href={link}>
              <div className="text-black text-center font-space-grotesk text-22 font-medium underline">
                {linkText}
              </div>
            </Link>
          )}
        </div>
      </div>

      <div className="sm:h-[90vh] z-10 absolute hidden sm:block bottom-0 right-0 -mb-12 sm:mb-0 m-6">
        <div className="relative">
          <img
            className="relative z-10"
            src={image && image.asset && urlFor(image.asset._ref)}
            alt="r3"
            width={800}
            height={800}
            // layout="fixed"
          />
          <div
            className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/2 w-40 h-40 shadow-custom2 bg-yellow rounded-full p-1 border-yellow border-solid"
            style={{
              backgroundColor: theme ? theme.textColor : "#FECF4F",
              borderColor: theme ? theme.textColor : "#FECF4F",
              boxShadow: `0px 0px 50px 100px ${
                theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"
              }`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WhatweDo;
