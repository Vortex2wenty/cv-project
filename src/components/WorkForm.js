import React, { Component } from 'react';
import Name from './Name';

class WorkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { hidden, onSubmit, onChange, formValues, editForm } = this.props;

    return (
      <form onSubmit={onSubmit} hidden={hidden} id="workForm">
        <Name
          onChange={onChange}
          value={formValues.workName}
          label="Company Name"
          id="work"
          placeholder="Facebook"
        />
        <label>
          Position Title
          <input
            onChange={onChange}
            value={formValues.workPositionTitle}
            type="text"
            id="workPositionTitle"
            placeholder="Receptionist"
            required
          />
        </label>
        <label>
          Main Tasks of Job (1-2 sentences)
          <textarea
            onChange={onChange}
            value={formValues.workMainTasks}
            id="workMainTasks"
            placeholder="Main Tasks here (1-2 sentences)"
            required
          ></textarea>
        </label>
        <label>
          Job Start Date
          <input
            onChange={onChange}
            value={formValues.workStartDate}
            type="date"
            id="workStartDate"
            required
          />
        </label>
        <label>
          Job End Date
          <input
            onChange={onChange}
            value={formValues.workEndDate}
            type="date"
            id="workEndDate"
            required
          />
        </label>
        <button type="button" onClick={editForm}>
          Edit
        </button>
        <input type="submit" value="Add" required />
      </form>
    );
  }
}

export default WorkForm;
