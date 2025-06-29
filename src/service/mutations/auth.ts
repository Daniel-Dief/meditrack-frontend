import { gql, useMutation } from '@apollo/client';
import { useAuthStore } from '../../store/auth';

const LOGIN_USER = gql`
  mutation loginUser($hash: String!) {
    loginUser(hash: $hash) {
      user {
        Login
        Status
        UserId
        UserType
      }
      token
    }
  }
`;

type LoginResponse = {
  loginUser: {
    user: {
      Login: string;
      Status: string;
      UserId: string;
      UserType: string;
    };
    token: string;
  };
};

export function useLoginUser() {
  const { setToken, setUser } = useAuthStore()
  const [mutate, { loading, error, data }] = useMutation<LoginResponse>(LOGIN_USER);

  const login = async (login: string, senha: string) => {
    const hash = btoa(`${login}:${senha}`);

    const response = await mutate({ variables: { hash } });

    if(response.data) {
      const { user, token } = response.data.loginUser;
      setUser(user);
      setToken(token);
    }

    return response.data?.loginUser;
  };

  return { login, loading, error, data };
}