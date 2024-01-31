import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { TextField, Typography, Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';

import imgRegister from '../assets/images/login/registerImage.png';
import classes from '../Pages/Register.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    let validationErrors = {};

    if (formData.firstName === '' || formData.firstName === null) {
      isValid = false;
      validationErrors.firstName = 'Digite seu nome';
    }

    if (formData.lastName === '' || formData.lastName === null) {
      isValid = false;
      validationErrors.lastName = 'Digite seu sobrenome';
    }

    if (formData.email === '' || formData.email === null) {
      isValid = false;
      validationErrors.email = 'Digite seu sobrenome';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      validationErrors.email = 'Digite um email valido';
    }

    if (formData.password === '' || formData.password === null) {
      isValid = false;
      validationErrors.password = 'Digite uma senha';
    } else if (formData.password.length < 6) {
      isValid = false;
      validationErrors.password = 'A senha deve ter no mínimo 6 caracteres';
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (Object.keys(validationErrors).length === 0) {
      axios
        .post('http://localhost:8000/users', formData)
        .then((result) => {
          setShowAlert(true);
          setTimeout(() => {
            navigate('/');
          }, 2000);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={classes.containerRegisterPage}>
      <div className={classes.imgContainer}>
        <img src={imgRegister} className={classes.imgLogin} alt="image login" />
      </div>
      <div className={classes.formContainerPage}>
        {showAlert && (
          <Alert
            variant="filled"
            severity="success"
            className={classes.alertSuccess}
          >
            Cadastro feito com sucesso
          </Alert>
        )}
        <form onSubmit={handleSubmit} className={classes.containerFormRegister}>
          <Typography
            variant="h3"
            className={classes.tituloCadastrese}
            sx={{
              marginBottom: '20px',
            }}
          >
            Cadastre-se
          </Typography>

          {valid ? (
            <></>
          ) : (
            <span className={classes.spanError}>
              {errors.firstName} {errors.lastName} {errors.email}
              {errors.password}
            </span>
          )}

          {/* FirstName */}
          <TextField
            id="outlined-basic"
            label="Nome"
            sx={{ m: 1, width: '100%' }}
            variant="outlined"
            className={classes.nameInput}
            name="firstName"
            onChange={(event) =>
              setFormData({ ...formData, firstName: event.target.value })
            }
          />

          {/* lastName */}
          <TextField
            id="outlined-basic"
            label="Sobrenome*"
            sx={{ m: 1, width: '100%' }}
            variant="outlined"
            className={classes.lastNameInput}
            name="lastName"
            onChange={(event) =>
              setFormData({ ...formData, lastName: event.target.value })
            }
          />

          {/* Email */}
          <TextField
            id="outlined-basic"
            label="Email address"
            sx={{ m: 1, width: '100%' }}
            variant="outlined"
            className={classes.emailInput}
            name="email"
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />

          {/* Password */}
          <FormControl
            className={classes.passwordInput}
            sx={{ m: 1, width: '100%' }}
            variant="outlined"
          >
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
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
