"use client";
import { AppBar, Icon, Toolbar } from "@mui/material";
import Link from "next/link";
import s from "./Header.module.scss";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useAppSelector } from "@/app/hooks/useSelector";
import { useEffect, useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const token = useAppSelector((state) => state.authSlice.token);

  useEffect(() => {
    if (token) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [token]);

  return (
    <div>
      <AppBar position="static" sx={{ background: "teal" }}>
        <Toolbar className={s.header}>
          <Link href="/getMe">
            <AccountBoxIcon style={{ color: "#fff" }} />
          </Link>

          <div className="links">
            <Link className={s.link} href="/">
              Home
            </Link>
            {!isVisible && (
              <Link className={s.link} href="/login">
                Login
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
