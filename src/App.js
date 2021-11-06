import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';


function App() {
  return (
    <div className="App">

     
      <Routes>
          <Route path="/about" element={<Home />}>
            
          </Route>
          <Route path="/home" element={<Home />}>
            
          </Route>
          <Route path="/"  element={<Home />}>
      
          </Route>
        </Routes>
     
      
    </div>
  );
}

export default App;
