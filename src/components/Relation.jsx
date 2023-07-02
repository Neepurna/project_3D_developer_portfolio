import React, { useRef, useState, useEffect } from "react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import img1 from "../assets/relation.png";

const Relation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const containerStyle = isVisible ? `${styles.fadeIn} w-full flex items-center justify-center h-screen` : "";

  const contentWrapperStyle = "max-w-7xl px-6 py-16 mx-auto";

  const titleStyle = "text-3xl md:text-6xl font-bold text-center mb-5";

  const paragraphStyle = "text-base md:text-lg text-white text-center mb-8 break-words";

  const flexContainerStyle = "flex flex-col md:flex-row-reverse gap-10 items-center";

  const imageContainerStyle = "flex-1";

  const imageStyle = "w-full h-auto max-w-full max-h-full";

  const canvasContainerStyle = "flex-1 md:h-[550px] h-auto";

  const canvasContentStyle = "h-full flex items-center justify-center";

  const sectionStyle = "h-screen py-10 px-4 md:px-0";

  const subTextStyle = "text-lg text-gray-600 mb-6 text-center text-white";

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col items-center justify-center ${containerStyle} ${sectionStyle}`}
    >
      <div className={contentWrapperStyle}>
        <h3 className={titleStyle}>Hanuman and Blockchain</h3>
        <p className={subTextStyle}>
          We are building a universe for the community, inspired by Hanuman’s stories via blockchain.
        </p>
        <div className={flexContainerStyle}>
          <div className={imageContainerStyle}>
            <img src={img1} alt="Relation" className={imageStyle} />
          </div>
          <div className={canvasContainerStyle}>
            <div className={canvasContentStyle}>
              <EarthCanvas />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relation;
