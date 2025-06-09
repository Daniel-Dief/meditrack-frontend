import Navbar from "../../templates/Navbar"
import Sidebar from "../../templates/Sidebar"
import SimpleContainer from "../../components/Container/SimpleContainer.tsx"
import Title from "../../components/Texts/Title.tsx"
import BackgroundContainer from "../../components/Container/BackgroundContainer.tsx/index.tsx"
import SpanText from "../../components/Texts/SpanText.tsx"

import { Bell, CircleIcon } from "lucide-react"

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-between">
                <Sidebar />
                <div className="w-full">
                    <SimpleContainer>
                        <div className="text-left w-full flex items-center justify-start gap-2">
                            <Bell className="text-[#9DBABA]"/>
                            <Title text="Notificações recentes" />
                        </div>
                        <div className="w-full flex flex-col items-center justify-center">
                            <BackgroundContainer>
                                <CircleIcon className="text-green-500"/>
                                <div>
                                    <SpanText text="Consulta confirmada"/>
                                    <p className="text-gray-400">
                                        Sua consulta com Dr. João Santos foi confirmada para 15/06/2024 às 14:30
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                        30 min atrás
                                    </p>
                                </div>
                            </BackgroundContainer>
                            <BackgroundContainer>
                                <CircleIcon className="text-yellow-500"/>
                                <div>
                                    <SpanText text="Lembrete de Medicamento"/>
                                    <p className="text-gray-400">
                                        Hora de tomar seu medicamento para pressão arterial
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                        1 hora atrás
                                    </p>
                                </div>
                            </BackgroundContainer>
                            <BackgroundContainer>
                                <CircleIcon className="text-red-500"/>
                                <div>
                                    <SpanText text="Resultado de Exame"/>
                                    <p className="text-gray-400">
                                        O resultado do seu exame de sangue está disponível
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                        3 horas atrás
                                    </p>
                                </div>
                            </BackgroundContainer>
                        </div>
                    </SimpleContainer>
                </div>
            </div>
        </div>
    )
}