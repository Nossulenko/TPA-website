// tpa-website/src/pages/blogs/HomePageBlogs
import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Loader from "./Loader";
import Company from "./Company";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import sanityClient from "../../lib/sanity";
import getImageUrl from "../../lib/sanity";
import TextContext from "../../TextContext";
import { animateScroll as scroll } from "react-scroll";
import client from "../../lib/sanity";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const HomePageBlogs = () => {
  const [error, setError] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [blogsData, setBlogsData] = useState([]);
  const [page, setPage] = useState(0);
  const loader = useRef(null);

  useEffect(() => {
    var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    // Instantiate IntersectionObserver callback
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  // Use useCallback to memoize the instance of handleObserver to avoid unnecessary re-renders
  const handleObserver = useCallback((entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const blog = await Promise.all([client.fetch('*[_type == "blog"]')]);
        setBlogsData(blog[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // console.log("blogsData", blogsData);
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
                <div key={index} className={`flex flex-col col-span-full mb-4 md:col-span-4`}>
                  <Link href={`/blog/${blog.slug.current}`}>
                    <div className="image">
                      <Image
                        src={urlFor(blog.featureImage.asset).width(400).url()}
                        alt={`blog${index}`}
                        width={400}
                        height={400}
                      />
                    </div>
                    <div className="heading text-blue1 text-2xl font-semibold my-4">
                      {blog.title}
                    </div>
                    <div className="text h-[6rem] overflow-hidden my-6">{blog.summary || ""}</div>
                  </Link>
                  <Link
                    href={`/blog/${blog.slug.current}`}
                    className="link text-lightRed underline my-6"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          <div className=" col-span-full flex items-center justify-center">
            {loading && <Loader className="my-80" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBlogs;
