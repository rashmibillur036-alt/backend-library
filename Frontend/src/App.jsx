import React from 'react'
import{BrowserRouter,Routes,Route,Link} from "react-router"
import { useNavigate } from 'react-router-dom';

import Login from './pages/Login'
import Signin from './Pages/Signin'
import Lib from './Pages/Lib'
import Books from "./views/Books";
import Journals from "./views/Journals";
import DigitalResources from "./views/DigitalResources";
import Questions from "./views/Questions";





const App = () => {
  return (
    <div>
      <BrowserRouter>
     <Routes>

      <Route path="/"element={<Login/>}/>
      <Route path="/signin" element ={<Signin/>}/>
      <Route path="/library"element={<Lib/>}/>
      <Route path="/books" element={<Books />} />
      <Route path="/journals" element={<Journals />} />
      <Route path="/digital" element={<DigitalResources />} />
      <Route path="/questions" element={<Questions />} />
     
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App