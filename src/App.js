import './styles/App.css';
import PersonalForm from './components/PersonalForm';
import EducationForm from './components/EducationForm';
import WorkForm from './components/WorkForm';
import PersonalPortfolio from './components/PersonalPortfolio';
import WorkPortfolio from './components/WorkPortfolio';
import EducationPortfolio from './components/EducationPortfolio';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'personal',
      formsHidden: { personal: false, work: true, education: true },
      portfolios: { personal: {}, work: {}, education: {} },
      formValues: { personal: {}, work: {}, education: {} },
    };

    this.switchForm = this.switchForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.editForm = this.editForm.bind(this);
  }

  switchForm(e) {
    this.setState((state) => {
      for (const property in state.formsHidden) {
        state.formsHidden[property] = true;
      }
      return {
        form: e.target.getAttribute('id'),
        formsHidden: {
          ...state.formsHidden,
          [e.target.getAttribute('id')]: false,
        },
      };
    });
  }

  handleInput(e) {
    this.setState((state) => ({
      formValues: {
        ...state.formValues,
        [e.target.parentElement.parentElement
          .getAttribute('id')
          .replace('Form', '')]: {
          ...state.formValues[
            e.target.parentElement.parentElement
              .getAttribute('id')
              .replace('Form', '')
          ],
          [e.target.getAttribute('id')]: e.target.value,
        },
      },
    }));
    console.log(this.state);
  }

  editForm(e) {
    this.setState((state) => {
      if (e.target.parentElement.getAttribute('id') === 'personalForm') {
        return {
          formValues: {
            ...state.formValues,
            personal: {
              personalName: state.portfolios.personal.name,
              personalEmail: state.portfolios.personal.email,
              personalPhone: state.portfolios.personal.phone,
            }
          }
        };
      } else if (e.target.parentElement.getAttribute('id') === 'educationForm') {
        return {
          formValues: {
            ...state.formValues,
            education: {
              educationName: state.portfolios.education.schoolName,
              educationStudyTitle: state.portfolios.education.titleOfStudy,
              educationStudyDate: state.portfolios.education.dateOfStudy,
            }
          }
        };
      } else if (e.target.parentElement.getAttribute('id') === 'workForm') {
        return {
          formValues: {
            ...state.formValues,
            work: {
              workName: state.portfolios.work.companyName,
              workPositionTitle: state.portfolios.work.positionTitle,
              workMainTasks: state.portfolios.work.mainTasks,
              workStartDate: state.portfolios.work.startDate,
              workEndDate: state.portfolios.work.endDate,
            }
          }
        };
      }
    });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(e);
    this.setState((state) => {
      let formId = e.target.getAttribute('id');
      if (formId === 'personalForm') {
        return {
          portfolios: {
            ...state.portfolios,
            personal: {
              name: state.formValues.personal.personalName,
              email: state.formValues.personal.personalEmail,
              phone: state.formValues.personal.personalPhone,
            },
          },
        };
      } else if (formId === 'educationForm') {
        return {
          portfolios: {
            ...state.portfolios,
            education: {
              schoolName: state.formValues.education.educationName,
              titleOfStudy: state.formValues.education.educationStudyTitle,
              dateOfStudy: state.formValues.education.educationStudyDate,
            },
          },
        };
      } else if (formId === 'workForm') {
        return {
          portfolios: {
            ...state.portfolios,
            work: {
              companyName: state.formValues.work.workName,
              positionTitle: state.formValues.work.workPositionTitle,
              mainTasks: state.formValues.work.workMainTasks,
              startDate: state.formValues.work.workStartDate,
              endDate: state.formValues.work.workEndDate,
            },
          },
        };
      }
    });
    console.log(this.state);
    this.setState(() => ({
      formValues: {
        personal: {

        },
        work: {

        },
        education: {
          // TODO: Make all the values blank (empty string)
        },
      }
    }));
  }

  render() {
    let { formsHidden, portfolios, formValues } = this.state;

    return (
      <div id="root">
        <button id="personal" onClick={this.switchForm}>
          Personal
        </button>
        <button id="education" onClick={this.switchForm}>
          Education
        </button>
        <button id="work" onClick={this.switchForm}>
          Work
        </button>
        <PersonalForm
          onChange={this.handleInput}
          onSubmit={this.submitForm}
          hidden={formsHidden.personal}
          formValues={formValues.personal}
          editForm={this.editForm}
        />
        <EducationForm
          onChange={this.handleInput}
          onSubmit={this.submitForm}
          hidden={formsHidden.education}
          formValues={formValues.education}
          editForm={this.editForm}
        />
        <WorkForm
          onChange={this.handleInput}
          onSubmit={this.submitForm}
          hidden={formsHidden.work}
          formValues={formValues.work}
          editForm={this.editForm}
        />
        <PersonalPortfolio values={portfolios.personal} />
        <EducationPortfolio values={portfolios.education} />
        <WorkPortfolio values={portfolios.work} />
      </div>
    );
  }
}

export default App;
