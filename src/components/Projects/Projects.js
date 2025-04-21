import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import message from "../../Assets/Projects/message.png";
import game from "../../Assets/Projects/game.png";
import herbal from "../../Assets/Projects/Herbal.png";
import crypto from "../../Assets/Projects/crypto.png";
import { AiOutlineVerticalLeft } from "react-icons/ai";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto-Tracker"
              description="A lightweight web application that tracks the real-time market capitalization of various cryptocurrencies. The app fetches live data from an API and displays key information such as coin name, symbol, current price, and market cap. Designed with a user-friendly interface, it allows users to quickly get an overview of the crypto market trends"
              ghLink="https://github.com/vipulbeniwal01/BURGER-HOUSE-WEBSITE"
              demoLink="https://vipulbeniwal01.github.io/BURGER-HOUSE-WEBSITE/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={herbal}
              isBlog={false}
              title="Herbal-Garden"
              description="A React-based web application that showcases a collection of herbs and trees along with detailed information about each one. Users can browse through a visually engaging catalog to learn about the medicinal uses, botanical names, and health benefits of various plants. Designed to promote awareness about natural remedies and traditional herbal knowledge"
              ghLink="https://github.com/vipulbeniwal01/N-Queen-Visualiser"
              demoLink="https://herbal-garden-seven.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Snake-Game"
              description="A browser-based implementation of the classic Snake game built using plain JavaScript, HTML, and CSS. The player controls a snake that moves around the grid, eating food to grow longer while avoiding collisions with itself or the walls. The game features smooth controls, increasing difficulty, and a simple yet nostalgic design."
              ghLink="https://github.com/Srv108/Snake-Game-Js"
              demoLink="https://snake-game-7s9dg6g20-srv108s-projects.vercel.app/"              
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={message}
              isBlog={false}
              title="Message-Slake"
              description="A full-featured Slack-like messaging application built with the MERN stack (MongoDB, Express.js, React, Node.js). It supports real-time one-on-one and group chat using WebSockets, along with integrated audio and video calling functionality using WebRTC. Users can create channels, send instant messages, and communicate seamlessly through a modern, responsive UI. Designed for teams and collaboration, the app ensures fast, reliable, and secure communication."
              ghLink="https://github.com/Srv108/Message-Slake-Frontend"
              demoLink="https://message-slake-frontend.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
