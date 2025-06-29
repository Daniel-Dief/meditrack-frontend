import { gql, useMutation } from '@apollo/client';

const CREATE_APPOINTMENT = gql`
mutation CreateAppointment($input: CreateAppointmentInput!) {
    createAppointment(input: $input) {
      AppointmentId
    }
  }
`;

type AppointmentInput = {
  AppointmentDate: string;
  DoctorId: string;
  PatientId: string;
  StatusId: string;
};

type CreateAppointmentResponse = {
  createAppointment: {
    AppointmentId: string;
  };
};

export function useCreateAppointment() {
  const [mutate, { loading, error, data }] =
    useMutation<CreateAppointmentResponse>(CREATE_APPOINTMENT);

  const create = async (input: AppointmentInput) => {
    const response = await mutate({ variables: { input } });

    return response.data?.createAppointment;
  };

  return { create, loading, error, data };
}
