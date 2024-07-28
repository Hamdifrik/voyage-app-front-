

import './App.css';
import Advice from './component/Advice';
import Annonce from './component/Annonce';
import Annoncments from './component/Annoncments';
import Home from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import { Routes,Route } from 'react-router-dom';
import Postadvice from './component/Postadvice';
import Profile from './component/Profile';
import EditProfile from './component/EditProfile';
import Notfound from './component/Notfound';
import Planifier from './component/Planifier';

import FormDiscussionGroupe from './component/FormDiscussionGroupe';
import PlanificationVoyage from './component/PlanificationVoyage';
import Signup from './component/Signup';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>

<Route exact path="/" element={<Home/>} />    

   
<Route path="/announcement" element={<Annoncments/>} />    
<Route path="/advice" element={<Advice/>} />
<Route path="/postadvive" element={<Postadvice/>} />


<Route path="/announcement/:id" element={<Annonce/>} />
<Route path="/profile/:id" element={<Profile/>} />
<Route path="/profile/:id/editprofile" element={<EditProfile/>} />

<Route path="/planifier" element={<Planifier/>} />

<Route path="/group" element={<PlanificationVoyage/>} />
<Route path="login/signup" element={<Signup/>} />
<Route path="/group/:id" element={<FormDiscussionGroupe/>} />  
<Route exact path="/*" element={<Notfound/>} /> 
        
  




</Routes>
    </div>
  );
}

export default App;
