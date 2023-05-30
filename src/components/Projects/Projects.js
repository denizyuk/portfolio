import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import tetris from "../../assets/Images/tetris.png";
import steam from "../../assets/Images/steam.png";
import kidsclothing from "../../assets/Images/kidsclothing.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>The last projects I've worked on</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={tetris}
              isBlog={false}
              title="Tetris"
              description="A simple Tetris game made with React.js"
              ghLink="https://github.com/denizyuk/tetris"
              demoLink="https://tetris-fyah.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={steam}
              isBlog={false}
              title="Steam Companion"
              description="Steam app that finds common games between two users"
              ghLink="https://github.com/denizyuk/steamcompanion"
              // demoLink="https://steamcompanion.herokuapp.com/" update this to the link of the project
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={kidsclothing}
              isBlog={false}
              title="Kid Clothing"
              description="Clothing suggestion app for kids based on weather. Under development"
              ghLink="https://github.com/denizyuk/clothes-suggestion"
              // demoLink="https://steamcompanion.herokuapp.com/" update this to the link of the project
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
