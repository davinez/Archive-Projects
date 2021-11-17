import React, { Component } from 'react';

/*
A section to add practical experience 
(company name, position title, main tasks of your jobs, date from and until when you worked for that company)
*/

class WorkInfo extends Component {
  onSubmit = (e) => {
    this.props.onSubmit('work', e);
  };

  render() {
    const { tempCompany, tempPosition, tempTasks, tempFromWork, tempToWork } =
      this.props;
    return (
      <>
        <p>Experience</p>
        <form className="workinfo-container" onSubmit={this.onSubmit}>
          <label htmlFor="tempCompany">Company Name:</label>
          <input
            id="tempCompany"
            name="tempCompany"
            type="text"
            value={tempCompany}
            onChange={this.props.onChange}
            required
          />

          <label htmlFor="tempPosition">Position title:</label>
          <input
            id="tempPosition"
            name="tempPosition"
            type="text"
            value={tempPosition}
            onChange={this.props.onChange}
            required
          />

          <label htmlFor="tempTasks">Main tasks of the job:</label>
          <textarea
            id="tempTasks"
            name="tempTasks"
            value={tempTasks}
            onChange={this.props.onChange}
            required
          />

          <label htmlFor="tempFromWork">From:</label>
          <input
            id="tempFromWork"
            name="tempFromWork"
            type="text"
            value={tempFromWork}
            placeholder="yyyy/mm"
            onChange={this.props.onChange}
            required
          />

          <label htmlFor="tempToWork">To:</label>
          <input
            id="tempToWork"
            name="tempToWork"
            type="text"
            value={tempToWork}
            placeholder="yyyy/mm"
            onChange={this.props.onChange}
            required
          />

          <input className="form-btn" type="submit" value="Save" />
        </form>
      </>
    );
  }
}

export default WorkInfo;
