// TPA-Website/src/pages/_app.js
import "../globals.css";
import { useEffect, useState } from "react";
import TextContext from "../TextContext";
import client from "../lib/sanity";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState({});
  const myText = "The Product Architects";
  const [sectionNo, setSectionNo] = useState(1);
  const [navigationData, setNavigationData] = useState([]);
  const [letsTalkData, setLetsTalkData] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsResult, themeResult, navigation] = await Promise.all([
          client.fetch('*[_type == "movie"]'),
          client.fetch('*[_type == "theme"]'),
          client.fetch('*[_type == "navigation"]'),
        ]);
        setTheme(themeResult[0]);
        setNavigationData(navigation[0]);
        const fontFamilyName = "Kode+Mono:wght@400..700";
        const fontUrl = themeResult[0].font;

        const newFontFace = `
          @font-face {
            font-family: 'CustomFont';
            src: url('${fontUrl}');
          }
        `;

        const styleElement = document.createElement("style");
        styleElement.innerHTML = newFontFace;
        document.head.appendChild(styleElement);
        document.body.style.fontFamily = "CustomFont, sans-serif";
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <TextContext.Provider
      value={{
        myText,
        sectionNo,
        setSectionNo,
        theme,
      }}
    >
      <Component {...pageProps} />
    </TextContext.Provider>
  );
}

export default MyApp;
