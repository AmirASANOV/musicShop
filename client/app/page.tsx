"use client";
import GetMe from "./getMe/page";
import { useAppSelector } from "./hooks/useSelector";
import Products from "./products/page";

export default function Home() {
  const token = useAppSelector((state: any) => state.authSlice.token);

  return (
    <main>
      <Products />
    </main>
  );
}
