import { gql, useLazyQuery } from '@apollo/client';

const ALL_DOCTORS = gql`
  query {
    allDoctors {
      DoctorId
      Name
    }
  }
`;

type AllDoctorsResponse = {
  allDoctors: {
    DoctorId: string;
    Name: string;
  }[];
};

export function useGetAllDoctors() {
  const [getAllDoctors, { loading, error, data }] = useLazyQuery<AllDoctorsResponse>(ALL_DOCTORS);

  return {
    getAllDoctors,
    loading,
    error,
    data: data?.allDoctors ?? [],
  };
}
