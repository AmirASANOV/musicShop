import React from "react";
import s from "./CardItem.module.scss";

const CardItem = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <picture>
          <img
            className={s.img}
            src="/photo_2021-10-09_20-01-09.jpg"
            alt="logo"
          />
        </picture>
      </div>
      <h3 className={s.text}>Title</h3>
      <p className={s.text}>Description</p>
      <p className={s.text}>4000</p>
    </div>
  );
};

export default CardItem;
