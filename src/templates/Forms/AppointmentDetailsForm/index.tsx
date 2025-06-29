import React, { useEffect, useRef } from 'react';
import { useGetAppointmentById } from '../../../service/querys/getAppointmentById';
import Field from '../../../components/Field';
import Button from '../../../components/Button';

import { useGetAllDoctors } from '../../../service/querys/getDoctors';
import { useGetAllPatients } from '../../../service/querys/getPatients';
import { useGetAllStatus } from '../../../service/querys/getStatus';

import { useUpdateAppointment } from '../../../service/mutations/updateAppointment';

type Props = {
  appointmentId: string;
};

export default function AppointmentEditForm({ appointmentId }: Props) {
  const { getAppointment, data, error } = useGetAppointmentById();
  const { update } = useUpdateAppointment();

  const dateRef = useRef<HTMLInputElement>(null);
  const doctorRef = useRef<HTMLSelectElement>(null);
  const patientRef = useRef<HTMLSelectElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);

  const { getAllDoctors, data: allDoctors } = useGetAllDoctors();
  const { getAllPatients, data: allPatients } = useGetAllPatients();
  const { getAllStatus, data: allStatus } = useGetAllStatus();

  useEffect(() => {
    getAllDoctors();
    getAllPatients();
    getAllStatus();
    if (appointmentId) {
      getAppointment({ variables: { id: appointmentId } });
    }
  }, [getAllDoctors, getAllPatients, getAllStatus, appointmentId, getAppointment]);

  if (error) return <p className="text-red-500">Erro ao carregar</p>;
  if (!data) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!dateRef.current || !doctorRef.current || !patientRef.current || !statusRef.current) {
      return;
    }

    const tempDate = new Date(dateRef.current.value);


    const newData = {
      AppointmentDate: tempDate.toISOString(),
      DoctorId: doctorRef.current?.value,
      PatientId: patientRef.current?.value,
      StatusId: statusRef.current?.value,
    };

    await update(appointmentId, newData).then((response) => {
      if (response?.AppointmentId) {
        alert('Consulta atualizada com sucesso!');
        window.location.href = '/';
      } else {
        alert('Erro ao atualizar consulta');
      }
    })
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full m-4 max-w-4xl mx-auto p-6 bg-gray-200 rounded shadow-md grid grid-cols-2 gap-6"
    >
      {/* Coluna esquerda: valores atuais */}
      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Data atual</label>
          <p className="p-2 bg-white rounded border">{data.AppointmentDate.split('T')[0]}</p>
        </div>
        <div>
          <label className="block font-semibold mb-1">Médico atual</label>
          <p className="p-2 bg-white rounded border">{data.Doctor?.Name ?? ''}</p>
        </div>
        <div>
          <label className="block font-semibold mb-1">Paciente atual</label>
          <p className="p-2 bg-white rounded border">{data.Patient?.Name ?? ''}</p>
        </div>
        <div>
          <label className="block font-semibold mb-1">Status atual</label>
          <p className="p-2 bg-white rounded border">{data.Status?.Name ?? ''}</p>
        </div>
      </div>

      {/* Coluna direita: campos editáveis */}
      <div className="space-y-4">
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
          options={allDoctors.map((d) => ({ value: d.DoctorId, label: d.Name }))}
        />

        <Field
          inputRef={patientRef}
          type="select"
          name="Paciente"
          placeholder="Selecione um paciente"
          options={allPatients.map((p) => ({ value: p.PatientId, label: p.Name }))}
        />

        <Field
          inputRef={statusRef}
          type="select"
          name="Status"
          placeholder="Selecione o status"
          options={allStatus.map((s) => ({ value: s.StatusId, label: s.Name }))}
        />

        <Button className="w-full" color="primary" size="lg" >
          Salvar Alterações
        </Button>
      </div>
    </form>
  );
}
