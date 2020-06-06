import React, { Component } from "react";
import Sky from "react-sky";
import links from "../other/links.json";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "./dropdown.tsx";

const data = [
  { value: "Harry Potter and the Sorcerers Stone" },
  { value: "Harry Potter and the Prisoner of Azkaban" },
  { value: "Harry Potter and the Goblet of Fire" },
  { value: "Harry Potter and the Deathly Hallows" },
];

function selectedItem(val) {
  console.log(val);
}

export default class HomePage extends Component {
  
  render() {
    return (
      <div>
        <Sky
          images={links.images}
          how={
            25
          } /* Pass the number of images Sky will render chosing randomly */
          time={25} /* time of animation */
          size={"100px"} /* size of the rendered images */
        />
        <Container className="container-lg pt-5">
          <Jumbotron className="text-center">
            <h1>Welcome to Put Me On!</h1>
            <p>
              At Put Me On, our algorithm determines the optimal route between
              the artists using song genres and collaborators and finds a path
              from one artist to another based on the discogrophy of other
              artists in between. It's a great way to be introduced to new
              artists and genres! Simply put in the two artists you would like
              to bridge and let us take care of the rest!
            </p>
            <div>
              <Form.Row controlId="Artist-Enter">
                <Col>
                  <Dropdown onChange={selectedItem} temp="Enter Source Artist" options={data} />
                  <Form.Text className="text-muted">
                    This is the starting point of your playlist/path.
                  </Form.Text>
                </Col>
                <Col>
                  <Dropdown onChange={selectedItem} temp="Enter Destination Artist" options={data} />
                  <Form.Text className="text-muted">
                    This is the ending point of your playlist/path.
                  </Form.Text>
                </Col>
                <Col xs="auto">
                  <Button type="submit" variant="primary">
                    Search!
                  </Button>{" "}
                </Col>
              </Form.Row>
            </div>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
