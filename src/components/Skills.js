import { Container, Row, Col } from "react-bootstrap";
import { SiJavascript, SiPython, SiHtml5, SiCss3, SiReact, SiDjango, SiPostgresql, SiDocker, SiFastapi, SiBootstrap } from 'react-icons/si';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <hr className="divider"></hr>
                            <h2>
                              &lt;Skills /&gt;
                            </h2> 
                        </div>
                    </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="item">
                      <SiJavascript size={"5em"}/>
                      <h5>JavaScript</h5>
                    </div>
                  </Col>
                  <Col>
                    <div className="item">
                      <SiPython size={"5em"}/>
                      <h5>Python</h5>
                    </div>
                  </Col>
                  <Col>
                    <div className="item">
                      <SiHtml5 size={"5em"}/>
                      <h5>HTML</h5>
                    </div>
                  </Col>
                  <Col>
                    <div className="item">
                      <SiCss3 size={"5em"}/>
                      <h5>CSS</h5>
                    </div>
                  </Col>
                  <Col>
                    <div className="item">
                      <SiBootstrap size={"5em"}/>
                      <h5>Bootstrap</h5>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="item">
                      <SiReact size={"5em"}/>
                      <h5>React</h5>
                    </div>
                  </Col>
                  <Col>
                    <div className="item">
                      <SiDjango size={"5em"}/>
                      <h5>Django</h5>
                    </div>
                  </Col>
                  <Col>
                    <div className="item">
                      <SiPostgresql size={"5em"}/>
                      <h5>PostgreSQL</h5>
                    </div>
                  </Col>
                  <Col>
                    <div className="item">
                      <SiFastapi size={"5em"}/>
                      <h5>FastAPI</h5>
                    </div>
                  </Col>
                  <Col>
                    <div className="item">
                      <SiDocker size={"5em"}/>
                      <h5>Docker</h5>
                    </div>
                  </Col>
                </Row>
            </Container>
        </section>
    )
}