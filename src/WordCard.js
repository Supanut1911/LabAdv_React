import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharCard from './CharCard';

import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}


export default class WordCard extends Component {


    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentWillMount() {
        let data = prepareStateFromWord(this.props.value);
        this.setState({
            word: data.word,
            chars: data.chars,
            attempt: data.attempt,
            guess: data.guess,
            completed: data.completed,
        })

    }

    activationHandler = (c) => {
        let guess = [...this.state.guess, c]
        this.setState({ guess })
        if (guess.length == this.state.chars.length) {
            if (guess.join('').toString() == this.state.word) {
                this.setState({ guess: [], completed: true })
            } else {
                this.setState({ guess: [], attempt: this.state.attempt + 1 })
            }
        }
    }

    /*activationHandler = c => { console.log(`${c} has been activated.`)  }*/

    render() {
        console.log(this.state);
        return (
            <div className = 'bg'>
                <div className = 'font'><center>Find Your Name</center></div>
                 <div ><center>
                    {
                        this.state.chars.map((c, i) => <CharCard value={c} key={i} attempt={this.state.attempt}
                            activationHandler={this.activationHandler} />)
                    }</center>
                </div>
            </div>
        );
    }
}