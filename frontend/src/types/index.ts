export type userType = {
  userName: string;
  userEmail: string;
  userPassword: string;
  userCity: string;
  userCountry: string;
  userPhoneNumber: number;
  isAuthenticated: boolean;
};

export type LoginContextType = {
  user: userType;
  login: (email: string, password: string) => void;
};
