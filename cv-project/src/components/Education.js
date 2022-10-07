import React from 'react';
import '../styles.css';
class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  //make validation for inputs later
  render() {
    return (
      <div class="section">
        <h2>General Information</h2>
        <div class="input">
          <label for="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div class="input">
          <label for="objective">Objective</label>
          <textarea id="objective" />
        </div>
        <div class="input">
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div class="input">
          <label for="number">Number</label>
          <input type="text" id="number" />
        </div>
        <button>Save</button>
        <button>Edit</button>
      </div>
    );
  }
}
export default Info;
/*
A section to add general information like name, email, phone number.
A section to add your educational experience (school name, title of study, date of study)
A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
*/
