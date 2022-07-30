import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard"
import chicEvents from "../assets/img/chic-events.png"
import stayClassic from "../assets/img/stay-classic.png"
import overrated from "../assets/img/overrated.png"
import TrackVisibility from "react-on-screen";
import "animate.css";
import { Footer } from './Footer';
import { Contact } from './Contact';


export const Projects = () => {
    const projects = [
        {
            title: "Chic Events",
            description: "An event planning web application for booking the perfect event package to create a stress-free and chic experience with all your guests.",
            imgUrl: chicEvents,
            gitUrl: "https://github.com/yeseniaramirez14/chic-events"
          },
          {
            title: "Stay Classic Dealership",
            description: "A car dealership web application that solves the needs of a classic automobile operation including inventory, sales, and car services.",
            imgUrl: stayClassic,
            gitUrl: "https://github.com/yeseniaramirez14/stay-classic"
          },
          {
            title: "Overrated",
            description: "A dating web application where users can find their soulmate by weeding out bad seeds with the implementation of dating reviews.",
            imgUrl: overrated,
            gitUrl: "https://github.com/yeseniaramirez14/chic-events"
          },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn project-bx" : "project-bx"}>
                        <hr className="divider"></hr>
                        <h2>&lt;Projects /&gt;</h2>
                        </div>}
                    </TrackVisibility>
                        <div>
                        <Row>
                            {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard key={index} {...project} />
                                )
                            })
                            }
                        </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Contact />
            <Footer />
        </section>
    )
}