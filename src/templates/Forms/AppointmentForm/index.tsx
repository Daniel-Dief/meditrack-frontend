import { useRef, type FormEvent } from "react"
import Field from "../../../components/Field";
import Button from "../../../components/Button";

export default function AppointmentForm() {
    const [dateRef, doctorRef, patientRef] = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLSelectElement>(null),
        useRef<HTMLSelectElement>(null)
    ];

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log({
            date: dateRef.current?.value,
            doctor: doctorRef.current?.value,
            patient: patientRef.current?.value
        })
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full m-4 max-w-lg mx-auto p-4 bg-gray-200 rounded shadow-md space-y-4"
        >
            <Field
                inputRef={dateRef}
                type="date"
                name="Data da consulta"
            />
            <Field 
                inputRef={doctorRef}
                type="select"
                name="Médico"
                placeholder="Selecione um médico"
                options={[
                    { value: "1", label: "Dr. João" },
                    { value: "2", label: "Dr. Maria" },
                    { value: "3", label: "Dr. Pedro" },
                ]}
            />
            <Field 
                inputRef={patientRef}
                type="select"
                name="Paciente"
                placeholder="Selecione um paciente"
                options={[
                    { value: "1", label: "joao" },
                    { value: "2", label: "maria" },
                    { value: "3", label: "pedro" },
                ]}
            />
            <Button
                className="w-full"
                color="primary"
                size="lg"
            >
                Enviar
            </Button>
        </form>
    )
}