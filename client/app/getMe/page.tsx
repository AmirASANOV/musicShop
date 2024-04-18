"use client";
import { Button } from "@mui/material";
import s from "./GetMe.module.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector } from "../hooks/useSelector";
import { useAppDispatch } from "../hooks/useDispatch";
import { clearToken } from "../store/authSlice";
import { useRouter } from "next/navigation";

interface IUser {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
}

const GetMe = () => {
  const token = localStorage.getItem("token");

  const dispatch = useAppDispatch();
  const [user, setUser] = useState<IUser>({} as IUser);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:1000/auth/getme", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUser(res.data);
        });
    }
  }, [token]);

  const logOut = () => {
    dispatch(clearToken());
    setUser({} as IUser);
    router.push("/");
  };

  return (
    <div className={s.wrapper}>
      <div>
        <h1>Profile:</h1>
        <p>Username: {user.name}</p>
        <p>Phone {user.phoneNumber}</p>
        <p>Email {user.email}</p>
      </div>
      <Button
        className={s.button}
        variant="contained"
        style={{ background: "teal" }}
        href="#contained-buttons"
        onClick={logOut}
      >
        LogOut
      </Button>
    </div>
  );
};

export default GetMe;
