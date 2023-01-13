import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from "./Components/Navbar.js"
import Home from './Components/Home';
import List from './Components/List';
import Form from './Components/Form';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Form' element={<Form/>}/>
          <Route path='List/' element={<List/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
