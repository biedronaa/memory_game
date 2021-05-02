import React from 'react'
import Card from './Card'

class Game extends React.Component {
    icons = [
        {
            id: 1,
            link: 'fas fa-tram fa-3x'
        },
        {
            id: 2,
            link: 'fas fa-helicopter fa-3x'
        },
        {
            id: 3,
            link: 'fas fa-plane fa-3x'
        },
        {
            id: 4,
            link: 'fas fa-caravan fa-3x'
        },
        {
            id: 5,
            link: 'fas fa-shuttle-van fa-3x'
        },
        {
            id: 6,
            link: 'fas fa-car-side fa-3x'
        }
    ]


    render(){
        return(
            <div class="container-fluid w-100">
                <div class="row justify-content-center">
                    <div class="col-3">
                        <Card fromParent = {this.icons[0].link} />
                    </div>
                    <div class="col-3">
                        <Card fromParent = {this.icons[1].link}/>
                    </div>
                    <div class="col-3">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-3">
                        <Card fromParent = {this.icons[3].link}/>
                    </div>
                    <div class="col-3">
                        <Card fromParent = {this.icons[4].link}/>
                    </div>
                    <div class="col-3">
                        <Card fromParent = {this.icons[5].link}/>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-3">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                    <div class="col-3">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                    <div class="col-3">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-3">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                    <div class="col-3">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                    <div class="col-3">
                        <Card fromParent = {this.icons[2].link}/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Game;