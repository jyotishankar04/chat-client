import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface utils {
  theme: string;
}

const theme = localStorage.getItem("theme");

console.log(theme);

const initialState: utils = {
  theme: String(theme),
};

export const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    toggleTheme: (state, payload: { payload: string }) => {
      state.theme = payload.payload;
      localStorage.setItem("theme", String(state.theme));
    },
  },
});

export const { toggleTheme } = utilSlice.actions;

export const selectUtil = (state: RootState) => {
  return state.util.theme;
};

export default utilSlice.reducer;
