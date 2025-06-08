import UserCard from "../../components/Cards/UserCard";
import UpcomingCard from "../../components/Cards/UpcomingCard";

export default function Sidebar() {
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
                    upcoming={[
                        {
                            doctorName: "Dr. Ana Souza",
                            type: "Consulta",
                            date: "2023-10-15",
                            time: "14:00"
                        },
                        {
                            doctorName: "Dr. Carlos Pereira",
                            type: "Exame",
                            date: "2023-10-20",
                            time: "09:30"
                        }
                    ]}
                />
            </div>
    )
}