import { createRoot } from 'react-dom/client';
import Info from './components/Info';
import Resume from './Resume';
import Education from './components/Education';
import Experience from './components/Experience';
import Breadcrumb from './components/Breadcrumb';
import './styles.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
let step= 1;
if(step===1){
root.render(
  
  <div>
    <h1 class="header">Resume Builder App</h1>
    <Breadcrumb />
    <div class="container">
    <Info />
    </div>
  </div>
);
} else if (step===2){
  root.render(
  
    <div>
      <h1 class="header">Resume Builder App</h1>
      <Breadcrumb />
      <div class="container">
      <Education />
      
      </div>
    </div>
  );
} else if(step===3){
  root.render(
  
    <div>
      <h1 class="header">Resume Builder App</h1>
      <Breadcrumb />
      <div class="container">
      <Experience />
      
      </div>
    </div>
  );
} else if(step===4){
  root.render(
  
    <div>
      <h1 class="header">Resume Builder App</h1>
      <Breadcrumb />
      <div class="container">
      <Resume />
      
      </div>
    </div>
  );
}