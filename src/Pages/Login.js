import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const Login = () => {
    const [error, setError] = useState("");

    const [passwordNotValid, setPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = event => {
        setPassword(false)
        setError('')

        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (data.get("email").length < 2 || data.get("password").length < 2) {
            setError("Input not valid");
            return;
        }

        const email = data.get("email");
        const pass = data.get("password");

        // const emailRegex = "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"

        // if(email.match(emailRegex)){
        //     setError("Email not valid");
        //     return;
        // }

        let users = JSON.parse(localStorage.getItem("users"));
        console.log(users);

        const currentUser = {
            email: data.get("email"),
            password: data.get("password")
        };

        let userExist = false;

        users.forEach(u => {
            if (u.email == email && u.password == pass) {
                localStorage.setItem(
                    "currentUser",
                    JSON.stringify(currentUser)
                );
               
                navigate("/posts");

                window.location.reload()
                
            } else if (u.email == email && u.password != pass) {
                setPassword(true);
            }
            else{
                setError("User does not exist");
            }
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                className="Login"
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {error && !passwordNotValid && <Alert severity="error">{error}</Alert>}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {passwordNotValid && (
                        <Alert severity="error">Password not valid</Alert>
                    )}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
