export type UserState = {
  token: string | null;
  isAuthenticated: boolean;
  user: {
    [string: string]: any;
    profile?: {
      [string: string]: any;
    };
  };
};
