import React from 'react';
import '../styles.css';
class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
  //make validation for inputs later
  render() {
    return (
      <div class="section">
        <h2>Education</h2>
        <div class="input">
          <label for="school">School</label>
          <input type="text" id="school" />
        </div>
        <div class="input">
          <label for="studies">Studies (Major)</label>
          <input type="text" id="studies" />
        </div>
        <div class="input">
          <label for="graduation">Graduation</label>
          <input type="date" id="graduation" />
        </div>
        <button>Save</button>
        <button>Edit</button>
      </div>
    );
  }
}
export default Education;
/*A section to add your educational experience (school name, title of study, date of study)
A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
*/
