import { images } from "../images/images";

export const projects = [
  {
    title: "Mayor's Chatbot",
    description:
      "Implemented a comprehensive email automation system for the chatbot of Bucharest's Mayor, Nicușor Dan.",
    longDescription:
      "This project automated email workflows, parsing user inputs and integrating with external APIs to provide dynamic responses. It reduced manual email handling completely!",
    tags: ["Python", "Automation"],
    type: "Other",
    image: images.nicusorDan,
    link: "https://nicusordan.ro/",
  },
  {
    title: "Shotmaniacs",
    description:
      "Full-stack webapp for shotmaniacs marketing company built with Java, Tomcat, JS, HTML, CSS and PostgreSQL.",
    tags: ["React", "Java", "PostgreSQL"],
    type: "Webapp",
    image: images.shotmaniacs,
  },
  {
    title: "Audio Insight",
    description:
      "Web application developed for real-time note taking through speech recognition.",
    tags: ["React", "AI", "Python"],
    type: "Webapp",
    image: images.botgen,
  },
  {
    title: "Men in Black",
    description:
      "An end-to-end finance management platform developed for @meninblack.ro.",
    longDescription:
      "This project streamlined the Men in Black team’s workflow, boosting financial tracking accuracy by 50% and significantly enhancing organizational efficiency through a platform secured with advanced Spring Security configurations.",
    tags: ["React", "Spring", "PostgreSQL"],
    type: "Webapp",
    image: images.meninblack,
    link: "https://meninblack.ro/",
  },
  {
    title: "J.A.R.V.I.S.",
    description:
      "Developed a local virtual assistant inspired by J.A.R.V.I.S. from Iron Man, featuring speech-to-text, text-to-speech, a large language model, and a user interface module.",
    longDescription:
      "Created an offline AI assistant that understands speech, talks back, and runs a local language model. Built voice and text input options, push-to-talk control, and both a complex user interface and CLI. Made it work smoothly on different operating systems, all without sending data to the cloud.",
    tags: ["Python", "AI"],
    type: "AI",
    image: images.jarvis,
  },
  {
    title: "SQLite Clone",
    description:
      "Built a lightweight clone of the SQLite database engine in C, replicating core features such as SQL parsing, B-tree storage, and basic query execution.",
    tags: ["C", "SQL"],
    type: "Other",
    image: images.sqliteClone,
    link: "https://github.com/tudormatei/sqlite-clone",
  },
  {
    title: "gRPC",
    description:
      "High-performance API service developed using gRPC and Python designed for micro-service communication.",
    tags: ["Python", "gRPC", "Service"],
    type: "Other",
    image: images.grpc,
  },
  {
    title: "Fingerprint GAN",
    description:
      "Synthetic fingerprint generator built using a generative adversarial network.",
    tags: ["Python", "TensorFlow"],
    type: "AI",
    image: images.fingerprint,
  },
  {
    title: "Barbershop",
    description:
      "Built a barbershop landing website together with appointment making system.",
    tags: ["React"],
    type: "Webapp",
    image: images.barbershop,
    link: "https://github.com/tudormatei/barber-shop",
  },
  {
    title: "SwiftDoc",
    description:
      "React-based document auto-completion web application built with Spring Boot.",
    tags: ["React", "Spring", "SQLite"],
    type: "Webapp",
    image: images.swiftdoc,
  },
  {
    title: "AI Chatbot",
    description:
      "A conversational AI chatbot created using TensorFlow 2.0 and Python 3 and natural language processing techniques.",
    tags: ["Python", "TensorFlow"],
    type: "AI",
    image: images.chatbot,
    link: "https://github.com/tudormatei/tensorflow-chatbot",
  },
  {
    title: "Sign Recognition",
    description:
      "A machine learning model developed for my IB Extended Essay project, capable of accurately identifying traffic signs.",
    longDescription:
      "The goal of the IB Extended Essay was to determine whether a general-purpose machine learning model can accurately identify traffic signs from various regions worldwide, even when trained on a broad, non-specific dataset.",
    tags: ["Python", "TensorFlow"],
    type: "AI",
    image: images.trafficSign,
  },
  {
    title: "Slot Sinners",
    description:
      "Slot Sinners is a slot machine game developed in Unity 3D for the DevHacks 2020 hackathon.",
    tags: ["C#", "Unity"],
    type: "Other",
    image: images.slotSinners,
    link: "https://github.com/tudormatei/slot-sinners",
  },
  {
    title: "Pixel Catcher",
    description:
      "A fast-paced mobile game built using Unity Game Engine, available on Google Play.",
    tags: ["C#", "Unity"],
    type: "Other",
    image: images.pixelCatcher,
    link: "https://play.google.com/store/apps/details?id=com.TudorasterDevs.PixelCatcher",
  },
];
