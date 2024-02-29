import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loader from "./Loader";
import Company from "./Company";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../lib/sanity";
import getImageUrl from "../../lib/sanity";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const HomePageBlogs = ({ blogsData }) => {
  //   const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       try {
  //         const response = await fetch(
  //           `https://cms.productarchitects.eu/api/blogs?pagination[page]=${pageNo}&pagination[pageSize]=14&sort[0]=publishedAt%3Adesc&populate=%2A`
  //         );

  //         if (!response.ok) {
  //           throw new Error("Something went wrong while fetching data.");
  //         }

  //         const data = await response.json();
  //         // setBlogsData((prevBlogs) => [...prevBlogs, ...data.data]);
  //         setLoading(false);
  //         if (data.data.length === 0) {
  //           setHasMore(false);
  //         }
  //       } catch (error) {
  //         setError(error.message);
  //         setLoading(false);
  //       }
  //     };

  //     fetchData();
  //   }, [pageNo]);

  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         if (entries[0].isIntersecting && hasMore) {
  //           setPageNo((prevPageNo) => prevPageNo + 1);
  //         }
  //       },
  //       { threshold: 1 }
  //     );

  //     if (blogsData.length) {
  //       const target = document.querySelector(`#end-of-list-${blogsData.length - 1}`);
  //       if (target) {
  //         observer.observe(target);
  //       }

  //       return () => {
  //         if (target) {
  //           observer.unobserve(target);
  //         }
  //       };
  //     }
  //   }, [blogsData, hasMore]);
  console.log("blogsData", blogsData);
  return (
    <div>
      <div className="px-10 xl:px-0 md:max-w-[1040px] md:mx-auto relative">
        <div className="">
          <div className="mt-10">
            <Company />
          </div>
        </div>
        <div className={`mb-24 grid grid-flow-row-dense gap-7 grid-cols-12`}>
          {blogsData &&
            blogsData.map((blog, index) => {
              return (
                <Link
                  href={`${blog.url}`}
                  className={`flex flex-col col-span-full mb-4 md:col-span-4`}
                  key={index}
                  id={index === blogsData.length - 1 ? `end-of-list-${index}` : ""}
                >
                  <div className="image">
                    <Image
                      src={urlFor(blog.blogs[0].img.asset).url()}
                      alt={`blog${index}`}
                      width={400}
                      height={400}
                    />
                  </div>
                  <div className="heading text-blue1 text-2xl font-semibold my-4">
                    {blog.blogs[0].title}
                  </div>
                  <div className="text h-[6rem] overflow-hidden my-6">
                    {blog.blogs[0].content || ""}
                  </div>
                  <Link href={`${blog.blogs[0].url}`} className="link text-lightRed underline my-6">
                    Learn More
                  </Link>
                </Link>
              );
            })}
          <div className=" col-span-full flex items-center justify-center">
            {/* {loading && <Loader className="my-80" />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBlogs;
