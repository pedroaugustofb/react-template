export type User = {
  _id: string;
  name: string;
  last_name: string;
  email: string;
};

export type AuthStore = {
  user: User | null;
};

export type AuthStoreActions = {
  login: (user: User) => void;
  logout: () => void;
};

export type LoginDTO = {
  email: string;
  password: string;
};
