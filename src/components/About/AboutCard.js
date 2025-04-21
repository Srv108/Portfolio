import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
              Hi everyone, I'm <span className="purple">Saurabh Kumar</span> from Bihar, India, currently pursuing a <span className="purple">Bachelor's degree in Computer Science</span> at <span className="purple">Lovely Professional University</span>.
              I'm passionate about building modern, scalable web applications and enjoy solving real-world problems through technology. My focus lies development, with in <span className="purple">full-stack</span> a growing interest in <span className="purple">Android development</span> and <span className="purple">backend engineering</span>. I believe in writing clean, efficient code and continuously strive to expand my technical skill set.
              
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Saurabh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
