import React from 'react';
import Tilt from 'react-tilt';
import { typescript, redux, reactjs, javascript } from '../assets';

const ImageSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2 text-center">MEME to Metaverse</h2>
      <p className="text-lg text-gray-600 mb-4">
        Immerse yourself in the awe-inspiring world of Hanuman as you embark on a spiritual journey like no other.
      </p>
      <div className="max-h-screen mt-4 overflow-hidden">
        <div className="flex flex-wrap justify-center w-full max-w-screen-lg">
          <Tilt className="w-full sm:w-1/2 md:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl">
              <img
                src={typescript}
                alt="Image 1"
                className="rounded-lg w-full h-full transform hover:scale-105"
              />
              <p className="text-base mt-2 text-black text-center font-bold">Image 1 Text</p>
            </div>
          </Tilt>
          <Tilt className="w-full sm:w-1/2 md:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl">
              <img
                src={redux}
                alt="Image 2"
                className="rounded-lg w-full h-full transform hover:scale-105"
              />
              <p className="text-base mt-2 text-black text-center font-bold">Image 2 Text</p>
            </div>
          </Tilt>
          <Tilt className="w-full sm:w-1/2 md:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl">
              <img
                src={reactjs}
                alt="Image 3"
                className="rounded-lg w-full h-full transform hover:scale-105"
              />
              <p className="text-base mt-2 text-black text-center font-bold">Image 3 Text</p>
            </div>
          </Tilt>
          <Tilt className="w-full sm:w-1/2 md:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl">
              <img
                src={javascript}
                alt="Image 4"
                className="rounded-lg w-full h-full transform hover:scale-105"
              />
              <p className="text-base mt-2 text-black text-center font-bold">Image 4 Text</p>
            </div>
          </Tilt>
        </div>
      </div>

      <div className="max-w-screen-lg mt-4 text-white">
        <h3 className="text-3xl font-bold text-center">Introduction to Token</h3>
        <p className="text-lg text-white mt-4 text-center">
          Hanuman Universe token is a meme token built on the Binance Smart Network. With a total supply of 40,000,000,000,000 $HUT, it offers awareness, belongingness, connectivity, guidance, and comfort with the blockchain experience.
          <br /><br />
          1% tax, equal opportunities, space to grow, and engage in a vibrant community that embraces a sense of family, connection to tradition, perseverance, and empowerment.
          <br /><br />
          Limited Supply: $HUT has a limited supply of 40 trillion tokens, which means that there is a finite amount of tokens that will ever be created.
          <br /><br />
          Decentralized: $HUT is a decentralized cryptocurrency, which means that it is not controlled by any central authority. This feature ensures that the token is resistant to censorship and provides a high level of security.
        </p>
      </div>
    </div>
  );
};

export default ImageSection;
