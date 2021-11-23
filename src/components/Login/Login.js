import React from 'react'
// Material UI
import { Avatar, Box, Container, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
// React Hook Form
import { useForm } from 'react-hook-form'
// Utils
import { CustomInput, useCustomController } from '../Utils/Utils'

const Login = (props) => {
  const { control, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  const form = {
    email: useCustomController({
      name: 'email',
      control,
      rules: { required: 'El email es requerido' },
      label: 'Email',
      type: 'text'
    }),
    password: useCustomController({
      name: 'password',
      control,
      rules: { required: 'La contraseña es requerida' },
      label: 'Password',
      type: 'password'
    })
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          height: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5' style={{ margin: '1rem' }}>
          Login
        </Typography>
        <CustomInput
          form={form}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          button='Login'
        />
      </Box>
    </Container>
  )
}

export default Login
