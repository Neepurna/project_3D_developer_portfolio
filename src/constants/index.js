import {
  mobile,
  backend,
  creator,
  web,
  
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "relation",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Meme",
    img: web,
    width:150,
    height:100,
  },
  {
    title: "NFT",
    img: mobile,
  },
  {
    title: "Play to Earn",
    img: backend,
  },
  {
    title: "Metaverse",
    img: creator,
  },
  
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
    source_code_link: "https://www.facebook.com/"
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Phase 1",
    company_name: "",
    icon: starbucks,

    iconBg: "#383E56",
    date: "",
    points: [
      "Roadmap V1",
      "Website",
      "Smart Contract Development",
      "Community Building",
      "Marketing Campaigns",
    ],
  },
  {
    title: "Phase 2",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Presale Launch",
      "Influencer Marketing",
      "Applying to list on CoinGecko and CMC",
      "Advertising Campaign",
      "Various Partnerships",
    ],
  },
  {
    title: "Phase 3",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Youtube Campaigns",
      "Community Expansion",
      "Giveaway",
      "Team Expansion",
      "Contract Audit",
      "Establish Legal Entity",
      "CEX Listing",
      "Roadmap V2"
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I have found immense joy and inspiration in the Hanuman the Universe community. It's aunique blend of spirituality and humor that truly connects us all.",
    name: "Ram",
    designation: "King",
    company: "Ayodhya",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I have found immense joy and inspiration in the Hanuman the Universe community. It's aunique blend of spirituality and humor that truly connects us all.",
    name: "Ravan",
    designation: "king",
    company: "Lanka",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I have found immense joy and inspiration in the Hanuman the Universe community. It's aunique blend of spirituality and humor that truly connects us all.",
    name: "Sita",
    designation: "Princess",
    company: "Janakpur",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Step 1 - Create MetaMask wallet",
    description:
      "Create a MetaMask Wallet using either a desktop computer or an iOS/Android mobile device.That will allow you to buy, sell, send, and receive $Hanuman",
    tags: [],
    image: carrent,
    source_code_link: "https://metamask.com/"
    
  },
  {
    name: "Step 2 - Send BNB or USD to your wallet",
    description:
      "You can transfer it to your MetaMask Wallet from exchanges like Coinbase, Binance, etc. Makesure to use the BEP-20 network when transferring BNB",
    tags: [
      
    ],
    image: jobit,
    source_code_link: "",
  },
  {
    name: "Step 3-Connect wallet to hanumanuniverse",
    description:
      "go to hanumanuniverse.com and access your wallet to hanuman universe by clicking 'connect wallet'and selecting MetaMask.",
    tags: [
      

      
    ],
    image: tripguide,
    source_code_link: "",
  },
  {
    name: "Step 4 - Claim $HUT",
    description:
      "You can start swapping as soon as you have BNB available! Press ‘Select a currency and enter the $Hanuman token address:",
    tags: [
      
    ],
    image: tripguide,
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
