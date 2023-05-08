import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MasterLayout from './masterLayout/masterLayout';

import Home from './pages/home/home';
import Signup from './pages/signup/signup';

import './App.scss';

function App() 
{
  return (
    <div>
      <BrowserRouter basename="/">
          <MasterLayout>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/signup' element={<Signup/>}/>
            </Routes>
          </MasterLayout>
        </BrowserRouter>
    </div>
  );
}

export default App;
