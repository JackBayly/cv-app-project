import './Resume.css';

export default function Resume() {
  
  return (
    
    <div class="container-resume hide" id="resume_section">
      <h1 id="name_Resume">Jack O'Hara</h1>
      <div id="contact_Resume">
        <div><span id="address_Resume"> 3628 Rockbridge Road</span>,<br /> <span id="city_Resume">Stone Mountain</span>, <span id="state_Resume">GA</span>, <span id="zipCode_Resume">30083</span> </div>
        <div id="info_contact_Resume">Phone: <span id="number_Resume">404-579-5164</span><br />Email: <span id="email_Resume">jackohara96@gmail.com</span><br /><span id="website_Resume"></span></div>
      </div>

      <div id="objective_Align">
        <h2>Objective</h2>
        <div id="objective_Resume">Obtain an entry-level software development position utilizing my skills in web technologies.
        </div>
      </div>
      <div class="skills_Align">
        <h2>Skills</h2>
        <ul id="skills_Resume">
          <li id="skill_1_Resume">HTML</li>
          <li id="skill_2_Resume">CSS</li>
          <li id="skill_3_Resume">JavaScript</li>
          <li id="skill_4_Resume">Spanish</li>
          <li id="skill_5_Resume"></li>
          <li id="skill_6_Resume"></li>
        </ul>
      </div>
      <div class="skills_Align">
                <h2>Education</h2>
                <div id="education_Align">
                    <div><span id="job">Generation USA</span>, <span id="position"><span id="studies_Resume">Web Development</span> <span id="program_Resume">boot camp</span></span><br />
                        <div id="description_Resume">Front-end web development program lasting 22 weeks.<br />
                        Covers web development technologies such as HTML, CSS, JavaScript, etc.
                        </div>
                    </div>
                    <div id="graduation">Graduation <span id="graduation_Resume">December 2022</span> </div>

                </div>
            </div>
            
            <div class="skills_Align">
            <h2>Experience</h2>
            <div class="workDate_Resume">
                <div><span id="company_Resume">Cambly</span>, <span id="place_Resume">Online</span></div>
                <div><span id="startDate_Resume"> May 2021</span> to <span id="endDate_Resume">Present</span></div>
            </div>
            <div id="position_Resume">ESL Teacher</div>
            <ul id="responsibilities">
                <li id="task1_Resume">Teach one-on-one online English classes to children, adults, and teenagers
                </li>
                <li id="task2_Resume">Create and deliver individualized and general lesson plans based on student’s needs
                </li>
                <li id="task3_Resume">Correct student mistakes using empathetic and constructive feedback techniques</li>
            </ul>
          
        </div>
        
    </div >
  );
}
