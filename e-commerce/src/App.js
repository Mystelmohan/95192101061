import './App.css';
import { Navbar } from './Componants/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Componants/Home';
import { Products } from './Componants/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
