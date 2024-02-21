// tpa-website/src/lib/getImageUrl.js
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "./sanity";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const getImageUrl = ({ image }) => {
  console.log("image", image);
  if (image && image.asset) {
    return urlFor(image.asset._ref).url();
  }
  return null;
};

export default getImageUrl;
