import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import About from './pages/About';
import DetailHero from './pages/DetailHero';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App min-h-screen bg-primary text-secundary">
      <Navbar />
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/search' element={<Home/>} />
        <Route path='/detail/:heroId' element={<DetailHero/>}/>
      </Routes>
    </div>
  );
}

export default App;
