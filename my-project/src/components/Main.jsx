import React from 'react';
import {Link } from 'react-router-dom';

const Main=()=>{
    return(
        <div>
            <Link to="/tasks">Your Tasks</Link>
            <br></br>
            <Link to="/projects">Your Projects</Link>
        </div>
    )
}

export default Main;