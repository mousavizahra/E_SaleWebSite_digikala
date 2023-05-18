// import { Routes ,Route}from 'react-router-dom'
import Header from './Header'
import Login from './Login'
// style
import './scss/style.scss'

export default function index () {
  return (
    <div id='header'>
      <Header />
      <Login />
    </div>
  )
}
