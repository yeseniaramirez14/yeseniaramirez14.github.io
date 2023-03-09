import { useForm } from "@formspree/react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import contact from "../assets/img/wave.png";
import { SuccessMsg } from "./SuccessMsg";

export function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [state, handleSubmit] = useForm("xaykwqpd");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  if (state.succeeded) {
    return <SuccessMsg />;
  }

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <hr className="contact-divider"></hr>
          <Row className="align-items-center">
            <Col md={6} className="contact-img">
              <img src={contact} alt="Contact Us" />
            </Col>
            <Col md={6}>
              <h2> &lt;Contact Me /&gt; </h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="email"
                      name="email"
                      required
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="tel"
                      name="phone"
                      value={formDetails.phone}
                      placeholder="Phone Number"
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col sm={12} className="px-1">
                    <textarea
                      row="6"
                      name="message"
                      required
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    />
                  </Col>
                  <Col sm={12} className="px-1">
                    <button
                      type="submit"
                      onClick={() => setButtonText("Sending...")}
                    >
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
