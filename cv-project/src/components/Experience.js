import React from 'react';
import '../styles.css';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onInputClick = this.onInputClick.bind(this);
  }
  
  onInputchange(event) {
   
    this.setState({
      [event.target.name]: event.target.value
    }, ()=>{ console.log(this.state);
    document.getElementById("company_Resume").textContent = this.state.company;
    document.getElementById("place_Resume").textContent = this.state.location;
    document.getElementById("position_Resume").textContent = this.state.position;
    document.getElementById("startDate_Resume").textContent = this.state.startDate;
    document.getElementById("endDate_Resume").textContent = this.state.endDate;
    document.getElementById("task1_Resume").textContent = this.state.task1;
    document.getElementById("task2_Resume").textContent = this.state.task2;
    document.getElementById("task3_Resume").textContent = this.state.task3;
  });
    
  }
  onInputClick(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, ()=>{ console.log(this.state);
    document.getElementById("endDate_Resume").textContent = this.state.present;
   
  });
  }
  onSubmitForm() {
    console.log(this.state)
  }
  //make validation for inputs later
  render() {
    return (
      <div class="section hide" id="experience_section">
        <h2>Experience</h2>
        <div class="input">
          <label for="company">Company</label>
          <input type="text" id="company" name="company" value={this.state.company} onChange={this.onInputchange} />
        </div>
        <div class="input">
          <label for="location">Location</label>
          <input type="text" id="location" name="location" value={this.state.location} onChange={this.onInputchange} />
        </div>
        <div class="input">
          <label for="position">Position</label>
          <input type="text" id="position" name="position" value={this.state.position} onChange={this.onInputchange} />
        </div>
        <div class="input">
          <label for="task1">Responsibility 1 (1 - 2 sentences)</label>
          <input type="text" id="task1" name="task1" value={this.state.task1} onChange={this.onInputchange}  />
        </div>
        <div class="input">
          <label for="task2">Responsibility 2 (1 - 2 sentences)</label>
          <input type="text" id="task2" name="task2" value={this.state.task2} onChange={this.onInputchange}  />
        </div>
        <div class="input">
          <label for="task3">Responsibility 3 (1 - 2 sentences)</label>
          <input type="text" id="task3" name="task3" value={this.state.task3} onChange={this.onInputchange}  />
        </div>
        
        <div class="input">
          <label for="startDate">Start Date</label>
          <input type="date" id="startDate" name="startDate" value={this.state.startDate} onChange={this.onInputchange}  />
        </div>
        <div class="input">
          <label for="endDate">End Date</label>
          <input type="date" id="endDate" name="endDate" value={this.state.endDate} onChange={this.onInputchange} />
          <button type="button" id="present" name="present" value="Present" onClick={this.onInputClick} >Present Position?</button>
        </div>
        <button onClick={()=>{
          
          document.getElementById("education_section").classList.remove("hide");
          
          document.getElementById("experience_section").classList.add("hide");
          }}>Go back</button>
        <button onClick={()=>{
          console.log("hey");
          document.getElementById("experience_section").classList.add("hide");
          document.getElementById("container").classList.add("hide");
          document.getElementById("resume_section").classList.remove("hide");
          }}>Save and Continue</button>        
      </div>
    );
  }
}
export default Experience;

/*
A section to add practical experience (company name, position title, main tasks of your jobs, date from and until when you worked for that company)
*/
