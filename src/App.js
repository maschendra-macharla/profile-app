import './App.css';
import Navbar from './sideMenu/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SkillsList from './pages/Skills/SkillsList';
import AddSkill from './pages/Skills/AddSkill';
import EditSkill from './pages/Skills/EditSkill';
import ExperiencesList from './pages/Experiences/ExperiencesList';
import PersonalData from './pages/PersonalInfo/PersonalData';
import UpdatePersonalData from './pages/PersonalInfo/UpdatePersonalData';


function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
          <Routes>
            {/* <Route exact path="/" element={<Home />} /> */}
            <Route exact path="/" element={<PersonalData />} />
            <Route path="skills" element={<SkillsList />} />
            <Route path="skills/addSkill" element={<AddSkill />}/>      
            <Route path="skill/editSkill/:id" element={<EditSkill />}/>   
            <Route path="personaldata" element={<PersonalData />} />  
            <Route path="updatepersonaldata" element={<UpdatePersonalData />} />       
            <Route path="experiences" element={<ExperiencesList />} />
          </Routes>
       </Router>      
    </div>
  );
}

export default App;
