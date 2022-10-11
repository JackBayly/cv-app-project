import React from 'react';
import '../styles.css';

class Info extends React.Component {
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
      let name = document.getElementById("name_Resume");
name.textContent = this.state.name;
let objective = document.getElementById("objective_Resume");
objective.textContent = this.state.objective;
let email = document.getElementById("email_Resume");
email.textContent = this.state.email; 
let number = document.getElementById("number_Resume");
number.textContent = this.state.number;
      console.log(this.state)
    });
    
  }

  onSubmitForm() {
    console.log(this.state)
  }
  //make validation for inputs later
  render() {
    return (
      <div class="section">
        <h2>General Information</h2>
        <div class="input">
          <label for="name">Name</label>
          <input type="text" id="name"  name="name" value={this.state.name} onChange={this.onInputchange} />
        </div>
        <div class="input">
          <label for="objective">Objective</label>
          <textarea id="objective" name="objective" value={this.state.objective} onChange={this.onInputchange} />
        </div>
        <div class="input">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" value={this.state.email} onChange={this.onInputchange}/>
        </div>
        <div class="input">
          <label for="number">Number</label>
          <input type="text" id="number" name="number" value={this.state.number} onChange={this.onInputchange}/>
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
