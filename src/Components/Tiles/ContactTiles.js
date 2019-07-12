import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./tiles.css";

var portfolioTile = props => {
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>
        Email: <a href={"mailto:" + props.info.email}>{props.info.email}</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href={props.info.github}>Github</a>
      </ListGroup.Item>
      <ListGroup.Item>
        <a href={props.info.linkedin}>LinkedIn</a>
      </ListGroup.Item>{" "}
      <ListGroup.Item>
        <a href={props.info.resume}>Resume</a>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default portfolioTile;
