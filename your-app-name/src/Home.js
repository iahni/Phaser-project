import React from "react";
import{Link} from 'react-router-dom';

function Home () {
    return (
        <div>
            <h2> Home </h2>
            <Link to = "/chat"> Go to Chat </Link>
        </div>
    );
}

export default Home;
