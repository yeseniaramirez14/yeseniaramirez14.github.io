import "../SkillsCard.css";
import { Container, Row, Col } from "react-bootstrap";
import {
    SiJavascript,
    SiPython,
    SiHtml5,
    SiCss3,
    SiReact,
    SiDjango,
    SiPostgresql,
    SiDocker,
    SiFastapi,
    SiBootstrap,
    SiPandas
  } from "react-icons/si";
  import matplotlib from "../assets/img/Matplotlib_icon.svg";
  import seaborn from "../assets/img/seaborn.svg";


export const SkillsCard = () => {
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                <Col >
                    <div className="skill-bx">
                    <hr className="divider"></hr>
                    <h2>&lt;Skills /&gt;</h2>
                    </div>
                </Col>
                </Row>
                <Col>
                    <div className="imgContainer">
                        <div className="pythonLogo">
                            <SiPython size={"5em"} />
                            <p>Python</p>
                        </div>
                        <div className="javascriptLogo">
                            <SiJavascript size={"5em"}/>
                            <p>JavaScript</p>
                        </div>
                        <img className="item" src={seaborn} alt="seaborn" />
                        <SiBootstrap className="bootstrapLogo" size={"5em"}/>
                        <SiReact className="reactLogo" size={"5em"}/>
                        <SiDjango className="djangoLogo" size={"5em"}/>
                    </div>
                </Col>
            </Container>
        </section>
      );
    }
