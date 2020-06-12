import React, { Component } from 'react';


export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: '',
            thingToDisplay: '',
            isVisible: false,
        }
    }
    getNewData() {
        fetch('https://randomuser.me/api/')
            .then(res => res.json())
            .then(responseData => {
                const result = responseData.results[0];
                this.setState({
                    name: result.name.first + ' ' + result.name.last,
                    img: result.picture.large,
                    location: result.location.city,
                    email: result.email,
                    age: result.dob.age,
                    phone: result.phone,
                    isVisible: true,
                })
                console.log(this.state);
            }
            )
    }




    handleClick = () => {
        this.getNewData();
    }

    render() {
        let innerClass = 'Card'
        if (this.state.isVisible) {
            innerClass += ' visible'
        }

        return (

            <div className="container">
                <div className={innerClass}>
                    <h2>{this.state.name}</h2>
                    <div className="image">
                        <img src={this.state.img} />
                    </div>
                    <div className="Content">
                        {this.state[this.state.isVisible]}
                        <h3>{this.state.location}</h3>
                        <p> Age: {this.state.age} </p>
                        <p>My Email is: { this.state.email }</p>
                        <p>My Phone Number is: { this.state.phone }</p>
                        <button onClick={this.handleClick}>NewUser</button>
                    </div>
                </div>
            </div>
        )
    }

}

