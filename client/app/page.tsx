"use client";
import { useAppDispatch } from "./hooks/useDispatch";
import { useAppSelector } from "./hooks/useSelector";
import Products from "./products/page";
import { setToken } from "./store/authSlice";

export default function Home() {
  return (
    <main>
      <Products />
    </main>
  );
}
