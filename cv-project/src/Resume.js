import './Resume.css';

export default function Resume() {
  
  return (
    
    <div class="container-resume">
      <h1 id="name_Resume">Jack O'Hara</h1>
      <div id="contact_Resume">
        <div id="address_Resume">3628 Rockbridge Road,<br /> Stone Mountain, GA, 30083 </div>
        <div id="info_contact_Resume">Phone: <span id="number_Resume">404-579-5164</span><br />Email: <span id="email_Resume">jackohara96@gmail.com</span><br />GitHub:
          github.com/JackBayly</div>
      </div>

      <div id="objective_Align">
        <h2>Objective</h2>
        <div id="objective_Resume">Obtain an entry-level software development position utilizing my skills in web technologies.
        </div>
      </div>
      <div class="skills_Align">
        <h2>Skills</h2>
        <ul id="skills_Resume">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Spanish</li>
        </ul>
      </div>
      <div class="skills_Align">
                <h2>Education</h2>
                <div id="education_Align">
                    <div><span id="job">Generation USA</span>, <span id="position">junior web developer boot camp</span><br />
                        Front-end web development program lasting 22 weeks.<br />
                        Covers web development technologies such as HTML, CSS, JavaScript, etc.
                    </div>
                    <div id="graduation">Graduation December 2022 </div>

                </div>
            </div>
            
            <div class="skills_Align">
            <h2>Experience</h2>
            <div class="workDate_Resume">
                <div><span id="company">Cambly</span> <span id="place">Online</span></div>
                <div><span> May 2021</span> - <span>Present</span></div>
            </div>
            <div id="position">ESL Teacher</div>
            <ul id="responsibilities">
                <li>Teach one-on-one online English classes to children, adults, and teenagers
                </li>
                <li>Create and deliver individualized and general lesson plans based on student’s needs
                </li>
                <li>Correct student mistakes using empathetic and constructive feedback techniques</li>
            </ul>
          
        </div>
        
    </div >
  );
}
