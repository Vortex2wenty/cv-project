import React, { Component } from 'react';

class EducationPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let { values } = this.props;
    return ( 
      <div id='educationPortfolio'>
        <p>School Name: {values.schoolName}</p>
        <p>Title of Study: {values.titleOfStudy}</p>
        <p>Date of Study: {values.dateOfStudy}</p>
      </div>
    );
  }
}
 
export default EducationPortfolio;