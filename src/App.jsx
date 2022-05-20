import './App.css';
import React from 'react'
import { useEffect,useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Appointment from './Components/Appointment';
import Recommendation from './Components/Recommendation';
import Book from './Components/Book'
import Callback from './Components/Callback';
import ChoicePage from './Components/ChoicePage'
import LandingPage  from './Components/LandingPage';
import HairOne from './Components/Hair/HairOne';
import HairTwo from './Components/Hair/HairTwo';
import HairThree from './Components/Hair/HairThree';
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
import BasicInfo from './Components/BasicInfo';

function App() {
  let [saturn_choice,Set_saturn_choice] = useState(JSON.parse(window.localStorage.getItem('saturn_choice')) || {
    "assessment_type":"6min",
    "category":"skin",
    "user_info":{
      "first_name":"",
      "last_name":"",
      "email":"",
      "phone_number":"",
      "age":"",
      "height":"",
      "weight":""
    },
    "skin":{
      "skin_concern":"Open pores",
      "skin_texture":"Oily",
      "skin_type":"Normal",
      "skin_allergy_to":"Vitamin C",
    },
    "appointment_type":"Get a free consultation call"
  })

const Set_data = (item,val) => {
  Set_saturn_choice((prevState)=>{
    return {...prevState,[item]: val}
  })
}

const Set_minor_data = (minor_key,item,val) => {
  Set_saturn_choice((state)=>{
    return {...state,[minor_key]:{
      ...state[minor_key],
      [item]: val
    }}
  })
}
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(()=>{
    window.localStorage.setItem('saturn_choice',JSON.stringify(saturn_choice))
  },[saturn_choice])

  return (
    <BrowserRouter basename="/pages/consultation"> 
       <div className='main-container'>
           <Routes>
             <Route path='/' exact element={<LandingPage Set_data={Set_data}/>}/>
             <Route path='/choice' exact element={<ChoicePage saturn_choice={saturn_choice} 
                Set_data={Set_data}
                Set_minor_data={Set_minor_data}/>}/>
             <Route path='/user-details' exact element={<BasicInfo saturn_choice={saturn_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/hairfall' exact element={<HairOne/>}/>
             <Route path='/hairfall-1' exact element={<HairTwo/>}/>
             <Route path='/hairfall-2' exact element={<HairThree/>}/>
             <Route path='/skin' exact element={<SkinOne saturn_choice={saturn_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/skin-1' exact element={<SkinTwo saturn_choice={saturn_choice}
             Set_minor_data={Set_minor_data} />}/>
             {/* <Route path='/skin-2' exact element={<SkinThree saturn_choice={saturn_choice}
             Set_minor_data={Set_minor_data} />}/> */}
             <Route path='/skin-2' exact element={<SkinFour saturn_choice={saturn_choice}
             Set_minor_data={Set_minor_data} />}/>
             <Route path='/performance' exact element={<PerformanceOne/>}/>
             <Route path='/performance-1' exact element={<PerformanceTwo/>}/>
             <Route path='/performance-2' exact element={<PerformanceThree/>}/>
             <Route path='/performance-3' exact element={<PerformanceFour/>}/>
             <Route path='/performance-4' exact element={<PerformanceFive/>}/>
             <Route path='/beard' exact element={<BeardOne/>}/>
             <Route path='/beard-1' exact element={<BeardTwo/>}/>
             <Route path='/beard-2' exact element={<BeardThree/>}/>
             <Route path='/weight-management' exact element={<WeightLossOne/>}/>
             <Route path='/weight-management-1' exact element={<WeightLossTwo/>}/>
             <Route path='/weight-management-2' exact element={<WeightLossThree/>}/>
             <Route path='/weight-management-3' exact element={<WeightLossFour/>}/>
             <Route path='/appointment' exact element={<Appointment saturn_choice={saturn_choice} 
                Set_data={Set_data}/>}/>
             <Route path='/book' exact element={<Book/>}/>
             <Route path='/recommendation' exact element={<Recommendation saturn_choice={saturn_choice}/>}/>
             <Route path='/callback' exact element={<Callback saturn_choice={saturn_choice}/>}/>
             <Route path='*' exact element={<LandingPage Set_data={Set_data}/>}/>
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
      // <BrowserRouter>
      //   <Routes>
      //       <Route path='/' element={<First choice={choice} onchg={onchg}/>}/>
      //       <Route path='/first' element={<Parent firstName={payload['user1']['firstNameOne']} 
      //       lastName={payload['user1']['lastNameOne']}  choice={choice}
      //       onchange={onchange}/>}/>
      //       <Route path='/second' element={<Child firstName={payload['user2']['firstNameTwo']}
      //         lastName={payload['user2']['lastNameTwo']} choice={choice} 
      //         onchange={onchange}/>}/>
      //       <Route path='/final' element={<Final payload={payload} choice={choice}/>}/>
      //   </Routes>
      // </BrowserRouter>
  );
}

export default App;
