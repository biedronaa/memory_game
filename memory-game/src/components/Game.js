import React from 'react'
import Card from './Card'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [ ]
        }
    } 

    icons = [ 'fas fa-tram fa-3x', 'fas fa-helicopter fa-3x', 'fas fa-plane fa-3x', 'fas fa-caravan fa-3x', 'fas fa-shuttle-van fa-3x', 'fas fa-car-side fa-3x' ]

    componentDidMount(){
        let tmp = []; //array of numbers to set random cards id

        let numberGenerator = function(arr) {
            if (arr.length >= 12) return;
            let newNumber = Math.floor(Math.random() * 12 + 1);
            if (arr.indexOf(newNumber) < 0) {
                arr.push(newNumber);
            }
            numberGenerator(arr);
        };

        numberGenerator(tmp);

        for(let i = 0; i< tmp.length; i++){
            tmp[i]-=1
            if(tmp[i]>5){
                tmp[i] = tmp[i]-6
            }
        }

        this.setState({
        cards: tmp
        })
    }

    render(){
        const {cards} = this.state;
        console.log(this.state.cards)

        return(
            <div className="container-fluid">
                <div className=" row justify-content-center">
                    <a type="button" className="col-6 btn btn-warning p-4 text-center text-dark fw-bold my-3 align-self-center" href="/game">Reset</a>
                </div>
                <div className="row justify-content-center">
                    <Card fromParent = {this.icons[cards[0]]}/>
                    <Card fromParent = {this.icons[cards[1]]}/>
                    <Card fromParent = {this.icons[cards[2]]}/>
                </div>
                <div className="row justify-content-center">
                    <Card fromParent = {this.icons[cards[3]]}/>
                    <Card fromParent = {this.icons[cards[4]]}/>
                    <Card fromParent = {this.icons[cards[5]]}/>
                </div>
                <div class="row justify-content-center">
                    <Card fromParent = {this.icons[cards[6]]}/>
                    <Card fromParent = {this.icons[cards[7]]}/>
                    <Card fromParent = {this.icons[cards[8]]}/>
                </div>
                <div className="row justify-content-center">
                    <Card fromParent = {this.icons[cards[9]]}/>
                    <Card fromParent = {this.icons[cards[10]]}/>
                    <Card fromParent = {this.icons[cards[11]]}/>
                </div>
                
            </div>
        )
    }
}

export default Game;