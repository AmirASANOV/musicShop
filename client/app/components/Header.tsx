import { AppBar, Toolbar } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <AppBar position="static" sx={{ background: "#063970" }}>
        <Toolbar>
          <Link href="/">Home</Link>
          <Link href="/login">Login</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
