import React from 'react';
import '../styles.css';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onInputchange = this.onInputchange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
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
    });
    
  }

  onSubmitForm() {
    console.log(this.state)
  }
  //make validation for inputs later
  render() {
    return (
      <div class="section">
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
          <label for="tasks">Tasks</label>
          <input type="text" id="tasks" name="tasks" value={this.state.tasks} onChange={this.onInputchange}  />
          <button>Add Task</button>
        </div>
        <div class="input">
          <label for="startDate">Start Date</label>
          <input type="date" id="startDate" name="startDate" value={this.state.startDate} onChange={this.onInputchange}  />
        </div>
        <div class="input">
          <label for="endDate">End Date</label>
          <input type="date" id="endDate" name="endDate" value={this.state.endDate} onChange={this.onInputchange} />
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
