import React, { Component, Fragment } from 'react';
import Material from '../components/Material';
import materials from '../data/materials';

export default class OurMaterials extends Component {
    render() {
        return (
            <Fragment>
                <h2>Our Materials</h2>
                <p>The materials we have available include:</p>
                {Object.values(materials).map((el, index) => <Material key={index} material={el.category} image={el.image} variants={el.variants} description={el.description} />)}
            </Fragment>
        )
    }
}
