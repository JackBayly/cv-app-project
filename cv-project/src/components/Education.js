import React from 'react';
import '../styles.css';
class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  onInputchange(event) {
   
    this.setState({
      [event.target.name]: event.target.value
    }, ()=>{ console.log(this.state)});
    
  }

  onSubmitForm() {
    console.log(this.state)
  }
  //make validation for inputs later
  render() {
    return (
      <div class="section">
        <h2>Education</h2>
        <div class="input">
          <label for="school">School</label>
          <input type="text" id="school" name="school" value={this.state.school} onChange={this.onInputchange} />
        </div>
        <div class="input">
          <label for="studies">Studies (Major)</label>
          <input type="text" id="studies" name="studies" value={this.state.studies} onChange={this.onInputchange} />
        </div>
        <div class="input">
          <label for="graduation">Graduation</label>
          <input type="date" id="graduation" name="graduation" value={this.state.graduation} onChange={this.onInputchange} />
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
