import { gql, useLazyQuery } from '@apollo/client';

const ALL_STATUS = gql`
  query {
    allStatus {
      StatusId
      Name
    }
  }
`;

type AllStatusResponse = {
  allStatus: {
    StatusId: string;
    Name: string;
  }[];
};

export function useGetAllStatus() {
  const [getAllStatus, { loading, error, data }] = useLazyQuery<AllStatusResponse>(ALL_STATUS);

  return {
    getAllStatus,
    loading,
    error,
    data: data?.allStatus ?? [],
  };
}
