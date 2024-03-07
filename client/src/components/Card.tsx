import React from "react";
import s from "./Card.module.scss";

const Card = () => {
  return (
    <div className={s.wrapper}>
      <img className={s.image} src="" alt="cardImg" />
      <p className={s.name}>name</p>
      <p className={s.description}>description</p>
    </div>
  );
};

export default Card;
