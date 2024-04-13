"use client";
import { Button } from "@mui/material";
import s from "./GetMe.module.scss";

import React, { useEffect } from "react";
import axios from "axios";

const GetMe = () => {

  
  useEffect(() => {
    axios.get("http://localhost:1000/auth/getme").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className={s.wrapper}>
      <div>
        <h1>Profile:</h1>
        <p>Username</p>
        <p>Age</p>
        <p>Phone</p>
        <p>Email</p>
      </div>
      <Button
        className={s.button}
        variant="contained"
        style={{ background: "teal" }}
        href="#contained-buttons"
      >
        LogOut
      </Button>
    </div>
  );
};

export default GetMe;
