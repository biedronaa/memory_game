import React from 'react'
import {Route} from 'react-router-dom'
import Game from './Game'
import Home from './Home'
import Footer from'./Footer'

const App = () => {
    return (
        <div>
            <section>
                <Route path="/" exact component={Home} />
                <Route path="/game" exact component={Game} />
            </section>
            <Footer />
        </div>
    )
}


export default App