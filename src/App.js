import './App.css';
import './Components/assets/css/main.css';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./Components/Index.js";
import Services from "./Components/Services";
import Department from "./Components/Department";
import Doctors from "./Components/Doctors";
import Blog from "./Components/Blog";
import Blogdetail from './Components/Blog-detail';
import Contact from './Components/Contact';
import Login from './oreo/Login'
import Signup from './Components/Signup';
// import Gallary from './Components/Gallary';

function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={ <Index/> } />
        <Route path="services" element={ <Services/> } />
        <Route path="department" element={ <Department/> } />
        <Route path="doctors" element={ <Doctors/> } />
        <Route path="blog" element={ <Blog/> } />
        <Route path="blog-detail" element={ <Blogdetail/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="login" element={ <Login/> } />
        <Route path="signup" element={ <Signup/> } />
        {/* <Route path="gallary" element={ <Gallary/> } /> */}
      </Routes>
      </>
    </div>
  );
}

export default App;
