import React from "react";
import CardItem from "../components/CardItem/CardItem";
import s from "./Products.module.scss";

const Products = () => {
  return (
    <div className={s.wrapper}>
      <h1>Products:</h1>
      <div className={s.container}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </div>
  );
};

export default Products;
