import React, { Component } from 'react';

class WorkPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let { values } = this.props;

    return ( 
      <div id='workPortfolio'>
        <p>Company Name: {values.companyName}</p>
        <p>Position Title: {values.positionTitle}</p>
        <p>Main Tasks: {values.mainTasks}</p>
        <p>Work Start Date: {values.startDate}</p>
        <p>Work End Date: {values.endDate}</p>
      </div>
    );
  }
}
 
export default WorkPortfolio;