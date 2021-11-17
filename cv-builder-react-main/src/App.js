import React, { Component } from 'react';
import Header from './components/Header';
import GeneralInfo from './components/GeneralInfo';
import EducationalInfo from './components/EducationalInfo';
import WorkInfo from './components/WorkInfo';
import { CardWork, CardEducation, CVcard } from './components/Cards';
import Footer from './components/Footer';

// Button to change view "Form / CV"
function ViewButton(props) {
  return (
    <div className="view-btn-container">
      <input
        className="view-btn"
        type="button"
        onClick={props.onClick}
        value="Form / CV"
      />
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cvFirstName: '',
      cvLastName: '',
      email: '',
      phoneNumber: '',
      address: '',

      tempSchool: '',
      tempTitleStudy: '',
      tempFromEducation: '',
      tempToEducation: '',

      tempCompany: '',
      tempPosition: '',
      tempTasks: '',
      tempFromWork: '',
      tempToWork: '',

      school: [],
      titleStudy: [],
      fromEducation: [],
      toEducation: [],

      company: [],
      position: [],
      tasks: [],
      fromWork: [],
      toWork: [],

      FormView: true,
    };
  }

  handleInputChange = (e) => {
    const name = e.target.name;

    // computed property name to update the state corresponding to the given input name
    this.setState({
      [name]: e.target.value,
    });
  };

  handleSubmit = (form, e) => {
    e.preventDefault();
    // store temp properties to each corresponding property array

    if (form === 'education') {
      this.setState((prevState) => ({
        school: [...prevState.school, this.state.tempSchool],
        titleStudy: [...this.state.titleStudy, this.state.tempTitleStudy],
        fromEducation: [
          ...this.state.fromEducation,
          this.state.tempFromEducation,
        ],
        toEducation: [...this.state.toEducation, this.state.tempToEducation],
        tempSchool: '',
        tempTitleStudy: '',
        tempFromEducation: '',
        tempToEducation: '',
      }));
    }

    if (form === 'work') {
      this.setState((prevState) => ({
        company: [...prevState.company, this.state.tempCompany],
        position: [...this.state.position, this.state.tempPosition],
        tasks: [...this.state.tasks, this.state.tempTasks],
        fromWork: [...this.state.fromWork, this.state.tempFromWork],
        toWork: [...this.state.toWork, this.state.tempToWork],
        tempCompany: '',
        tempPosition: '',
        tempTasks: '',
        tempFromWork: '',
        tempToWork: '',
      }));
    }
  };

  deleteCard = (props, index) => {
    // 'element' corresponds to every array 'state' passed from the card components
    for (const element of Object.keys(props)) {
      //Prevents iterate over 'onClick function prop'
      if (element !== 'onClick') {
        let filteredArray = this.state[element].filter(
          (ele) => ele !== this.state[element][index]
        );
        this.setState({ [element]: filteredArray });
      }
    }
  };

  changeView = () => {
    if (this.state.FormView) {
      this.setState({ FormView: false });
    } else {
      this.setState({ FormView: true });
    }
  };

  render() {
    let currentView;

    if (this.state.FormView) {
      // Show form and hide CV view
      currentView = (
        <div className="App-form">
          <GeneralInfo
            cvFirstName={this.state.cvFirstName}
            cvLastName={this.state.cvLastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            address={this.state.address}
            onChange={this.handleInputChange}
          />
          <CardEducation
            school={this.state.school}
            titleStudy={this.state.titleStudy}
            fromEducation={this.state.fromEducation}
            toEducation={this.state.toEducation}
            onClick={this.deleteCard}
          />
          <EducationalInfo
            tempSchool={this.state.tempSchool}
            tempTitleStudy={this.state.tempTitleStudy}
            tempFromEducation={this.state.tempFromEducation}
            tempToEducation={this.state.tempToEducation}
            onSubmit={this.handleSubmit}
            onChange={this.handleInputChange}
          />
          <CardWork
            company={this.state.company}
            position={this.state.position}
            tasks={this.state.tasks}
            fromWork={this.state.fromWork}
            toWork={this.state.toWork}
            onClick={this.deleteCard}
          />
          <WorkInfo
            tempCompany={this.state.tempCompany}
            tempPosition={this.state.tempPosition}
            tempTasks={this.state.tempTasks}
            tempFromWork={this.state.tempFromWork}
            tempToWork={this.state.tempToWork}
            onSubmit={this.handleSubmit}
            onChange={this.handleInputChange}
          />
        </div>
      );
    } else if (this.state.FormView === false) {
      // Hide form and show CV view
      currentView = (
        <div className="CV-view">
          <CVcard
            cvFirstName={this.state.cvFirstName}
            cvLastName={this.state.cvLastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            address={this.state.address}
            school={this.state.school}
            titleStudy={this.state.titleStudy}
            fromEducation={this.state.fromEducation}
            toEducation={this.state.toEducation}
            company={this.state.company}
            position={this.state.position}
            tasks={this.state.tasks}
            fromWork={this.state.fromWork}
            toWork={this.state.toWork}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Header />
        <ViewButton onClick={this.changeView} />
        {currentView}
        <Footer />
      </div>
    );
  }
}
export default App;
