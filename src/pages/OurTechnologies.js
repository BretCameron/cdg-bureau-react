import React, { Component } from 'react';
import Printer from '../components/Printer';
import printers from '../data/printers';
import TagCloud from '../components/TagCloud';

// Define technologies as an array
const technologiesArray = [...new Set(Object.values(printers).map((el, index) => el.technology))];

// Define initial state (every technology is 'off')
const initialState = {};
technologiesArray.forEach((el) => initialState[el] = false);

export default class OurTechnologies extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleClick = this.handleClick.bind(this);
        this.populatePage = this.populatePage.bind(this);
        this.filterContent = this.filterContent.bind(this);
    }

    handleClick(e) {
        const newState = {}, key = e.target.id;
        newState[key] = !this.state[key];
        this.setState(newState);
    }

    filterContent(array) {
        //Work out what technologies are "true"
        //Create RegExp based on the true ones

        const trueStates = Object.keys(this.state).filter(el => this.state[el]);

        const filterExp = new RegExp(trueStates.join("|"));//new RegExp();

        console.log(filterExp);

        const filteredArray = Object.values(array).filter((el, i) => el["technology"].match(filterExp));
        // console.log(filteredArray);
        return Object.values(filteredArray).map((printer, index) => this.populatePage(printer, index));
    }

    populatePage(printer, index) {
        return (
            <Printer key={index} printer={printer.name} image={printer.image} technology={printer.technology} description={printer.description} />
        )
    }

    render() {
        return (
            <div>
                <h2>Our Technologies</h2>
                <p>The 3D printing equipment we have available to us includes:</p>
                <TagCloud array={technologiesArray} handleClick={this.handleClick} />
                {/* Generate Printer Cards from printers.js */}
                <div class="flex-cards">
                    {this.filterContent(printers)}
                </div>
            </div>
        )
    }
}

