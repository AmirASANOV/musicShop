import React from "react";
import BasketItem from "../components/BasketItem/BasketItem";
import s from "./basket.module.scss";

const Basket = () => {
  return (
    <div className={s.wrapper}>
      <h1>Ваша корзина:</h1>

      <BasketItem />
    </div>
  );
};

export default Basket;
