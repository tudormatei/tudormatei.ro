import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";
import { images } from "../../constants";

const works = [
  {
    hasCode: true,
    title: "Mayor's Chatbot",
    description:
      "Implemented a comprehensive email automation system for the chatbot of Bucharest's Mayor, Nicușor Dan.",
    codeLink: "https://nicusordan.ro/",
    imgUrl: images.nicusordan,
    tags: ["Others", "All"],
  },
  {
    hasCode: false,
    title: "Shotmaniacs",
    description:
      "Full-stack webapp for shotmaniacs marketing company built with Java, Tomcat, JS, HTML, CSS and Postgresql.",
    imgUrl: images.shotmaniacs,
    tags: ["Web App", "All"],
  },
  {
    hasCode: false,
    title: "Audio Insight",
    description:
      "Web application developed for real-time note taking through speech recognition.",
    imgUrl: images.audioinsight,
    tags: ["Web App", "All"],
  },
  {
    hasCode: true,
    title: "Men in Black",
    description:
      "An end-to-end finance management platform developed for @meninblack.ro",
    codeLink: "https://meninblack.ro/",
    imgUrl: images.meninblack,
    tags: ["Web App", "All"],
  },
  {
    hasCode: true,
    title: "BotGen",
    description:
      "A chatbot development company that integrates advanced ChatGPT technology to build custom, embedded chatbots for websites.",
    codeLink: "https://github.com/tudormatei/botgen",
    imgUrl: images.botgen,
    tags: ["Web App", "All"],
  },
  {
    hasCode: false,
    title: "J.A.R.V.I.S.",
    description:
      "Developed a virtual assistant modeled after J.A.R.V.I.S. from Iron Man using OpenAI for NPL and ElevenLabs for voice synthesis.",
    imgUrl: images.jarvis,
    tags: ["AI", "All"],
  },
  {
    hasCode: true,
    title: "gRPC",
    description:
      "High-performance API service developed using gRPC and Python designed for micro-service communication.",
    codeLink: "https://github.com/tudormatei/grpc-fingerprint",
    imgUrl: images.grpc,
    tags: ["Others", "All"],
  },
  {
    hasCode: false,
    title: "Fingerprint GAN",
    description:
      "Synthetic fingerprint generator built using a generative adverserial network through tensorflow.",
    imgUrl: images.fingerprint,
    tags: ["AI", "All"],
  },
  {
    hasCode: true,
    title: "Barbershop",
    description:
      "Built a barbershop landing website together with appointment making system.",
    codeLink: "https://github.com/tudormatei/barber-shop",
    imgUrl: images.barbershop,
    tags: ["Web App", "All"],
  },
  {
    hasCode: false,
    title: "Swift Doc",
    description:
      "React-based document auto-completion web applciation built with Spring Boot.",
    codeLink: "",
    imgUrl: images.swiftDoc,
    tags: ["Web App", "All"],
  },
  {
    hasCode: false,
    title: "Traffic Sign Recognition",
    description:
      "A machine learning model developed for my IB Extended Essay project, capable of accurately identifying traffic signs.",
    codeLink: "",
    imgUrl: images.trafficSign,
    tags: ["AI", "All"],
  },  
  {
    hasCode: true,
    title: "AI Chatbot",
    description:
      "A conversational AI chatbot created using TensorFlow 2.0 and Python 3 and natural language processing techniques.",
    codeLink: "https://github.com/tudormatei/tensorflow-chatbot",
    imgUrl: images.chatbot,
    tags: ["AI", "All"],
  },
  {
    hasCode: true,
    title: "Slot Sinners",
    description:
      "Slot Sinners is a slot machine game developed in Unity 3D for the DevHacks 2020 hackathon",
    codeLink: "https://github.com/tudormatei/slot-sinners",
    imgUrl: images.slotSinners,
    tags: ["Game", "All"],
  },
  {
    hasCode: true,
    title: "Pixel Catcher",
    description:
      "A fast-paced mobile game built using Unity Game Engine, available on Google Play.",
    codeLink:
      "https://play.google.com/store/apps/details?id=com.TudorasterDevs.PixelCatcher",
    imgUrl: images.pixelCatcher,
    tags: ["Game", "All"],
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filterWorks, setFilterWorks] = useState(works);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My
        <span> Projects</span>
      </h2>

      <div className="app__work-filter">
        {["AI", "Game", "Web App", "Others", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWorks.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="app__work-hover app__flex"
              >
                {work.hasCode ? (
                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                        staggerChildren: 0.5,
                      }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                ) : null}
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {work.description}
              </p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "projects",
  "app__primarybg"
);
