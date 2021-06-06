
import React from 'react'
import Header from './components/function/Header'
import Footer from './components/function/Footer'
import Navbar from './components/function/Navbar'
import Checkbox from './components/function/Checkbox'
import Searchbar from './components/function/Searchbar'
import Sidepan from './components/function/Sidepan'
import Contact from './components/function/Contact'
import Home from './components/function/Home'
import Exlinks from './components/function/Exlinks'
import Login from './components/function/Login'
import LoginNavbar from './components/function/LoginNavbar'
import About from './components/function/About'
import Register from './components/function/Register'
import Socialmediabar from './components/function/Socialmediabar'
import {BrowserRouter,Route,Switch} from "react-router-dom"
import BedDetails from './components/function/BedDetails'
 


function App() {
  const details =[
    {
      hospitaltype:"Cho",
      hospitalname:"Arun hospital",
      address:"x street cbe",
      contactnumber:"676867547954",
      normalbed:"10/12",
      icubed:"10/12",
      o2bed:"10/12",
      total:"30/36"
  },
  {
    hospitaltype:"Cho",
    hospitalname:"Arthi hospital",
    address:"x street cbe",
    contactnumber:"676867547954",
    normalbed:"10/12",
    icubed:"10/12",
    o2bed:"10/12",
    total:"30/36"
},
{
  hospitaltype:"Cho",
  hospitalname:"Arun hospital",
  address:"x street cbe",
  contactnumber:"676867547954",
  normalbed:"10/12",
  icubed:"10/12",
  o2bed:"10/12",
  total:"30/36"
},
{
hospitaltype:"Cho",
hospitalname:"Arthi hospital",
address:"x street cbe",
contactnumber:"676867547954",
normalbed:"10/12",
icubed:"10/12",
o2bed:"10/12",
total:"30/36"
}
] 

  
  return (
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Checkbox />
          <Searchbar/>
          <Sidepan/>
           <Home/> 
           
          <BedDetails details={details}/>
      </Route>

      <Route exact path="/contact">
        <Contact/>
      </Route>

      <Route exact path="/about">
        <About/>
        <Exlinks/>
        
      </Route>

      <Route exact path="/login">
         
        <LoginNavbar/>
         
        </Route>
        <Switch>
        <Route exact path="/loginform"><Login/></Route>
        <Route exact path="/registerform"><Register/></Route>

        </Switch>
      </Switch>
      <Socialmediabar/>
      <Footer/>
    </BrowserRouter>
    
  )
}
export default App;