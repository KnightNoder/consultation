import './App.css';
import React from 'react'
import { useEffect,useState } from 'react';
import Parent from './Components/Parent';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import LandingPage  from './Components/LandingPage';
import ChoicePage from './Components/ChoicePage'
import HairOne from './Components/Hair/HairOne';
import HairTwo from './Components/Hair/HairTwo';
import SkinOne from './Components/Skin/SkinOne';
import SkinTwo from './Components/Skin/SkinTwo';
import SkinThree from './Components/Skin/SkinThree';
import SkinFour from './Components/Skin/SkinFour';
import PerformanceOne from './Components/Performance/PerformanceOne';
import PerformanceTwo from './Components/Performance/PerformanceTwo'
import PerformanceThree from './Components/Performance/PerformanceThree';
import PerformanceFour from './Components/Performance/PerformanceFour';
import PerformanceFive from './Components/Performance/PerformanceFive';
import BeardOne from './Components/Beard/BeardOne';
import BeardTwo from './Components/Beard/BeardTwo';
import BeardThree from './Components/Beard/BeardThree';
import WeightLossOne from './Components/WeightLoss/WeightLossOne'
import WeightLossTwo from './Components/WeightLoss/WeightLossTwo'
import WeightLossThree from './Components/WeightLoss/WeightLossThree'
import WeightLossFour from './Components/WeightLoss/WeightLossFour'
function App() {
  // const [screenSize,setScreenSize] = useState('')
  // const [value,SetValue] =  useState('Male')
  // useEffect(()=>{
  //   const screenWidth = window.innerWidth;
  //   setScreenSize(screenWidth);
  // })
  const [choice,SetChoice] = useState({
    
  })
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  // const onChangeValue = (event) => {
  //   console.log(event.target.value);
  // }
  return (
    <BrowserRouter basename="/">
       <div className='main-container'>
           <Routes>
             <Route path='/' exact element={<LandingPage/>}/>
             <Route path='/choice' exact element={<ChoicePage/>}/>
             <Route path='/hairfall' exact element={<HairOne/>}/>
             <Route path='/hairfall-1' exact element={<HairTwo/>}/>
             <Route path='/skin' exact element={<SkinOne/>}/>
             <Route path='/skin-1' exact element={<SkinTwo/>}/>
             <Route path='/skin-2' exact element={<SkinThree/>}/>
             <Route path='/skin-3' exact element={<SkinFour/>}/>
             <Route path='/performance' exact element={<PerformanceOne/>}/>
             <Route path='/performance-1' exact element={<PerformanceTwo/>}/>
             <Route path='/performance-2' exact element={<PerformanceThree/>}/>
             <Route path='/performance-3' exact element={<PerformanceFour/>}/>
             <Route path='/performance-4' exact element={<PerformanceFive/>}/>
             <Route path='/beard' exact element={<BeardOne/>}/>
             <Route path='/beard-1' exact element={<BeardTwo/>}/>
             <Route path='/beard-2' exact element={<BeardThree/>}/>
             <Route path='/weightloss' exact element={<WeightLossOne/>}/>
             <Route path='/weightloss-1' exact element={<WeightLossTwo/>}/>
             <Route path='/weightloss-2' exact element={<WeightLossThree/>}/>
             <Route path='/weightloss-3' exact element={<WeightLossFour/>}/>
           </Routes>
       </div> 
      </BrowserRouter>
    /* // <div className='main-container'>
    //   <LandingPage/>
    // </div> */
    //  <div onChange={onChangeValue} className="main">
    //     <input className='a' type="radio" value="Sunday" name="Weeks" /> Sunday
    //     <input className='b' type="radio" value="Mon" name="Weeks" /> Mon
    //     <input className='c' type="radio" value="Tues" name="Weeks" /> Tues
    //   </div> 
    // <>
    //   <Parent/>
    //  </> 
  );
}

export default App;
 