import Title from "../../components/Texts/Title"
import Button from "../../components/Button"
import KPIContainer from "../../components/Container/KPIContainer"

import { Calendar, Pill, Users } from "lucide-react"

export default function OverView() {
    return (
        <div className="flex flex-col">
            <div className="p-6 flex justify-between">
                <div className="w-fit">
                    <Title text="João da silva" size="big"/>
                    <p className="text-gray-500">
                        Aqui estão suas informações médicas recentes
                    </p>
                </div>
                <Button
                    color="primary"
                    className="flex items-center gap-2 px-4 rounded-md text-black font-semibold"
                >
                    <Calendar />
                    <p>
                        Agendar Consulta
                    </p>
                </Button>
            </div>
            <div className="flex items-center justify-evenly gap-4 p-4">
                <KPIContainer>
                    <div>
                        <p>
                            Consultas esse mês
                        </p>
                        <span>
                            2
                        </span>
                    </div>
                    <Calendar className="text-[#617187] size-8"/>
                </KPIContainer>
                <KPIContainer>
                    <div>
                        <p>
                            Medicamentos
                        </p>
                        <span>
                            5
                        </span>
                    </div>
                    <Pill className="text-[#617187] size-8"/>
                </KPIContainer>
                <KPIContainer>
                    <div>
                        <p>
                            Médicos
                        </p>
                        <span>
                            5
                        </span>
                    </div>
                    <Users className="text-[#617187] size-8"/>
                </KPIContainer>
            </div>
        </div>
    )
}