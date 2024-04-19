import React, { FC } from "react";
import s from "./CardItem.module.scss";
import { Button } from "@mui/material";
import { useAppDispatch } from "@/app/hooks/useDispatch";
import { addBasket } from "@/app/store/basketSlice";

interface IProps {
  data: ICardItem;
}

type ICardItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

const CardItem: FC<IProps> = (props) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const data = {
      id: props.data.id,
      imageUrl: props.data.imageUrl,
      title: props.data.name,
      price: props.data.price,
    };
    dispatch(addBasket(data));
    setIsClicked(true);
  };

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
        {!isClicked ? (
          <Button
            className={s.button}
            variant="contained"
            style={{ background: "teal" }}
            onClick={handleClick}
            href="#"
          >
            buy
          </Button>
        ) : (
          <p>Clicked</p>
        )}
      </div>
    </div>
  );
};

export default CardItem;
