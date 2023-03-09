import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import chicEvents from "../assets/img/chic_events.gif";
import stayClassic from "../assets/img/stay-classic.gif";
import overrated from "../assets/img/overrated.gif";
import spotify from "../assets/img/spotify-analysis.gif";
import commonCrave from "../assets//img/commonCrave.gif"
import seekingEvents from "../assets/img/seekingEvents.gif"
import "animate.css";
import { Footer } from "./Footer";
import { Contact } from "./Contact";

export const Projects = () => {
  const projects = [
    {
      title: "Common Crave",
      description:
        "A restaurant recommendation website where friends can create groups to find a restaurant sharing their common craving while accommodating everyone's location.",
      imgUrl: commonCrave,
      gitUrl: "https://commoncrave.com/",
      technologies: "Node.js, Express.js, MongoDB, React, Redux, Tailwind, AWS, Nginx, Ubuntu"
    },
    {
      title: "Overrated",
      description:
      "A dating web application where users can find their soulmate by weeding out bad seeds with the implementation of dating reviews",
      imgUrl: overrated,
      gitUrl: "https://github.com/yeseniaramirez14/overrated",
      technologies: "FastAPI, PostgreSQL, React, Bootstrap"
    },
    {
      title: "Seeking Events",
      description:
        "An event booking website where organizations and users can connect through events",
      imgUrl: seekingEvents,
      gitUrl: "https://github.com/yeseniaramirez14/seeking-events",
      technologies: "Node.js, Express.js, MongoDB, GraphQL"
    },
    {
      title: "Stay Classic Dealership",
      description:
      "A car dealership web application that solves the needs of a classic automobile operation including inventory, sales, and car services",
      imgUrl: stayClassic,
      gitUrl: "https://github.com/yeseniaramirez14/stay-classic",
      technologies: "Django, PostgreSQL, React, Bootstrap"
    },
    {
      title: "Chic Events",
      description:
      "An event planning web application for booking the perfect event package to create a stress-free and chic experience with all your guests",
      imgUrl: chicEvents,
      gitUrl: "https://github.com/yeseniaramirez14/chic-events",
      technologies: "Django, SQLite, HTML, CSS"
    },
    {
      title: "Spotify Data Analysis",
      description:
      "Data analysis of 20 of my favorite artists including data visualizations",
      imgUrl: spotify,
      gitUrl: "https://github.com/yeseniaramirez14/spotify_data_analysis",
      technologies: "SQLite, Pandas, Matplotlib, Seaborn"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <div className="project-bx">
              <hr className="divider"></hr>
              <h2>&lt;Projects /&gt;</h2>
            </div>
          </Col>
        </Row>
        <Row xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}>
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </Row>
      </Container>
      <Contact />
      <Footer />
    </section>
  );
};
