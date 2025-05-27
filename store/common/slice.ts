import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CommonStateProps {
  toastMsg: string;
}

export const initialState: CommonStateProps = {
  toastMsg: "",
};

export const commonSlice = createSlice({
  name: "showToast",
  initialState,
  reducers: {
    setShowToastMessage: (state, action: PayloadAction<string>) => {
      state.toastMsg = action.payload;
    },
  },
});

export const { setShowToastMessage } = commonSlice.actions;
