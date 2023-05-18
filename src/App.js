  import React from 'react'
  // components
  import Header from './components/Header/Index'
  import Nav from './components/Nav/Index'
  import Index from './components/Section/Index'
  import Sidebar from './components/Sidebar/Js/Sidebar'
  import IndexFooter from './components/Footer/Index'
  // style
  import './assets/scss/index.scss'


 
export default function App(){
    return(
      <div>
        <Header/>
        <Nav/>
        <Index/> 
        <Sidebar/>
        <IndexFooter/>
      </div>
    )
  }

