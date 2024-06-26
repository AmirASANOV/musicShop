"use client";
import React, { FC } from "react";
import s from "./BasketItem.module.scss";
import Image from "next/image";

interface IProps {
  data: any;
}
const BasketItem: FC<IProps> = ({ data }) => {
  return (
    <div className={s.wrapper}>
      <Image
        src={`${data.imageUrl}.jpg`}
        alt="Description of the image"
        sizes="(100%, 100%)"
        width={100}
        height={100}
      />

      <div className={s.text}>
        <div>
          <h3>{data.title}</h3>
          <p>Description</p>
        </div>
        <p>{data.price}</p>
      </div>
    </div>
  );
};

export default BasketItem;
