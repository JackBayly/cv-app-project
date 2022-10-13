import React from 'react';
import '../styles.css';
class Breadcrumb extends React.Component {
 
  //make validation for inputs later
  render() {
    let e = document.getElementById("education_section");
    let x = document.getElementById("experience_section");
    let s = document.getElementById("skills_section");
    let i = document.getElementById("info_section");
    let r = document.getElementById("resume_section");
    
    let array = [e,x,s,i,r];
    function disapear() {
      array.map((x)=>{x.classList.add("hide")});
   
    }
    function showinfo(){
      disapear();
      document.getElementById("container").classList.remove("hide");
      i.classList.remove("hide");
    }
    function showSkills(){
      disapear();
      document.getElementById("container").classList.remove("hide");
      s.classList.remove("hide");
    }
    function showEducation(){
      disapear();
      document.getElementById("container").classList.remove("hide");
      e.classList.remove("hide");
    }
    function showExperience(){
      disapear();
      document.getElementById("container").classList.remove("hide");
      x.classList.remove("hide");
    }
    function showResume(){
      disapear();
      r.classList.remove("hide");
      document.getElementById("container").classList.add("hide");
    }
    return (
        <ul class="breadcrumb">
        <li onClick={showinfo}><a href="#">General Info</a></li>
        <li onClick={showSkills}><a href="#">Skills</a></li>
        <li onClick={showEducation}><a href="#">Education</a></li>
        <li onClick={showExperience}><a href="#">Experience</a></li>    
        <li onClick={showResume}><a href="#">Resume</a></li>    
      </ul>
    );
  }
}
export default Breadcrumb;