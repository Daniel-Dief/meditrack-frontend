import Home from "./pages/Home"
import Appointments from "./pages/Appointments"
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

export default function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addAppointment" element={<Appointments />} />
      </Routes>
    </BrowserRouter>
  )
} 