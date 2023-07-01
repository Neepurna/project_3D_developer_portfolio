import React from "react";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center">
      <div className="bg-white h-[1px] mb-4"></div>

      <div className="flex justify-center items-center gap-8 mb-6">
        <div
          className="inline-block text-base border-[1px] rounded-md p-2 cursor-pointer"
          onClick={() => window.open("", "_blank")}
        >
          <FaFacebookF />
        </div>

        <div
          className="inline-block text-base border-[1px] rounded-md p-2 cursor-pointer"
          onClick={() => window.open("", "_blank")}
        >
          <FaInstagram />
        </div>

        <div
          className="inline-block text-base border-[1px] rounded-md p-2 cursor-pointer"
          onClick={() => window.open("", "_blank")}
        >
          <FaYoutube />
        </div>
      </div>

      <p className="relative bottom-2 text-center text-sm">
        &#169; Hanuman Universe Coin-2023.
      </p>
    </footer>
  );
};

export default Footer;
