import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Watch from './pages/Watch'
import Mheader from './component/Mheader'
import Mfoooter from './component/Mfoooter'


function App() {


  return (
    <>
   <Mheader/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch' element={<Watch/>}/>
    </Routes>
    <Mfoooter/>
   
    </>
  )
}

export default App
