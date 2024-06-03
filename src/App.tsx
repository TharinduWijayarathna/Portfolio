import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Works from './pages/works/Works';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works' element={<Works />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;