import React from "react";
import { Row, Col } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiNodejs, DiReact, DiMongodb, DiGit, DiPython, DiJava, DiPhp } from "react-icons/di";
import { SiGithub, SiJupyter, SiBlender, SiTableau, SiR } from "react-icons/si";
import { AiOutlineFileExcel } from "react-icons/ai";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons" title="Blender">
        <SiBlender />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons" title="PHP">
        <DiPhp />
      </Col>
      
    </Row>
  );
}

export default Techstack;