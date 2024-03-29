import React from "react";
import s from "./BasketItem.module.scss";
import Image from "next/image";

const BasketItem = () => {
  return (
    <div className={s.wrapper}>
      <Image
        src="/photo_2021-10-09_20-01-09.jpg"
        alt="Description of the image"
        sizes="(100%, 100%)"
        width={100}
        height={100}
      />

      <div className={s.text}>
        <div>
          <h3>Title</h3>
          <p>Description</p>
        </div>
        <p>4000</p>
      </div>
    </div>
  );
};

export default BasketItem;
