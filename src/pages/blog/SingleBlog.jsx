// TPA-Website/src/pages/blog/SingleBlog.jsx
import React from "react";
import Image from "next/image";
import PortableText from "react-portable-text";
import Loader from "./Loader";
import { client } from "../../lib/sanity";
import styles from "./blog.module.css";
import richTextSerializers from "./richTextSerializers";

const SingleBlog = ({ singleBlogData }) => {
  if (!singleBlogData) {
    return (
      <div className=" col-span-full flex items-center justify-center">
        {loading && <Loader className="my-80" />}
      </div>
    );
  }
  // console.log("singleBlogData", singleBlogData);
  const blog = singleBlogData;
  const titleWords = blog.title.split(" ");

  // Join the first two words to form the first half, and the rest to form the second half
  const firstHalf = titleWords.slice(0, 2).join(" ");
  const secondHalf = titleWords.slice(2).join(" ");
  return (
    <div className="my-12 sm:my-20 mx-4 sm:mx-44 shubham text-left">
      <h1 className="text font">{blog.title}</h1>
      <Image src={blog.featureImage.asset.url} width={400} height={400} alt={blog.title} />
      <div className="shubham">
        <PortableText
          content={blog.mainDescription}
          projectId="xh1730zu"
          dataset="production"
          serializers={richTextSerializers}
        />
      </div>
    </div>
  );
};

export default SingleBlog;
