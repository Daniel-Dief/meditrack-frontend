import CardWrapper from './CardWrapper';
import Title from '../Texts/Title';
import SimpleCard from './SimpleCard';

interface Upcoming {
  AppointmentId: string;
  Doctor: string;
  AppointmentDate: string;
  Status: string;
  Patient: string
}

interface Props {
    upcoming: Array<Upcoming>;
}

export default function UpcomingCard( { upcoming } : Props ) {
    function handleClick(appointmentId: string) {
        alert(appointmentId);
        window.location.href = `/appointment/${appointmentId}`;
    }

    return (
        <CardWrapper>
            <Title text="Próximas Consultas" />
            {
                upcoming.map((appointment, index) => (
                    <SimpleCard key={index} onClick={() => handleClick(appointment.AppointmentId)}>
                        <span className="text-black">
                            Doutor: {appointment.Doctor}
                        </span> 
                        <span className="text-gray-600">
                            Paciente: {appointment.Patient}
                        </span> 
                        <span className="font-semibold text-gray-500">
                            {appointment.AppointmentDate}
                        </span>
                        <span className="font-semibold text-gray-500">
                            {appointment.Status}
                        </span> 
                    </SimpleCard>
                ))
            }
        </CardWrapper>
    );
}