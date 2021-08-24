import React, { Component } from 'react';

export default class ClassComponentProps extends Component {

    constructor(props) {
        super(props);
        // 'this.state' to create the initial state of this component
        // example - this.state = { simpleMessage: "Welcome user!!!" };
        this.state = { fruit: ["peaches", "lychee", "apples"], newFruit: ""};

        // MISSED THIS NEXT LINE PAY ATTENTION
        this.addFruit = this.addFruit.bind(this);
    }
    


    // The first method should update the newFruit property in the state when the value of the input changes. Listening for e...

    // my incorrect answer, to study:
    // updateNewFruit = (e) => {
    //     console.log("updating the newFruit property in the state when the value of the input changes.");
    //     this.setState(
    //         // never used (e), but the correct answer does. Study
    //         { newFruit: this.state.newFruit }
    //     );
    // };

    // correct answer, to compare
    changeHandler(event) {
        this.setState({ newFruit: event.target.value });
        }

    // The second method should add the value of newFruit to the array of fruits and reset the value of the input field to be empty.

    // MY INCORRECT ANSWER BELOW
    // addTheNewFruit = () => {
    //     console.log("adding the value of newFruit to the array of fruits");
    //     this.setState({ 
    //         fruit: this.state.fruit.push(this.state.newFruit),
    //         newFruit: ""
    //     });
    
        // correct answer, to compare:
            addFruit(event) {
                event.preventDefault();
                this.setState({
                    fruitBowl: [...this.state.fruitBowl, this.state.newFruit],
                    newFruit: "",
                });
            }

    

    render() {
        console.log("render called");

        return(
            <div className = "main">
                <div className = "mainDiv">
                
                {/* <form onSubmit={this.addTheNewFruit}> */}
                <form onSubmit={this.addFruit}>

                    <h3>Enter a new fruit</h3>
                    <div class="field">
                        <label for="fruitName">Fruit:</label>
                        <input type="text" id="fruitName" name="fruitName" value={this.state.newFruit} onChange = { (e) => this.changeHandler(e) }/>

                        <button type="submit">Fruit Me!</button>
                    </div>
                </form>

                <FruitBowl fruits={ this.state.fruitBowl } />
                    
                </div>

            </div>
        )
    };
};

class FruitBowl extends Component {
    render () {
        return (
        <div>
            { this.props.fruits.map((fruit) => {
                return <Fruit passingFruit={fruit} />
            })}
        </div>
        );
    }
}

const Fruit = (props) => {
    return (
        <div>
            <h3> {props.passingFruit} </h3>
        </div>
    );
};