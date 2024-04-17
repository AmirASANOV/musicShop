"use client";
import { createSlice } from "@reduxjs/toolkit";
import dynamic from "next/dynamic";

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const initialState = {
  value: {
    token: token,
    isAuth: !!token,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.value.token = action.payload;
      localStorage.setItem("token", action.payload);
    },

    clearToken(state) {
      state.value.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
