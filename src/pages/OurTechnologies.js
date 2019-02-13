import React, { Component } from 'react';
import Printer from '../components/Printer';
import TagCloud from '../components/TagCloud';
import printers from '../data/printers';
import techKey from '../data/tech-key';

// To do: colour tags based on state, not click

// Define technologies as an array
const technologiesArray = [...new Set(Object.values(printers).map((el, index) => el.technology))];

// Define initial state 
const initialState = { tech: {}, definition: "" };

// Add technologies to initial state (starting as false)
technologiesArray.forEach((el) => initialState.tech[el] = false);

export default class OurTechnologies extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.populatePage = this.populatePage.bind(this);
        this.filterContent = this.filterContent.bind(this);
    }

    handleClick(e) {
        const key = e.target.id, newState = this.state;
        newState.tech[key] = !this.state.tech[key];

        this.setState(newState);

        // if (!e.target.classList.contains('tag-select')) {
        //     e.target.classList.add('tag-select');
        // } else {
        //     e.target.classList.remove('tag-select');
        // }
    }

    handleMouseEnter(e) {
        this.setState({ definition: techKey[e.target.id] })
    }

    handleMouseLeave(e) {
        this.setState({ definition: "" })
    }

    filterContent(array) {
        //Work out what technologies are "true"
        //Create RegExp based on the true ones

        const trueStates = Object.keys(this.state.tech).filter(el => this.state.tech[el]);

        const filterExp = new RegExp(trueStates.join("|"));//new RegExp();

        console.log(trueStates);

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
                <TagCloud array={technologiesArray} handleClick={this.handleClick} handleMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave} definition={this.state.definition} selected={this.state.tech} />
                {/* Generate Printer Cards from printers.js */}
                <div class="flex-cards">
                    {this.filterContent(printers)}
                </div>
            </div>
        )
    }
}

