import React from 'react';
import '../styles.css';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  //make validation for inputs later
  render() {
    return (
      <div class="section">
        <h2>Experience</h2>
        <div class="input">
          <label for="company">Company</label>
          <input type="text" id="company" />
        </div>
        <div class="input">
          <label for="position">Position</label>
          <input type="text" id="position" />
        </div>
        <div class="input">
          <label for="tasks">Tasks</label>
          <input type="text" id="tasks" />
          <button>Add Task</button>
        </div>
        <div class="input">
          <label for="startDate">Start Date</label>
          <input type="date" id="startDate" />
        </div>
        <div class="input">
          <label for="endDate">End Date</label>
          <input type="date" id="endDate" />
        </div>
        <button>Save</button>
        <button>Edit</button>
      </div>
    );
  }
}
export default Experience;

/*
A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
*/
