import React, { Component, Fragment } from 'react';
import Material from '../components/Material';
import materials from '../data/materials';


let initialState = { 
  data: {}, 
  materials: {},
 };
Object.values(materials).map(el => initialState.materials[el.category] = '');

export default class OurMaterials extends Component {


  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
    this.fetchPostData = this.fetchPostData.bind(this);
    this.rearrangeDataByCategory = this.rearrangeDataByCategory.bind(this);
  }

  componentDidMount() {
      this.fetchPostData();
    }

  fetchPostData() {
      fetch(`http://localhost/headless-cms/wp-json/wp/v2/materials?per_page=100`)
      .then(response => response.json())
      .then(myJSON => {
        let objLength = Object.keys(myJSON).length;
        let newState = this.state;
        // for (let i = 0; i < objLength; i++) {
        //   let objKey = Object.values(myJSON)[i].title.rendered;
        //   newState.data[objKey] = {};
        //   newState.data[objKey].material = Object.values(myJSON)[i].title.rendered;
        //   newState.data[objKey].description = Object.values(myJSON)[i].content.rendered;
        //   newState.data[objKey].image = Object.values(myJSON)[i]['featured_image_url'];
        //   newState.data[objKey]['material_category'] = Object.values(myJSON)[i]['material_category'];
        // }
        
        // Arrange data according to category
        let arrayOfCategories = [];
        Object.values(myJSON).forEach((el) => arrayOfCategories.push(el['material_category']));
        let uniqueCategories = [...new Set(arrayOfCategories)]
        uniqueCategories.forEach(el => {
          newState.data[el] = {};
        });

        // Populate each category with relevant materials
        for (let i = 0; i < objLength; i++) {
          let objKey = Object.values(myJSON)[i]['material_category'];
          let objTitle = Object.values(myJSON)[i].title.rendered;
          newState.data[objKey][objTitle] = {
            material: Object.values(myJSON)[i].title.rendered,
            description: Object.values(myJSON)[i].content.rendered,
            image: Object.values(myJSON)[i]['featured_image_url'],
          }
        }
        
        this.setState(newState);          
          console.log(this.state);
      })
    }

    rearrangeDataByCategory() {
      if (this.state.data) {
        console.log('hi');
      }
    }

  handleClick(e) {
    let category = e.currentTarget.getAttribute('category');
    let material = e.currentTarget.id;
    const state = this.state;
    state.materials[category] = material;
    this.setState(state);
  }

  
  
  render() {
    if (this.state.data) {
        return (
            <Fragment>
                <h2>Our Materials</h2>
                <p>The materials we have available include:</p>
                {/* <div>{this.rearrangeDataByCategory()}</div> */}
                {Object.values(materials).map((el, index) => <Material key={index} state={this.state.materials[el.category]} material={el.category} image={el.variants} defaultImage={el.image} variants={Object.keys(el.variants)} description={el.description} handleClick={this.handleClick} />)}
            </Fragment>
        )
      }
    }
}
