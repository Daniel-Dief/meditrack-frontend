import Home from "./pages/Home"
import Appointments from "./pages/Appointments"
import UpdateAppointment from "./pages/UpdateAppointment";
import SignInForm from "./templates/SingIn";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { useAuthStore } from "./store/auth";

export default function App() {
  const { token } = useAuthStore();

  if(window.location.pathname !== "/login" && !token) {
    window.location.href = "/login";
    return null;
  }

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/login" element={<SignInForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/addAppointment" element={<Appointments />} />
        <Route path="/appointment/:id" element={<UpdateAppointment />} />
      </Routes>
    </BrowserRouter>
  )
} 