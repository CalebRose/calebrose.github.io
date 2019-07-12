import React from "react";
import Row from "react-bootstrap/Row";
import "./tiles.css";
import ListGroup from "react-bootstrap/ListGroup";
import Media from "react-bootstrap/Media";

var portfolioTile = props => {
  return (
    <ListGroup.Item>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={props.info.img}
          alt=""
        />
        <Media.Body className="project">
          <h5>{props.info.project}</h5>
          <p>{props.info.description}</p>
        </Media.Body>
        <Media.Body className="links">
          <Row>
            <a href={props.info.siteLink}>Site Link</a>
          </Row>
          <Row>
            <a href={props.info.repoLink}>Repo Link</a>
          </Row>
        </Media.Body>
      </Media>
    </ListGroup.Item>
    // <Card className="portfolio-card" style={{ width: "27rem" }}>
    //   <Row>
    //     <Col md="4">
    //       <Card.Img
    //         variant="top"
    //         className="svg-portfolio"
    //         src={props.info.img}
    //       />
    //     </Col>
    //     <Col md="8">
    //       <Card.Body>
    //         <Card.Title>{props.info.project}</Card.Title>
    //         <Card.Text>{props.info.description}</Card.Text>
    //       </Card.Body>
    //       <Card.Body>
    //         <Card.Link href={props.info.siteLink}>Site Link</Card.Link>
    //         <Card.Link href={props.info.repoLink}>Repo Link</Card.Link>
    //       </Card.Body>
    //     </Col>
    //   </Row>
    // </Card>
  );
};

export default portfolioTile;
