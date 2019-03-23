import React, { Component } from 'react';
import Printer from '../components/Printer';
import PrinterModal from '../components/PrinterModal';
import TagCloud from '../components/TagCloud';
import techKey from '../data/tech-key';

// Define initial state 
const initialState = {
  data: {},
  tech: {},
  definition: "",
};

export default class OurTechnologies extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleClick = this.handleClick.bind(this);
    this.handlePrinterClick = this.handlePrinterClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.createTags = this.createTags.bind(this);
    this.populatePageAfterFetch = this.populatePageAfterFetch.bind(this);
    this.filterContent = this.filterContent.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.fetchPostData = this.fetchPostData.bind(this);
  }

  componentDidMount() {
    this.fetchPostData();
  }

  fetchPostData() {
    fetch(`http://localhost/headless-cms/wp-json/wp/v2/printers?per_page=100`)
      .then(response => response.json())
      .then(myJSON => {
        let objLength = Object.keys(myJSON).length;
        for (let i = 0; i < objLength; i++) {
          let objKey = Object.values(myJSON)[i].title.rendered;
          let newState = this.state;
          newState.data[objKey] = {};
          newState.data[objKey].name = Object.values(myJSON)[i].title.rendered;
          newState.data[objKey].description = Object.values(myJSON)[i].content.rendered;
          newState.data[objKey].image = Object.values(myJSON)[i]['featured_image_url'];
          newState.data[objKey].technology = Object.values(myJSON)[i]['printer_category'];
          this.setState(newState);
        }
      });
  }

  handlePrinterClick(e) {
    const index = e.currentTarget.getAttribute('index');
    const newState = this.state;
    newState.isModalOpen = !newState.isModalOpen;
    newState.modalNum = Number(index);
    this.setState(newState);
  }

  handleClick(e) {
    if (this.state.data) {
      let newState = this.state;
      const key = e.target.id; 
      newState.tech[key] = !newState.tech[key];      
      this.setState(newState);
    }
  }

  resetFilter() {
    const state = this.state;
    Object.keys(state.tech).map((el) => state.tech[el] = false);
    this.setState(state);
  }

  handleMouseEnter(e) {
    this.setState({ definition: techKey[e.target.id] })
  }

  handleMouseLeave(e) {
    this.setState({ definition: "" })
  }

  createTags() {
    if (this.state.data) {
      
      // First, create an array of each unique technology category, uniqueTech
      let techArray = [];
      let techLength = Object.keys(this.state.data).length;
      
      Object.values(this.state.data).forEach(el => techArray.push(el.technology));
      
      let uniqueTech = [...new Set(techArray)];

      // Lastly, return a tag cloud with each of the relevant technologies
      return (
      <TagCloud array={uniqueTech} handleClick={this.handleClick} handleMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave} definition={this.state.definition} selected={this.state.tech} resetFilter={this.resetFilter} />   
      )
    }
  }

  filterContent() {
    if (this.state.data) {
      const trueStates = Object.keys(this.state.tech).filter(el => this.state.tech[el]);
      const filterExp = new RegExp(trueStates.join("|"));
      const filteredArray = Object.values(this.state.data).filter((el, i) => el["technology"].match(filterExp));
      return Object.values(filteredArray).map((printer, index) => this.populatePageAfterFetch(printer, index));
    }
  }

  populatePageAfterFetch(printer, index) {
    if (this.state.data) {

      return (
        <Printer 
        key={index} 
        index={index} 
        printer={printer.name} 
        image={printer.image} 
        placeholder={printer.placeholder} 
        technology={printer.technology} 
        description={printer.description} />
        )
      }
    }

  render() {
    if (!this.state.data) {
      return <div>Fetching data...</div>
    } else {
      return (
      <>
        <h2>Our Technologies</h2>
        <p>The 3D printing equipment we have available to us includes:</p>
        <div>{this.createTags()}</div>
        <div className="flex-cards">{this.filterContent()}</div>
      </>
      )
    }
  }
}