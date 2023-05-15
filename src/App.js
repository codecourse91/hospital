import './App.css';
import './Components/assets/css/main.css';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./Components/Index.js";
import Services from "./Components/Services";
import Department from "./Components/Department";
import Doctors from "./Components/Doctors";

function App() {
  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={ <Index/> } />
        <Route path="services" element={ <Services/> } />
        <Route path="department" element={ <Department/> } />
        <Route path="doctors" element={ <Doctors/> } />
      </Routes>
      </>
    </div>
  );
}

export default App;
