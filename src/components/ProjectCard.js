import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitUrl }) => {
  return (
    <Col>
      <a href={gitUrl} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="project image" />
          <div className="proj-txt">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
