import React, { FC } from "react";
import s from "./CardItem.module.scss";
import { Button } from "@mui/material";

interface IProps {
  data: ICardItem;
}

type ICardItem = {
  imageUrl: string;
  name: string;
  price: number;
};

const CardItem: FC<IProps> = (props) => {
  console.log(props);
  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <picture>
          <img
            className={s.img}
            src={`${props.data.imageUrl}.jpg`}
            alt="logo"
          />
        </picture>
      </div>
      <h3 className={s.text}>{props.data.name}</h3>
      <p className={s.text}>Description</p>

      <div className={s.buy}>
        <p className={s.text}>{props.data.price}</p>
        <Button
          className={s.button}
          variant="contained"
          style={{ background: "teal" }}
          href="#"
        >
          buy
        </Button>
      </div>
    </div>
  );
};

export default CardItem;
