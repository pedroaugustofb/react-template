import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { User, AuthStore, AuthStoreActions } from "../types";

const initial_state: AuthStore = {
  user: null,
};

const useAuthStore = create<AuthStore & AuthStoreActions>()(
  devtools(
    persist(
      (set) => ({
        ...initial_state,
        login: (user: User) => set({ user }),
        logout: () => set({ user: null }),
      }),
      {
        name: "job-hours-user",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useAuthStore;
