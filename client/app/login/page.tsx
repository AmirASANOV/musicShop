import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import Link from "next/link";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <TextField
          label="Username"
          placeholder="Enter username"
          variant="outlined"
          fullWidth
          required
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
        />

        <Button
          type="submit"
          variant="contained"
          style={{ ...btnstyle, background: "teal" }}
          fullWidth
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
