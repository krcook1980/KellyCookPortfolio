import React from 'react';
import {Link} from 'react-router-dom'

function P2 () {
    return(
        <div className="P2 rounded">
          <h3><Link className="text-white px-2" to="/About"> More about me.</Link></h3>
        </div>
        )
}

export default P2;