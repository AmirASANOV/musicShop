import { Button } from "@mui/material";
import s from "./GetMe.module.scss";

import React from "react";

const GetMe = () => {
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
