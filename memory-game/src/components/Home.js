import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
    return(
        <div className="container-fluid d-flex flex-column align-items-center mt-5">
            <div className="text-center my-5">
                <h1 className="text-warning mt-5">Memory game</h1>
                <h4 className="text-light mt-2 mb-5">Press the button to start</h4>
            </div>
            <Link type="button" className="btn btn-warning p-4 w-50 text-center text-dark fw-bold mt-5" to="/game">START</Link>
        </div>
    )
}

export default Home