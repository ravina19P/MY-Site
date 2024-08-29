import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, backgroundColor:'#0a0a20' }}>
          <Navbar />
        </div>
        <div style={{ paddingTop: '100px' }}> 
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
