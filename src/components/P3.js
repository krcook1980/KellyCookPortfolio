import React from 'react';
import {Link} from 'react-router-dom'

function P3 () {
    return(
        <div className="P3 rounded">
           <h2><Link className="text-white px-2" to="/Portfolio"> Check out some of my work!</Link></h2>
           <p className="d-none d-md-block">My portfolio has a small selection of websites and applications for you to view.</p>
        </div>
        )
}

export default P3;