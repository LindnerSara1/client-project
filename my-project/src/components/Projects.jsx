import React from 'react';
import { Link } from "react-router-dom";

const Projects=()=>{
    return(
        <>
            <div>projects</div>
            <Link to ="/projects/newProject">add new project</Link>
        </>
    )
}

export default Projects;