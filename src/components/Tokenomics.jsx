import React from 'react';
import img from '../assets/tokenomics.png';
import Tilt from 'react-tilt';
import { SectionWrapper } from '../hoc';

const TokenomicsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Tokenomics</h2>
        <p className="text-lg text-gray-600 mb-6 text-center text-white">
          We believe in transparency and fairness. Our token distribution is as follows:
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-1/2">
            <Tilt className="Tilt">
              <div className="hover:scale-105 transition-transform duration-300">
                <img
                  src={img}
                  alt="Tokenomics"
                  className="w-full h-auto mx-auto mb-8 Tilt-inner"
                />
              </div>
            </Tilt>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <ul>
              <li className="mb-4">
                <strong>Team Allocation (15%):</strong> We have a dedicated team working passionately to manifest our vision and guide the project toward success.
              </li>
              <li className="mb-4">
                <strong>Advisor and Community Whitelisting (10%):</strong> The 10% is for the early community, and the advisor helps the project to grow in a bigger space.
              </li>
              <li className="mb-4">
                <strong>Public Sale (35%):</strong> Be an early holder of Tokens! Participate in our presale and gain a significant advantage as we reward our community members right from the start.
              </li>
              <li className="mb-4">
                <strong>Staking Rewards (35%):</strong> Secure the network, contribute to its growth, and earn rewards for your commitment through our staking program.
              </li>
              <li>
                <strong>Exchange and Partnership (5%):</strong> Token allocated for future partnership and exchange listing.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(TokenomicsSection, "token");
