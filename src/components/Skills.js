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
} from "react-icons/si";

export const Skills = () => {
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
        <Row xs={3} sm={3} md={5} lg={5} xl={5} xxl={5}>
          <Col xs={3} sm={3} >
            <div className="item">
              <SiJavascript size={"5em"} />
              <h5>JavaScript</h5>
            </div>
          </Col>
          <Col xs={3} sm={3}>
            <div className="item">
              <SiPython size={"5em"} />
              <h5>Python</h5>
            </div>
          </Col>
          <Col xs={3} sm={3}>
            <div className="item">
              <SiHtml5 size={"5em"} />
              <h5>HTML</h5>
            </div>
          </Col>
          <Col xs={3} sm={3}>
            <div className="item">
              <SiCss3 size={"5em"} />
              <h5>CSS</h5>
            </div>
          </Col>
          <Col>
            <div className="item">
              <SiBootstrap size={"5em"} />
              <h5>Bootstrap</h5>
            </div>
          </Col>
          <Col>
            <div className="item">
              <SiReact size={"5em"} />
              <h5>React</h5>
            </div>
          </Col>
          <Col>
            <div className="item">
              <SiDjango size={"5em"} />
              <h5>Django</h5>
            </div>
          </Col>
          <Col>
            <div className="item">
              <SiPostgresql size={"5em"} />
              <h5>PostgreSQL</h5>
            </div>
          </Col>
          <Col>
            <div className="item">
              <SiFastapi size={"5em"} />
              <h5>FastAPI</h5>
            </div>
          </Col>
          <Col>
            <div className="item">
              <SiDocker size={"5em"} />
              <h5>Docker</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
