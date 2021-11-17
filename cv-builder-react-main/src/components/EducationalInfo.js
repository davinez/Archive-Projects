import React, { Component } from 'react';

// A section to add your educational experience (school name, title of study, date of study)

class EducationalInfo extends Component {
  onSubmit = (e) => {
    this.props.onSubmit('education', e);
  };

  render() {
    const { tempSchool, tempTitleStudy, tempFromEducation, tempToEducation } =
      this.props;
    return (
      <>
        <p>Education</p>

        <form className="educationalinfo-container" onSubmit={this.onSubmit}>
          <label htmlFor="tempSchool">School Name:</label>
          <input
            id="tempSchool"
            name="tempSchool"
            type="text"
            value={tempSchool}
            onChange={this.props.onChange}
            required
          />

          <label htmlFor="tempTitleStudy">Title of Study:</label>
          <input
            id="tempTitleStudy"
            name="tempTitleStudy"
            type="text"
            value={tempTitleStudy}
            onChange={this.props.onChange}
            required
          />

          <label htmlFor="tempFromEducation">From:</label>
          <input
            id="tempFromEducation"
            name="tempFromEducation"
            type="date"
            value={tempFromEducation}
            onChange={this.props.onChange}
            required
          />

          <label htmlFor="tempToEducation">To:</label>
          <input
            id="tempToEducation"
            name="tempToEducation"
            type="date"
            value={tempToEducation}
            onChange={this.props.onChange}
            required
          />

          <input className="form-btn" type="submit" value="Save" />
        </form>
      </>
    );
  }
}

export default EducationalInfo;
