import { gql, useLazyQuery } from '@apollo/client';

const ALL_APPOINTMENTS = gql`
  query GetAllAppointments {
    allAppointments {
      AppointmentId
      Doctor {
        Name
      }
      AppointmentDate
      Status {
        Name
      }
      Patient {
        Name
      }
    }
  }
`;

type Appointment = {
  AppointmentId: string;
  Doctor: {
    Name: string;
  };
  AppointmentDate: string;
  Status: {
    Name: string
  },
  Patient: {
    Name: string;
  }
};

type AllAppointmentsResponse = {
  allAppointments: Appointment[];
};

export function useGetAllAppointments() {
  const [getAllAppointments, { loading, error, data }] = useLazyQuery<AllAppointmentsResponse>(ALL_APPOINTMENTS);

  return {
    getAllAppointments,
    loading,
    error,
    data: data?.allAppointments ?? [],
  };
}
