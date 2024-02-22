import React, { useContext } from "react";
import Link from "next/link";
import TextContext from "../../TextContext";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const ElevatingIdea = ({ elevatingIdeaData }) => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  const { image } = elevatingIdeaData;
  // console.log("elevating image.asset._ref", image.asset._ref);
  return (
    <div className="relative w-full">
      <div className="h-[80vh] sm:h-[80vh] m-6">
        <div className="sm:w-1/2 font-space-grotesk text-4xl sm:text-8xl font-medium leading-93 uppercase">
          {elevatingIdeaData.heading}
        </div>
        <div className="sm:w-1/3 hidden sm:block font-space-grotesk text-4xl font-normal leading-127.5 my-6">
          {elevatingIdeaData.subHeading}
        </div>
        <div className="sm:hidden absolute bottom-0 right-0 -mb-12">
          <img
            src={image && image.asset && urlFor(image.asset._ref)}
            alt="r3small"
            width={800}
            height={800}
            layout="responsive"
          />
          <div className="w-2/3 mx-16 text-4xl font-medium">
            Transcending Boundaries with Tailored Sustainable Innovation
          </div>
          <div className="my-16 mx-8 sm:m-16 flex justify-start items-center space-x-6 absolute -bottom-40">
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

            {elevatingIdeaData.link && (
              <Link href={elevatingIdeaData.link}>
                <div className="text-black text-center font-space-grotesk text-22 font-medium underline">
                  {elevatingIdeaData.linkText}
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="hidden sm:flex justify-start items-center space-x-6 absolute bottom-0">
          {" "}
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
          {elevatingIdeaData.link && (
            <Link href={elevatingIdeaData.link}>
              <div className="text-black text-center font-space-grotesk text-22 font-medium underline">
                {elevatingIdeaData.linkText}
              </div>
            </Link>
          )}
        </div>
      </div>
      {/* <div className="m-6 sm:m-0"> */}{" "}
      <div className="sm:h-[80vh] hidden sm:block absolute bottom-0 right-0 -mb-12 m-6">
        <img
          src={image && image.asset && urlFor(image.asset._ref)}
          alt="r3"
          width={800}
          height={800}
          layout="responsive"
        />
      </div>
      {/* </div> */}
    </div>
  );
};

export default ElevatingIdea;
