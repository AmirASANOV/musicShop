import { AppBar, Toolbar } from "@mui/material";
import Link from "next/link";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <div>
      <AppBar position="static" sx={{ background: "#063970" }}>
        <Toolbar>
          <Link className={s.link} href="/">
            Home
          </Link>
          <Link className={s.link} href="/login">
            Login
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
