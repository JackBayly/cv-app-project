import React from 'react';
import { v4 as uuid } from 'uuid';
import '../styles.css';

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onInputchange = this.onInputchange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputchange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        }, () => { 
            //console.log(this.state);
            document.getElementById("skill_1_Resume").textContent = this.state.skill_1;
            document.getElementById("skill_2_Resume").textContent = this.state.skill_2;
            document.getElementById("skill_3_Resume").textContent = this.state.skill_3;
            document.getElementById("skill_4_Resume").textContent = this.state.skill_4;
            document.getElementById("skill_5_Resume").textContent = this.state.skill_5;
            document.getElementById("skill_6_Resume").textContent = this.state.skill_6;
        });

    }

    onSubmitForm() {
        console.log(this.state)
    }


    //make validation for inputs later
    render() {
        const skill_Id_1 = uuid();
        const skill_Id_2 = uuid();
        const skill_Id_3 = uuid();
        const skill_Id_4 = uuid();
        const skill_Id_5 = uuid();
        const skill_Id_6 = uuid();

        return (
            <div class="section hide" id="skills_section">
             
                    <h2>Skills</h2>
                    <div class="input">
                        <label for="skill_1">Skill 1</label>
                        <input type="text" id="skill_1" name="skill_1" value={this.state.skill_1} onChange={this.onInputchange} />
                    </div>
                    <div class="input">
                        <label for="skill_2">Skill 2</label>
                        <input type="text" id="skill_2" name="skill_2" value={this.state.skill_2} onChange={this.onInputchange} />
                    </div>
                    <div class="input">
                        <label for="skill_3">Skill 3</label>
                        <input type="text" id="skill_3" name="skill_3" value={this.state.skill_3} onChange={this.onInputchange} />
                    </div>
                    <div class="input">
                        <label for="skill_4">Skill 4</label>
                        <input type="text" id="skill_4" name="skill_4" value={this.state.skill_4} onChange={this.onInputchange} />
                    </div>
                    <div class="input">
                        <label for="skill_5">Skill 5</label>
                        <input type="text" id="skill_5" name="skill_5" value={this.state.skill_5} onChange={this.onInputchange} />
                    </div>
                    <div class="input">
                        <label for="skill_2">Skill 6</label>
                        <input type="text" id="skill_6" name="skill_6" value={this.state.skill_6} onChange={this.onInputchange} />
                    </div>
                    <button onClick={()=>{
          
          document.getElementById("skills_section").classList.add("hide");
          
          document.getElementById("info_section").classList.remove("hide");
          }}>Go back</button>
                    <button onClick={()=>{
          
          document.getElementById("skills_section").classList.add("hide");
          
          document.getElementById("education_section").classList.remove("hide");
          }}>Save and Continue</button>
            </div>
        );
    }
}

export default Skills;