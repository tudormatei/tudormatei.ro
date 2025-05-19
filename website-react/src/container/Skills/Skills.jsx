import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Skills.scss";

const skills = [
  { title: "Java", imgUrl: images.java },
  { title: "Spring", imgUrl: images.springBoot },
  { title: "Tomcat", imgUrl: images.tomcat },
  { title: "Postgresql", imgUrl: images.postgresql },
  { title: "Python", imgUrl: images.python },
  { title: "Tensorflow", imgUrl: images.tensorflow },
  { title: "Flask", imgUrl: images.flask },
  { title: "C-Sharp", imgUrl: images.csharp },
  { title: "C++", imgUrl: images.cpp },
  { title: "Assembly", imgUrl: images.asm },
  { title: "Linux", imgUrl: images.linux },
  { title: "gRPC", imgUrl: images.grpc },
  { title: "React", imgUrl: images.react },
  { title: "Redux", imgUrl: images.redux },
  { title: "React Native", imgUrl: images.react },
  { title: "TypeScript", imgUrl: images.typescript },
  { title: "JavaScript", imgUrl: images.javascript },
  { title: "HTML", imgUrl: images.html },
  { title: "CSS", imgUrl: images.css },
  { title: "Unity", imgUrl: images.unity },
  { title: "Git", imgUrl: images.git },
];

const experiences = [
  {
    title: "Software Engineer",
    year: "2023",
    company: "Virtomat",
    description:
      "Migrated the full-stack Virtomat cloud-native platform from PHP into a modern React front-end architecture, improving performance and user experience. \n Designed and implemented a scalable Strapi and NodeJS backend, enabling seamless integration with RESTful services.",
  },
  {
    title: "Software Engineer",
    year: "2022",
    company: "ENSO Artificial Intelligence",
    description:
      "Managed machine learning projects, facilitating collaboration between data scientists and software engineers. Set up and configured Linux-based environments to deploy and run machine learning models, ensuring system reliability and performance.",
  },
  {
    title: "Bachelor of Computer Science",
    year: "2023 - Current",
    company: "University of Twente",
    description:
      "Computer Architecture, Operating Systems, Network Systems, Databases, Machine Learning, Algorithms & Data Structures",
  },
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.title}
            >
              <div className="app__flex" style={{ backgroundColor: "#edf2f8" }}>
                <img src={skill.imgUrl} alt={skill.title} />
              </div>
              <p className="p-text">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          <motion.div className="app__skills-exp-works">
            {experiences.map((work, index) => (
              <div key={index}>
                <motion.div
                  className="app__skills-exp-item"
                  key={`item-${index}`}
                >
                  <div className="app__skills-exp-year">
                    <p className="bold-text">{work.year}</p>
                  </div>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-exp-work"
                  data-tip
                  data-for={work.title}
                  key={`work-${index}`}
                >
                  <h4 className="bold-text">{work.title}</h4>
                  <p className="p-text">{work.company}</p>
                </motion.div>
                <div className="skills-tooltip" key={`tooltip-${index}`}>
                  {work.description}
                </div>
              </div>
            ))}
          </motion.div>
          <a href={images.cv} target="_blank">
            View CV
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
