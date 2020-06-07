import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const resultsPage = () => {
    
        const artists = ['Drake', 'Eminem', 'Kanye'];
    
    return(
        <div>
        <Jumbotron className="text-center">
            <h3>
                Linked Artists
            </h3>
        </Jumbotron>
        
        <div>
            {artists.map(artist => (
            <Jumbotron>
                <p>{artist}</p>
            </Jumbotron>))}
        </div>
        </div>
    );

}

export default resultsPage; 