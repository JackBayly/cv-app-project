import { createRoot } from 'react-dom/client';
import Info from './components/Info';
import Resume from './Resume';
import Education from './components/Education';
import Experience from './components/Experience';
import Breadcrumb from './components/Breadcrumb';
import Skills from './components/Skills';
import './styles.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


  root.render(

    <div>
      <h1 class="header">Resume Builder App</h1>
      <Breadcrumb />
      <div class="container" id="container">
        <Info />
        <Skills />
        <Education />
        <Experience />
      </div>
      <Resume />
    </div>
  );