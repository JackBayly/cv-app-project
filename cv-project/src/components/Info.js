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
let street = document.getElementById("address_Resume");
street.textContent = this.state.street;
let city = document.getElementById("city_Resume");
city.textContent = this.state.city;
let state = document.getElementById("state_Resume");
state.textContent = this.state.state;
let zip = document.getElementById("zipCode_Resume");
zip.textContent = this.state.zip;
let website = document.getElementById("website_Resume");
website.textContent = `Portfolio: ${this.state.website}`;
      console.log(this.state)
    });
    
  }

  onSubmitForm() {
    console.log(this.state)
  }
  //make validation for inputs later
  render() {
    return (
      <div class="section" id="info_section">
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
        <div class="input">
          <label for="website">Portfolio (optional)</label>
          <input type="text" id="website" name="website" value={this.state.website} onChange={this.onInputchange}/>
        </div>
        <div class="input">
          <label for="street">Street Address</label>
          <input type="text" id="street" name="street" value={this.state.street} onChange={this.onInputchange}/>
        </div>
        <div class="input">
          <label for="city">City</label>
          <input type="text" id="city" name="city" value={this.state.city} onChange={this.onInputchange}/>
        </div>
        <div class="input">
          <label for="state">State</label>
          <input type="text" id="state" name="state" value={this.state.state} onChange={this.onInputchange}/>
        </div>
        <div class="input">
          <label for="zip">Zip Code</label>
          <input type="text" id="zip" name="zip" value={this.state.zip} onChange={this.onInputchange}/>
        </div>
        <button onClick={()=>{
          console.log("hey");
          document.getElementById("info_section").classList.add("hide");
          
          document.getElementById("skills_section").classList.remove("hide");
          }}>Save and Continue</button>
        
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
