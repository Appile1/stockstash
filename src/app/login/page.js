"use client";
import React, { useState } from "react";
import { useNavigate } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth, GoggleProvider, db, storage } from "../firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const defaultTheme = createTheme();

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and signup
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const SigninWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      navigate("/"); // Redirect to home on successful login
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  const SignGoogle = async () => {
    try {
      await signInWithPopup(auth, GoggleProvider);
      navigate("/"); // Redirect to home on successful login
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSignUp) {
      await HandleSignUp();
    } else {
      SigninWithEmail();
    }
  };

  const HandleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      const file = event.target[3].files[0]; // Assuming file input is the 4th input element

      const storageRef = ref(storage, loginData.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (error) => {
          console.error("Storage Error:", error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await updateProfile(res.user, {
            displayName: loginData.name,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, "Users", res.user.uid), {
            Name: res.user.displayName,
            uid: res.user.uid,
            email: res.user.email,
            photoURL: res.user.photoURL,
          });
          await setDoc(doc(db, "userChats", res.user.uid), {});
          navigate("/");
        }
      );
    } catch (error) {
      console.error("Sign Up Error:", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            {isSignUp && (
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={loginData.name}
                onChange={handleInputChange}
              />
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus={!isSignUp}
              value={loginData.email}
              onChange={handleInputChange}
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
              value={loginData.password}
              onChange={handleInputChange}
            />
            {isSignUp && (
              <TextField
                margin="normal"
                required
                fullWidth
                name="file"
                label="Profile Picture"
                type="file"
                id="file"
              />
            )}
            {!isSignUp && (
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            {!isSignUp && (
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
                onClick={SignGoogle}
              >
                Sign In with Google
              </Button>
            )}
            <Grid container>
              <Grid item xs>
                {!isSignUp && (
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                )}
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
