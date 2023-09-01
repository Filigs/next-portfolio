import acepipePic from "/public/acepipe.png";
import portfolioPic from "/public/portfolio.png";
import voilacryptoPic from "/public/voilacrypto.png";

export const projects = [
  {
    id: 0,
    type: "Website",
    start: "July, 2022",
    title: "Personal CV Website",
    description:
      "My first website using React, it showcases my skills and projects in an interesting way. You can follow up all my progress by clicking the GitHub link.",
    url: "https://nunomartins.dev",
    image: portfolioPic,
  },
  {
    id: 1,
    type: "Website",
    start: "April, 2022",
    title: "Digital Menu",
    description:
      "The very first website I made commercially as a Freelancer, for an icecream shop, made in vanilla JS, HTML5 and CSS3, gathered a lot of information from this project.",
    url: "https://sandbox.acepipe.pt/",
    image: acepipePic,
  },
  {
    id: 2,
    type: "Website",
    start: "December, 2022",
    title: "Crypto News Blog",
    description:
      "This is a challenging project and the very base for a future project. This is a juicy one, lots of animations and morden UI practices 🚀",
    url: "https://voilacrypto.io/",
    image: voilacryptoPic,
  },
];
