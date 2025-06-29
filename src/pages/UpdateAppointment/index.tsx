import Navbar from "../../templates/Navbar"
import AppointmentDetailsForm from "../../templates/Forms/AppointmentDetailsForm"

export default function Appointments() {
    return  (
        <div>
            <Navbar />
            <AppointmentDetailsForm
                appointmentId={window.location.pathname.split("/").pop() || ""}
            />
        </div>
    )
}