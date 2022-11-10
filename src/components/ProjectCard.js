import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitUrl, technologies }) => {
  return (
    <Col>
      <a href={gitUrl} target="_blank" rel="noreferrer">
        <div className="proj-imgbx">
          <img className="proj-img" src={imgUrl} alt="project" />
          <div className="proj-txt">
            <h4>{title}</h4>
            <span>{description}</span>
            <div>{technologies}</div>
          </div>
        </div>
      </a>
    </Col>
  );
};
