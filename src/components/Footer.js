import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import github from "../assets/img/github.svg";
import linkedIn from "../assets/img/linkedin.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/yeseniaramirez14/"><img src={linkedIn} /></a>
                            <a href="https://github.com/yeseniaramirez14"><img src={github} /></a>
                        </div>
                        <p>Copyright 2022. All Right Reserved by Yesenia</p>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <h1>&lt;/Yesenia&gt;</h1>
                        {/* <img src={logo} alt="logo" /> */}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}