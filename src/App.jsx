import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import DetailHero from './pages/DetailHero';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App min-h-screen bg-primary text-secundary">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='detail' element={<DetailHero/>}/>
      </Routes>
    </div>
  );
}

export default App;
