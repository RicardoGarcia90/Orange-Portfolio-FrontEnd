import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import UserContext from '../contexts/UserContext';

import { TextField, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import imgGoogle from '../assets/images/login/logo googleg 48dp.svg';
import classes from './Login.module.css';
import imgLogin from '../assets/images/login/loginImage.png';
import Register from './Register';

const GoogleButton = styled(Button)({
  display: 'flex',
  padding: '11px var(--1, 8px)',
  margin: '16px 0',

  alignSelf: 'center',
  gap: 'var(--3, 12px)',

  borderRadius: '2px',
  background: '#fff',
  boxShadow:
    '0px 1px 1px 0px rgba(0, 0, 0, 0.17), 0px 0px 1px 0px rgba(0, 0, 0, 0.08)',

  color: 'rgba(0, 0, 0, 0.54)',

  fontFamily: 'Roboto',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
  textTransform: 'none',
});

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { user, setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    let validationErrors = {};

    if (formData.email === null && formData.password === null) {
      isValid = false;
      validationErrors.email = 'Digite um email e uma senha';
    }

    if (formData.email === null || !formData.email.trim()) {
      isValid = false;
      validationErrors.email = 'Digite um email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = 'Digite um email valido';
    }

    if (!formData.password || !formData.password.trim()) {
      isValid = false;
      validationErrors.password = 'Digite uma senha';
    }

    if (isValid) {
      try {
        const response = await axios.post(
          `https://orangeportfolioapi.azurewebsites.net/api/v1/auth/login`,
          {
            email: formData.email,
            password: formData.password,
          },
          {
            headers: {
              'Acces-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            },
          }
        );
        const responseUser = response.data;
        // console.log(responseUser.token);
        // console.log(responseUser.user.name);
        // console.log(responseUser.user.lastName);

        if (responseUser) {
          setUser({
            token: responseUser.token,
            name: responseUser.user.name,
            lastName: responseUser.user.lastName,
            avatar: responseUser.user.avatar,
            nation: responseUser.user.nation,
          });

          console.log(`setUser: ${user}`);

          localStorage.setItem('orange-user', JSON.stringify(responseUser));

          console.log(`localStorage: ${localStorage}`);
        } else {
          isValid = false;
          validationErrors.email =
            'Usuário não encontrado, verifique seus dados ou cadastre-se';
        }

        navigate('/meuportfolio');
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
    setErrors(validationErrors);
    setValid(isValid);
  };

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('orange-user'));
    if (localUser) {
      setUser({
        token: localUser.token,
        name: localUser.user.name,
        lastName: localUser.user.lastName,
        avatar: localUser.user.avatar,
        nation: localUser.user.nation,
      });

      const currentPath = window.location.pathname;
      if (currentPath === '/') {
        navigate('/');
      } else {
        navigate('/meuportfolio');
      }
    }
  }, [navigate, setUser]);

  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={imgLogin} className={classes.imgLogin} alt="image login" />
      </div>
      <div className={classes.containerForm}>
        <form onSubmit={handleSubmit} className={classes.containerForm}>
          <Typography variant="h3" className={classes.titleLogin}>
            Entre no Orange Portfólio
          </Typography>

          {valid ? (
            <></>
          ) : (
            <span className={classes.spanError}>
              {errors.email}
              {errors.password}
            </span>
          )}

          {/* Login with google */}
          <GoogleButton
            className={classes.buttonGoogleRegister}
            variant="contained"
          >
            <img src={imgGoogle} alt="google logo" />
            Entrar com Google
          </GoogleButton>

          {/* Email */}
          <TextField
            name="email"
            id="outlined-basic"
            label="Email address"
            sx={{ m: 1, width: '100%' }}
            variant="outlined"
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />

          {/* Password */}
          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              onChange={(event) =>
                setFormData({ ...formData, password: event.target.value })
              }
              name="password"
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <Button
            type="submit"
            className={classes.buttonRegister}
            variant="contained"
            color="secondary"
            sx={{
              width: '100%',
              height: '50px',
              margin: '8px',
            }}
          >
            Entrar
          </Button>
        </form>
        <Link to="/register" className={classes.linkRegister}>
          <Typography variant="subtitle1">Cadastre-se</Typography>
        </Link>
      </div>
    </div>
  );
};

export default Login;
