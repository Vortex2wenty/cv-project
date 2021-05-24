import React, { Component } from 'react';
import Name from './Name';

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { hidden, onSubmit, onChange, formValues, editForm } = this.props;

    return (
      <form onSubmit={onSubmit} hidden={hidden} id="educationForm">
        <Name
          label="School Name"
          id="education"
          placeholder="Harvard University"
          onChange={onChange}
          value={formValues.educationName}
        />
        <label>
          Title of Study
          <input
            type="text"
            id="educationStudyTitle"
            placeholder="Quantum Physics"
            onChange={onChange}
            value={formValues.educationStudyTitle}
            required
          />
        </label>
        <label>
          Date of Study
          <input type="date" onChange={onChange} value={formValues.educationStudyDate} id="educationStudyDate" required />
        </label>
        <button type="button" onClick={editForm}>Edit</button>
        <input type="submit" value="Add" required />
      </form>
    );
  }
}

export default EducationForm;
