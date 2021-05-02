import React from 'react'
import {Route} from 'react-router-dom'
import Game from './Game'
import Home from './Home'

const App = () => {
    return (
        <div>
            <section>
                <Route path="/" exact component={Home} />
                <Route path="/game" exact component={Game} />
            </section>
        </div>
    )
}


export default App