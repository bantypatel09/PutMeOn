import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Sky from "react-sky";
import links from "../other/links.json";
import {NavLink} from "react-router-dom";


const resultsPage = () => {

        const objects = [
            {name: 'Drake', album: 'Scorpion', image: 'https://pyxis.nymag.com/v1/imgs/cb9/0a6/314d3251d7f439ffd52b7e805ed1c8a11a-30-drake-new.rsquare.w1200.jpg'},
            {name: 'Eminem', album: 'Kamikaze', image: 'https://www.rollingstone.com/wp-content/uploads/2018/06/eminem-track-by-track-revival-new-57b63db3-3bb9-4b7e-b3a4-7f0e48714a0e.jpg'},
            {name: 'Kanye', album: 'Graduation', image: 'https://media.gq.com/photos/5ad93798ceb93861adb912d8/16:9/w_2560%2Cc_limit/kanye-west-0814-GQ-FEKW01.01.jpg'}
        ];

    return(
        <div>
            <Sky
          images={links.images}
          how={
            25
          } /* Pass the number of images Sky will render chosing randomly */
          time={25} /* time of animation */
          size={"100px"} /* size of the rendered images */
        />
            <Container className="container-lg pt-4">
                <Jumbotron className="text-center">
                    <h1>
                        Linked Artists
                    </h1>
                </Jumbotron>
            </Container>
            <div>
                <Container>
                    <Row>
                        <Col>
                            {objects.map(item => (
                                <Container justify-content="space-around">
                                    <img class = "image" src = {item.image} alt=""/>
                                </Container>
                            ))}
                        </Col>
                        <Col> 
                            {objects.map(item => (
                                <Jumbotron className = "text-center" justify-content="space-around">
                                    <h3>Artist: {item.name}</h3>
                                    <h3>Album: {item.album}</h3>
                                </Jumbotron>
                                
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <div className="text-center">
                <Col>
                    <Container justify-content="space-after">
                        <NavLink className='nav-link' to='/'>
                            <Button className= "butt" type="submit" variant="primary">
                                <h3>Home</h3>
                            </Button>{""}
                        </NavLink>
                    </Container>
                </Col>
            </div>

        </div>

    )
}


export default resultsPage;
