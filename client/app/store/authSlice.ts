"use client";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: {
    token: null,
    isAuth: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.value.token = action.payload;
      localStorage.setItem("token", action.payload);
      state.value.isAuth = true;
    },

    clearToken(state) {
      state.value.token = null;
      localStorage.removeItem("token");
      state.value.isAuth = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
