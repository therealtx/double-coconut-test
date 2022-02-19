import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { UserState } from "./types";

const initialState: UserState = {
  user: {
    profile: {},
  },
  token: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthenticated(state: UserState, { payload }: PayloadAction<boolean>) {
      state.isAuthenticated = payload;
    },
    setUser(state: UserState, { payload }: any) {
      state.user = payload;
    },
    setToken(state: UserState, { payload }: PayloadAction<string>) {
      state.token = payload;
    },
    resetUser: () => initialState,
    updateUser: (state: UserState, { payload }: any) => {
      state.user = {
        ...state.user,
        ...payload,
      };
    },
  },
});

export const { setAuthenticated, resetUser, setUser, setToken, updateUser } = userSlice.actions;

export default userSlice.reducer;
