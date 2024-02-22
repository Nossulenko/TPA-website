import "../globals.css";
import { useEffect, useState } from "react";
import client from "../lib/sanity";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const themeResult = await client.fetch('*[_type == "theme"]');
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
      }
    };

    fetchData();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
