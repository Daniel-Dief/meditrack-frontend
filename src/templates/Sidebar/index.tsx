import UserCard from "../../components/Cards/UserCard";
import UpcomingCard from "../../components/Cards/UpcomingCard";
import { useGetAllAppointments } from "../../service/querys/getAppointment";
import { useEffect } from "react";

export default function Sidebar() {
    const { getAllAppointments, data: appointmensData } = useGetAllAppointments();

    useEffect(() => {
        getAllAppointments();
    }, [getAllAppointments]);

    return (
        <div className="w-fit mt-8 p-6 rounded-lg flex flex-col gap-6 items-start justify-start">
                <UserCard 
                    BirthDate="01/01/1990"
                    Email="teste@gmail.com"
                    Name="João da Silva"
                    Phone="(11) 99999-9999"
                    Status="Ativo"
                />
                <UpcomingCard
                    upcoming={
                        appointmensData.map((appointment) => ({
                            AppointmentId: appointment.AppointmentId,
                            Doctor: appointment.Doctor.Name,
                            AppointmentDate: new Date(appointment.AppointmentDate).toLocaleDateString(),
                            Status: appointment.Status.Name,
                            Patient: appointment.Patient.Name
                        }))
                    }
                />
            </div>
    )
}