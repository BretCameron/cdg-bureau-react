import React, { Component, Fragment } from 'react';
import Material from '../components/Material';
import materials from '../data/materials';


let initialState = {};
Object.values(materials).map(el => initialState[el.category] = el.variants[0]);

// let imageState = categories.map;

export default class OurMaterials extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let category = e.currentTarget.getAttribute('category');
    let material = e.currentTarget.id;
    const state = this.state;
    state[category] = material;
    this.setState(state);
  }
  
  render() {
        return (
            <Fragment>
                <h2>Our Materials</h2>
                <p>The materials we have available include:</p>
                {Object.values(materials).map((el, index) => <Material key={index} state={this.state[el.category]} material={el.category} image={el.image} variants={el.variants} description={el.description} handleClick={this.handleClick} />)}
            </Fragment>
        )
    }
}
