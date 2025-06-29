import { gql, useLazyQuery } from '@apollo/client';

const GET_APPOINTMENT = gql`
  query GetAppointment($id: ID!) {
    appointment(id: $id) {
      AppointmentDate
      Doctor {
        Name
      }
      Patient {
        Name
      }
      Status {
        Name
      }
    }
  }
`;

type Appointment = {
  AppointmentDate: string;
  Doctor: { Name: string };
  Patient: { Name: string };
  Status: { Name: string };
};

type GetAppointmentResponse = {
  appointment: Appointment;
};

export function useGetAppointmentById() {
  const [getAppointment, { loading, error, data }] =
    useLazyQuery<GetAppointmentResponse>(GET_APPOINTMENT);

  return {
    getAppointment,
    loading,
    error,
    data: data?.appointment,
  };
}
