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
        <Row xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
          <Col className="item-bx" xl={3} xxl={3}>
            <div className="align-self-center item">
              <SiPython size={"5em"}/>
            <h5>Python</h5>
            </div>
          </Col>
          <Col className="item-bx" xl={3} xxl={3}>
            <div className="align-self-center item" >
              <SiJavascript size={"5em"}/>
              <h5>JavaScript</h5>
            </div>
          </Col>
          <Col className="item-bx" xl={3} xxl={3}>
            <div className="align-self-center item">
              <SiHtml5 size={"5em"}/>
             <h5>HTML</h5>
            </div>
          </Col>
          <Col className="item-bx" xl={3} xxl={3}>
            <div className="align-self-center item">
              <SiCss3 size={"5em"}/>
            <h5>CSS</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiBootstrap size={"5em"}/>
              <h5>Bootstrap</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiReact size={"5em"}/>
             <h5>React</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiDjango size={"5em"}/>
            <h5>Django</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiPostgresql size={"5em"}/>
              <h5>PostgreSQL</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiFastapi size={"5em"}/>
             <h5>FastAPI</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiDocker size={"5em"}/>
            <h5>Docker</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item">
              <SiPandas size={"5em"}/>
            <h5>Pandas</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item matplotlib">
              <img src={matplotlib} alt="matplotlib"/>
            <h5>Matplotlib</h5>
            </div>
          </Col>
          <Col className="item-bx">
            <div className="item seaborn">
              <img src={seaborn} alt="seaborn"/>
            <h5>Seaborn</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

