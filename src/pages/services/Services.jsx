import React, { useState, useEffect, useContext } from "react";
import EastIcon from "@mui/icons-material/East";
import TextContext from "../../TextContext";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";
import client from "../../lib/sanity";
import SquareLoader from "react-spinners/SquareLoader";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}
const Services = () => {
  const { myText, sectionNo, setSectionNo, theme } = useContext(TextContext);
  let [loading, setLoading] = useState(true);

  const [casesData, setCasesData] = useState([]);
  const [servicesData, setServices] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [cases, servicesPage] = await Promise.all([
          client.fetch('*[_type == "cases"]'),
          client.fetch('*[_type == "servicesPage"]'),
        ]);
        setCasesData(cases);
        setServices(servicesPage[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let [color, setColor] = useState("#FECF4F");

  // console.log(" servicesData:", servicesData.cards);

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 flex justify-center overflow-hidden w-screen whitespace-nowrap text-transparent text-12xl leading-none bg-clip-text bg-transparent stroke-text border-yellow"
        style={{
          borderColor: theme ? theme.textColor : "#FECF4F",
          WebkitTextStroke: "1px " + (theme ? theme.lightBackground : "#fada82"),
        }}
      >
        {myText.substring(0, 7)}
      </div>
      <div className="sm:flex-1">
        <div className="sm:flex relative z-10 items-center justify-center w-full">
          <div className="relative w-full sm:m-10">
            <div className="flex items-end justify-between">
              <div
                className="text-yellow font-space-grotesk text-6xl sm:text-8xl font-medium my-8 sm:my-12 mx-4 sm:m-0"
                style={{ color: theme ? theme.textColor : "#FECF4F" }}
              >
                Explore our services
              </div>
            </div>

            <div className="sm:text-5xl m-8 sm:mx-0">{servicesData.heading}</div>
            <div className="sm:text-4xl m-8 sm:mx-0">{servicesData.subHeading}</div>

            <div className="sm:flex sm:space-x-4 space-y-4 sm:space-y-0 items-stretch justify-center mx-4 sm:mx-0 m-6">
              {servicesData &&
                servicesData.cards &&
                servicesData.cards.slice(0, 3).map((singleCard, index) => (
                  <div key={index} className="relative sm:w-1/3">
                    <div className="sm:w-full h-full overflow-auto rounded-xl border border-black p-4 shadow-yellow">
                      <div className="flex justify-start items-start space-x-6">
                        <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer my-4">
                          <div
                            className="shadow-custom bg-yellow rounded-full p-1 border-yellow border-solid h-8 w-8"
                            style={{
                              backgroundColor: theme ? theme.textColor : "#FECF4F",
                              borderColor: theme ? theme.textColor : "#FECF4F",
                              boxShadow: `0px 0px 4px 4px ${
                                theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"
                              }`,
                            }}
                          >
                            <div className="hidden ">
                              <EastIcon />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-black font-space-grotesk text-4xl font-medium normal underline">
                            {singleCard.cardHeading}
                          </div>
                        </div>
                      </div>
                      <div className="my-6">
                        {singleCard.bulletPoints &&
                          singleCard.bulletPoints.map((bullet, bulletIndex) => (
                            <div key={bullet._key} className="my-2 text-xl overflow-auto">
                              <span className="font-bold">{bullet.bulletHeading}</span>
                              <span>{bullet.bulletDetail}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                    {/* <div className="sm:w-10/12">{singleCard.summary}</div> */}

                    {/* <div className="w-5/6">{singleCard.desc}</div> */}
                  </div>
                ))}
            </div>
            <div className="m-4 sm:m-0">
              {servicesData &&
                servicesData.cards &&
                servicesData.cards.slice(3).map((singleCard, index) => (
                  <div
                    key={singleCard.id}
                    className={`my-8 ${
                      index % 2 === 0 ? "sm:flex-row-reverse sm:space-x-reverse" : ""
                    } sm:flex items-stretch justify-center sm:space-x-8 space-y-4 sm:space-y-0`}
                  >
                    <div
                      className={
                        singleCard.cardImage && singleCard.cardImage.asset
                          ? "left sm:w-2/3"
                          : "left sm:w-full"
                      }
                    >
                      <div className="sm:w-full overflow-auto rounded-xl border border-black p-4 shadow-yellow h-full">
                        <div className="flex justify-start items-start space-x-6">
                          <div className="w-fit pb-2 relative bg-gradient-radial shadow-2xl cursor-pointer my-4">
                            <div
                              className="shadow-custom bg-yellow rounded-full p-1 border-yellow border-solid h-8 w-8"
                              style={{
                                backgroundColor: theme ? theme.textColor : "#FECF4F",
                                borderColor: theme ? theme.textColor : "#FECF4F",
                                boxShadow: `0px 0px 4px 4px ${
                                  theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"
                                }`,
                              }}
                            >
                              <div className="hidden ">
                                <EastIcon />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-black font-space-grotesk text-4xl font-medium normal underline">
                              {singleCard.cardHeading}
                            </div>
                          </div>
                        </div>
                        <div className="my-6">
                          {singleCard.bulletPoints &&
                            singleCard.bulletPoints.map((bullet, bulletIndex) => (
                              <div key={bullet._key} className="my-2 text-xl overflow-auto">
                                <span className="font-bold">{bullet.bulletHeading}</span>
                                <span>{bullet.bulletDetail}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                    {singleCard.cardImage && singleCard.cardImage.asset && (
                      <div className="right sm:w-1/3">
                        <Image
                          src={urlFor(singleCard.cardImage.asset).url()}
                          alt=""
                          width={783}
                          height={501}
                        />
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
        {loading && (
          <div className="flex item-center justify-center my-8">
            <SquareLoader
              className="flex item-center justify-center my-8"
              color={color}
              loading={loading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
