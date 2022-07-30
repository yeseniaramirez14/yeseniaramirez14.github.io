import { Container } from "react-bootstrap"
import thankyou from "../assets/img/thankyou.png"

export const SuccessMsg = () => {
    return (
        <>
        <section className="success" id="connect">
            <Container>
                <hr className="contact-divider"></hr>
                <h2> &lt;Thank you /&gt; </h2>
                <h3> I appreciate your message.
                    <br></br>
                I'll get back to you soon! </h3>
                <img src={thankyou} alt="Contact Us" />
            </Container>
        </section>
    </>
    )
}