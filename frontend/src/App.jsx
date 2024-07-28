import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Signup } from "./Pages/Signup";
import { Signin } from "./Pages/Signin";
import { Dashboard } from "./Pages/Dashboard";
import {Payment} from "./Pages/Payment";
function App() {

  return (
    <div>
        <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/payment" element={<Payment/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
