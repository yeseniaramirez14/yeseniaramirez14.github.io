import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/main_image.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Banner = () => {
  // indicate index to which word is currently displayed on the screen
  const [loopNum, setLoopNum] = useState(0);
  // is the type being typed out or deleted? default is false because we start by typing the word
  const [isComplete, setIsComplete] = useState(false);
  const wordList = [
    "Software Engineer",
    "Outgoing Introvert",
    "Passionate Aries",
    "TV Show Binger",
    "Puzzle Addict",
  ];
  // the component needs to know the word that is being displayed (starts with letters)
  const [text, setText] = useState("");
  // determines how fast one letter comes after the first one is typed and also the word is going to be deleted faster since when someone deletes it deletes faster
  const [delta, setDelta] = useState(200);
  const [index, setIndex] = useState(0);

  // run this function to take care of typing or deleting
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta); // delta will be our interval when tick is getting fired off?
    return () => {
      clearInterval(ticker);
    }; // once we set the interval and component unmount - we need to clear the interval that contains the ticker
  }, [text]); // <-- we want it to run every time the text gets updated

  const tick = () => {
    let i = loopNum % wordList.length;
    let fullText = wordList[i];
    let updatedText = isComplete ? "" : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (!isComplete && updatedText === fullText) {
      setIsComplete(true);
      setDelta(1000);
      setIndex((prevIndex) => prevIndex + 1);
    } else if (isComplete && updatedText === "") {
      setIsComplete(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <span className="tagline">&lt;Hello World /&gt;</span>
                  <h1>I'm Yesenia</h1>
                  <h2 className="wrap">{`${text}|`}</h2>
                  <p>
                    I'm a <b>full stack software engineer</b> whose fire and passion
                    for problem-solving and creativity was reignited once making
                    the leap into the tech industry. Prior to software
                    engineering, I was in the nutrition field. After some
                    self-reflection, I decided to apply to Hack Reactor's
                    accelerated coding bootcamp, which I completed in July 2022.
                    I love the ever-changing programming landscape and the challenge 
                    of learning new tools, programming languages, and frameworks. I 
                    am eager to continue my learning and grow as a software engineer!  
                  </p>
                  <p>
                    I am now <i><b>open to work</b></i> and looking for new job opportunities! 
                  </p>
                  <a href="#connect"><button>
                    Let's Connect{" "}
                    <ArrowRightCircle size={25}></ArrowRightCircle>
                  </button></a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
