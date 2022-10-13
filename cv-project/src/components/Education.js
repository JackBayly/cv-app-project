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
    }, ()=>{
       console.log(this.state);
       document.getElementById("job").textContent = this.state.school;
       document.getElementById("studies_Resume").textContent = this.state.studies;
       document.getElementById("program_Resume").textContent = this.state.program;
       document.getElementById("description_Resume").textContent = this.state.description;
       document.getElementById("graduation_Resume").textContent = this.state.graduation;
      }
       );
    
  }

  onSubmitForm() {
    console.log(this.state)
  }
  //make validation for inputs later
  render() {
    return (
      <div class="section hide" id="education_section">
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
          <label for="program">Type of Program</label>
          <input type="text" id="program"placeholder="Bachelors, Masters, Certificate, Bootcamp etc." name="program" value={this.state.program} onChange={this.onInputchange} />
        </div>
        <div class="input">
          <label for="description">Description of Program</label>
          <textarea id="description" name="description" value={this.state.description} onChange={this.onInputchange} />
        </div>
        <div class="input">
          <label for="graduation">Graduation</label>
          <input type="date" id="graduation" name="graduation" value={this.state.graduation} onChange={this.onInputchange} />
        </div>
        <button onClick={()=>{
          
          document.getElementById("skills_section").classList.remove("hide");
          
          document.getElementById("education_section").classList.add("hide");
          }}>Go back</button>
        <button onClick={()=>{
          console.log("hey");
          document.getElementById("experience_section").classList.remove("hide");
          
          document.getElementById("education_section").classList.add("hide");
          }}>Save and Continue</button>
       
      </div>
    );
  }
}
export default Education;
/*A section to add your educational experience (school name, title of study, date of study)
A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
*/
