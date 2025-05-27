import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IUserStateProps {
  accessToken: string;
  id: string;
  isLogin: boolean;
}

export const initialState: IUserStateProps = {
  accessToken: "",
  id: "",
  isLogin: false,
};

export const User = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setAccessToken, setId, setIsLogin } = User.actions;
