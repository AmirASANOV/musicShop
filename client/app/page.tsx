"use client";
import React, { useEffect, useState } from "react";
import s from "./Products.module.scss";
import axios from "axios";
import CardItem from "@/components/CardItem/CardItem";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://662043b43bf790e070af6c86.mockapi.io/items")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className={s.wrapper}>
      <h1>Products:</h1>
      <div className={s.container}>
        {data.map((item: any) => (
          <CardItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
