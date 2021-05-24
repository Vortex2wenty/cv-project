import React, { Component } from 'react';

class PersonalPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let { values } = this.props;
    return ( 
      <div id='personalPortfolio'>
        <p>Name: {values.name}</p>
        <p>Email: {values.email}</p>
        <p>Phone: {values.phone}</p>
      </div>
    );
  }
}
 
export default PersonalPortfolio;