import React from "react";
import Sky from "react-sky";
import links from "../other/links.json";
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'

const homePage = () => {
  return (
    <div>
      <Sky
        images={links.images}
        how={25} /* Pass the number of images Sky will render chosing randomly */
        time={25} /* time of animation */
        size={"100px"} /* size of the rendered images */
      />
      <Container className="container-lg pt-5">
        <Jumbotron className="text-center">
            <h1>
                Welcome to Put Me On!
            </h1>
            <p> 
            At Put Me On, our algorithm determines 
            the optimal route between the artists using song genres and collaborators and finds a path 
            from one artist to another based on the discogrophy of other artists in between. It's a great 
            way to be introduced to new artists and genres! Simply put in the two artists you would like
             to bridge and let us take care of the rest!
            </p>
            <div>
                
            </div>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default homePage;
