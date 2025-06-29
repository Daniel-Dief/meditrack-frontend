import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  Login?: string;
  Status?: string;
  UserId?: string;
  UserType?: string;
}

type State = {
  user: User;
  token?: string;
};

type Action = {
  setUser: (user: User) => void;
  setToken: (token: string) => void;
};

export const useAuthStore = create<State & Action>()(
  persist(
    (set) => ({
      user: {
        Login: undefined,
        Status: undefined,
        UserId: undefined,
        UserType: undefined
      },
      token: undefined,

      setUser: (user: User) => set({ user }),
      setToken: (token: string) => set({ token: "Bearer " + token })
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ user: state.user, token: state.token })
    }
  )
);
