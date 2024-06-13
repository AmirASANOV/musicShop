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
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          background: "#eeefef",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1>Акция:</h1>
        <div>
          {
            <CardItem
              data={{
                id: 0,
                imageUrl: "/images/1",
                name: "Гитара акустическая Fender",
                price: 13000,
              }}
            />
          }
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ marginBottom: "20px" }}>Популярное:</h1>

        <div style={{ display: "flex", columnGap: "20px" }}>
          <CardItem
            key="3"
            data={{
              id: 0,
              imageUrl: "/images/3",
              name: "Барабан Максым Шоро",
              price: 13000,
            }}
          />
          <CardItem
            key="3"
            data={{
              id: 0,
              imageUrl: "/images/2",
              name: "Пианино Джалал-Абад",
              price: 9000,
            }}
          />
        </div>
      </div>
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
