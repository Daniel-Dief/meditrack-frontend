import CardWrapper from './CardWrapper';
import Title from '../Texts/Title';
import SimpleCard from './SimpleCard';

interface Upcoming {
    doctorName: string;
    type: string
    date: string;
    time: string;
}

interface Props {
    upcoming: Array<Upcoming>;
}

export default function UpcomingCard( { upcoming } : Props ) {
    return (
        <CardWrapper>
            <Title text="Próximas Consultas" />
            {
                upcoming.map((appointment, index) => (
                    <SimpleCard key={index}>
                        <span className="text-black">
                            {appointment.doctorName}
                        </span> 
                        <span className="text-gray-600">
                            {appointment.type}
                        </span> 
                        <span className="font-semibold text-gray-500">
                            {[appointment.date, appointment.time].join(' - ')}
                        </span> 
                    </SimpleCard>
                ))
            }
        </CardWrapper>
    );
}