import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MasterLayout from './masterLayout/masterLayout';

import { useScroll } from './hooks/useScroll';

import Home from './pages/home/home';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';

import './App.scss';

function App() 
{

  return (
    <div className={`font-courier`}>
      <BrowserRouter basename="/">
        <App2/>
        </BrowserRouter>
    </div>
  );
}

const App2 =() =>
{
  const scroll = useScroll();
  
  return(
        <MasterLayout handleScrollToMostProminentFields={scroll?.handleScrollToMostProminentFields} scrollToourNewRef={scroll?.handleScroll}>
            <Routes>
              <Route path='/' element={<Home mostProminentFieldsRef={scroll?.mostProminentFieldsRef} ourNewRef={scroll?.ourNewRef}/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
          </MasterLayout>
  )
}

export default App;
