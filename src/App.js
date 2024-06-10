import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/" element={<Home />} />
       
        </Routes>
    
    </div>
  );
}

export default App;
