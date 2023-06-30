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

  const containerStyle = isVisible ? styles.fadeIn : "";

  return (
    <div
      ref={sectionRef}
      className={`min-h-screen flex flex-col justify-center items-center ${containerStyle}`}
    >
      <div className="max-w-4xl px-6 py-12 mx-auto">
        <h3 className="text-5xl font-bold text-center mb-8">
          Hanuman and Blockchain
        </h3>
        <p className="text-lg text-white text-center mb-8 break-words">
          We are building a universe for the community, <br /> inspired by Hanuman’s stories via blockchain.
        </p>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 p-0">
            <img src={img1} alt="Relation" className="w-full h-auto max-w-full max-h-full" />
          </div>

          <div className="flex-1 md:h-[500px]">
            <div className="flex justify-center items-center h-full">
              <EarthCanvas />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relation;
