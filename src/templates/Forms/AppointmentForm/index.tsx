import { useEffect, useRef, type FormEvent } from "react"
import Field from "../../../components/Field";
import Button from "../../../components/Button";
import { useGetAllDoctors } from "../../../service/querys/getDoctors";
import { useGetAllPatients } from "../../../service/querys/getPatients";
import { useCreateAppointment } from "../../../service/mutations/createAppointment";

export default function AppointmentForm() {
    const { create, data } = useCreateAppointment();
    const [dateRef, doctorRef, patientRef] = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLSelectElement>(null),
        useRef<HTMLSelectElement>(null)
    ];
    const { getAllDoctors, data: allDoctors } = useGetAllDoctors();
    const { getAllPatients, data: allPatients } = useGetAllPatients();

    useEffect(() => {
        getAllDoctors();
        getAllPatients();
    }, [getAllDoctors, getAllPatients]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(!dateRef.current?.value || !doctorRef.current?.value || !patientRef.current?.value) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if(new Date(dateRef.current.value) < new Date()) {
            alert("A data da consulta não pode ser no passado.");
            return;
        }

        const tempDate = new Date(dateRef.current.value);
        
        await create({
            AppointmentDate: tempDate.toISOString(),
            DoctorId: doctorRef.current?.value ?? "",
            PatientId: patientRef.current?.value ?? "",
            StatusId: "1"
        })

        if(data) {
            alert("Consulta agendada com sucesso!");
            window.location.href = "/";
        }
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
                options={allDoctors.map(doctor => ({
                    value: doctor.DoctorId,
                    label: doctor.Name
                }))}
            />
            <Field 
                inputRef={patientRef}
                type="select"
                name="Paciente"
                placeholder="Selecione um paciente"
                options={allPatients.map(patient => ({
                    value: patient.PatientId,
                    label: patient.Name
                }))}
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