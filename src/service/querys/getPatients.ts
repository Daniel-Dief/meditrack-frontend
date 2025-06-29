import { gql, useLazyQuery } from '@apollo/client';

const ALL_PATIENTS = gql`
  query GetAllPatients {
    allPatients {
      PatientId
      Name
    }
  }
`;

type AllPatientsResponse = {
  allPatients: {
    PatientId: string;
    Name: string;
  }[];
};

export function useGetAllPatients() {
  const [getAllPatients, { loading, error, data }] = useLazyQuery<AllPatientsResponse>(ALL_PATIENTS);

  return {
    getAllPatients,
    loading,
    error,
    data: data?.allPatients ?? [],
  };
}
