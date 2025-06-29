import { gql, useMutation } from '@apollo/client';

const UPDATE_APPOINTMENT = gql`
  mutation UpdateAppointment($id: ID!, $input: UpdateAppointmentInput!) {
    updateAppointment(id: $id, input: $input) {
      AppointmentId
    }
  }
`;

type UpdateAppointmentInput = {
  AppointmentDate: string;
  DoctorId: number | string;
  PatientId: number | string;
  StatusId: number | string;
};

type UpdateAppointmentResponse = {
  updateAppointment: {
    AppointmentId: string;
  };
};

export function useUpdateAppointment() {
  const [mutate, { loading, error, data }] = useMutation<UpdateAppointmentResponse>(UPDATE_APPOINTMENT);

  const update = async (id: string | number, input: UpdateAppointmentInput) => {
    const response = await mutate({ variables: { id, input } });
    return response.data?.updateAppointment;
  };

  return { update, loading, error, data };
}
