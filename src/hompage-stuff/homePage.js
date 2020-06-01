import React from 'react'
import Sky from 'react-sky'
import links from '../other/links.json'

const homePage = () => {
    return(
        <div>
            <Sky 
            images={
                links.images
            }
            how={100} /* Pass the number of images Sky will render chosing randomly */
            time={100} /* time of animation */
            size={'100px'} /* size of the rendered images */
            />
      </div>
    );
}

export default homePage; 