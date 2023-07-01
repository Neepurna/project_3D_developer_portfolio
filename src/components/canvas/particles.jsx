import React, { useEffect } from "react";
import particlesJS from "particles.js";

const BackgroundParticles = () => {
  useEffect(() => {
    particlesJS.load("particles-js", "path/to/particles.json", function () {
      console.log("Particles.js loaded");
    });
  }, []);

  return (
    <div id="particles-js" style={{ width: "100%", height: "100%", position: "fixed", zIndex: -1 }}></div>
  );
};

export default BackgroundParticles;
