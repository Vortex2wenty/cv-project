import React, { Component } from 'react';
import Name from './Name';

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let { hidden, onSubmit, onChange, formValues, editForm } = this.props;

    return ( 
      <form onSubmit={onSubmit} hidden={hidden} id='personalForm'>
        <Name label='Name' id='personal' placeholder='John Doe' onChange={onChange} value={formValues.personalName} />
        <label>Email
          <input onChange={onChange} value={formValues.personalEmail} type='email' id='personalEmail' placeholder='john@doe.com' required />
        </label>
        <label>Phone
          <input onChange={onChange} value={formValues.personalPhone} type='tel' id='personalPhone' placeholder='888-888-8888' required />
        </label>
        <button type="button" onClick={editForm}>Edit</button>
        <input type='submit' value='Add' required />
      </form>
    );
  }
}
 
export default PersonalForm;