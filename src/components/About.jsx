import React from 'react';
import Tilt from 'react-tilt';
import { typescript, redux, reactjs, javascript } from '../assets';

const MemeToMetaverseSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <h2 className="text-5xl font-bold mb-4 text-center text-white">MEME to Metaverse</h2>
      <p className="text-lg text-gray-600 mb-6 text-center text-white">
        Immerse yourself in the awe-inspiring world of Hanuman as you embark on a spiritual journey like no other.
      </p>
      <div className="flex flex-wrap justify-center w-full">
        <Tilt className="p-4 w-1/2 sm:w-1/2 md:w-1/4">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl">
            <img
              src={typescript}
              alt="Image 1"
              className="rounded-lg w-full h-auto object-cover transform hover:scale-105"
            />
            <p className="text-xl mt-2 text-black text-center font-bold">Meme</p>
          </div>
        </Tilt>
        <Tilt className="p-4 w-1/2 sm:w-1/2 md:w-1/4">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl">
            <img
              src={redux}
              alt="Image 2"
              className="rounded-lg w-full h-auto object-cover transform hover:scale-105"
            />
            <p className="text-xl mt-2 text-black text-center font-bold">NFT</p>
          </div>
        </Tilt>
        <Tilt className="p-4 w-1/2 sm:w-1/2 md:w-1/4">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl">
            <img
              src={reactjs}
              alt="Image 3"
              className="rounded-lg w-full h-auto object-cover transform hover:scale-105"
            />
            <p className="text-xl mt-2 text-black text-center font-bold">Play to Earn</p>
          </div>
        </Tilt>
        <Tilt className="p-4 w-1/2 sm:w-1/2 md:w-1/4">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl">
            <img
              src={javascript}
              alt="Image 4"
              className="rounded-lg w-full h-auto object-cover transform hover:scale-105"
            />
            <p className="text-xl mt-2 text-black text-center font-bold">Metaverse</p>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default MemeToMetaverseSection;
