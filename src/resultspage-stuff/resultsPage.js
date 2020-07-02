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
            {name: 'Kanye', album: 'Graduation', image: 'https://media.gq.com/photos/5ad93798ceb93861adb912d8/16:9/w_2560%2Cc_limit/kanye-west-0814-GQ-FEKW01.01.jpg'},
            {name: 'Post Malone', album: 'Beerbongs & Bentleys', image: 'https://www.gstatic.com/tv/thumb/persons/929026/929026_v9_bb.jpg'},
            {name: 'Tupac Shakur', album: 'All Eyez On Me', image: 'data:image/jpeg;base64,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'}
        ];

    return(
        <div>
            {/*
            <Sky
                images={links.images}
                how={
                    25
                } 
                time={25}                 
                size={"100px"} 
            />
            */}
            
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
                            {objects.slice(0,4).map(item => (
                                <Container justify-content="space-around">
                                    <img class = "image" src = {item.image} alt=""/>
                                </Container>
                            ))}
                        </Col>
                        <Col> 
                            {objects.slice(0,4).map(item => (
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
