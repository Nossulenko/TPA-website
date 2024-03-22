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
  const [hoverStates, setHoverStates] = useState([]);

  const [casesData, setCasesData] = useState([]);
  const [servicesData, setServices] = useState([]);
  const [articlesData, setArticlesData] = useState([]);
  const hoverStyle = {
    boxShadow: `0px 0px 4px 4px ${theme ? theme.lightBackground : "rgba(255, 207, 79, 0.8)"}`,
  };
  const handleMouseOver = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseOut = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [cases, servicesPage, articles] = await Promise.all([
          client.fetch('*[_type == "cases"]'),
          client.fetch('*[_type == "servicesPage"]'),
          client.fetch('*[_type == "articles"]'),
        ]);
        setCasesData(cases);
        setServices(servicesPage);
        setArticlesData(articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  let [color, setColor] = useState("#FECF4F");

  // console.log(" servicesData:", servicesData);

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
          <div className="relative w-full sm:m-14">
            <div className="flex items-end justify-between">
              <div
                className="text-yellow font-space-grotesk text-6xl sm:text-8xl font-medium my-8 mx-4 sm:m-0"
                style={{ color: theme ? theme.textColor : "#FECF4F" }}
              >
                Services
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-x-28 mx-4 sm:mx-0 m-6">
              {servicesData &&
                servicesData.map((service, index) => (
                  <div key={index} className="mb-8 2xl:ml-16">
                    <div className="min-h-12 max-h-20 uppercase sm:w-11/12 underline text-2xl mt-6">
                      {" "}
                      <Link href={`/`}>
                        {" "}
                        {service.heading.length > 45
                          ? service.heading.slice(0, 45) + "..."
                          : service.heading}
                      </Link>
                    </div>
                    <div className="rounded-2xl flex items-center justify-start sm:w-full  overflow-hidden relative">
                      {service.featureImage && service.featureImage.asset && (
                        <Image
                          className="rounded-2xl h-[352px]"
                          src={urlFor(service.featureImage.asset).url()}
                          alt={`Image ${index}`}
                          width={365}
                          height={352}
                        />
                      )}

                      <div className="absolute text-white bottom-1 lg:bottom-1 left-4 flex flex-wrap mr-8">
                        {service &&
                          service.tags &&
                          service.tags.map((tag, tagIndex) => (
                            <div
                              key={tagIndex}
                              className="border-2 border-white rounded-full px-3 py-1 my-2 w-fit text-xl mr-6"
                              style={{
                                color: theme ? theme.textColor : "#FECF4F",
                                borderColor: theme ? theme.textColor : "#FECF4F",
                              }}
                            >
                              {tag}
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="sm:w-11/12 min-h-60 max-h-68 my-8 ml-2">
                      <li className="my-4">
                        {service.bullet[0].bulletHeading.length > 150
                          ? service.bullet[0].bulletHeading.slice(0, 150) + "..."
                          : service.bullet[0].bulletHeading}
                      </li>
                      <li className="my-8">
                        {service.bullet[1].bulletHeading.length > 150
                          ? service.bullet[1].bulletHeading.slice(0, 150) + "..."
                          : service.bullet[1].bulletHeading}
                      </li>
                    </div>
                    <div className="flex justify-start items-center space-x-6 my-4 sm:mt-16 w-[62%]">
                      <div className="w-fit pb-2 relative shadow-2xl cursor-pointer">
                        <div
                          className=" rounded-full p-1 border-solid"
                          onMouseOver={() => handleMouseOver(index)}
                          onMouseOut={() => handleMouseOut(index)}
                          style={{
                            ...(hoverStates[index] ? hoverStyle : {}),
                            backgroundColor: theme ? theme.textColor : "#FECF4F",
                            borderColor: theme ? theme.textColor : "#FECF4F",
                          }}
                        >
                          <EastIcon />
                        </div>
                      </div>
                      <Link href={`/`}>
                        <div className="text-black font-space-grotesk text-22 font-medium underline">
                          Read a case
                        </div>
                      </Link>
                    </div>
                    <div className="w-5/6">{service.desc}</div>
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
