import React from 'react'

class Card extends React.Component {
    handleClick = (event) => {
        event.target.classList.remove("text-dark")
        event.target.classList.add("text-warning")
    }

    render(){
        return(<div className="col-3 bg-dark text-dark" onClick={this.handleClick}><i className={this.props.fromParent} ></i></div>)
    }
}

export default Card