import { Container, Row, Col } from "react-bootstrap";
import github from "../assets/img/github.svg";
import linkedIn from "../assets/img/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center footer-bx">
          <Col xs={6} sm={6}>
            <div className="social-icon">
              <a
                href="https://bit.ly/yesenia-linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} />
              </a>
              <a
                href="https://bit.ly/yesenia-github"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} />
              </a>
            </div>
            <p>Thanks for stopping by!</p>
          </Col>
          <Col xs={6} sm={6} className="align-self-end">
            <a href="#home">
              <h1>&lt;/Yesenia&gt;</h1>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
