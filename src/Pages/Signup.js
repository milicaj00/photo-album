import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useState } from "react";

const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        if (
            data.get("name").length < 2 ||
            data.get("email").length < 2 ||
            data.get("password").length < 2
        ) {
            setError("Input not valid");
            return;
        }

        const emailRegex = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";

        if (!data.get("email").match(emailRegex)) {
            setError("Email not valid");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users"));

        if (users === null) {
            users = [];
        }

        const newUser = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password")
        };

        if (!users.includes(newUser)) users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        localStorage.setItem("currentUser", JSON.stringify(newUser));

        navigate("/posts");

        window.location.reload();
    };

    return (
        <Container component="main" maxWidth="xs" className="Signup">
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
                    Sign up
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    {error && <Alert severity="error">{error}</Alert>}
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
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

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/" variant="body2">
                                {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Signup;
