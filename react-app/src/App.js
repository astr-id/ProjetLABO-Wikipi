import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home/>}/> {/* 👈 Renders at /app/ */}
      </Routes>
    </div>
  );
}

export default App;
