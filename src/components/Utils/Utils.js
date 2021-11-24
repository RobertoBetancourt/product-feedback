import React from 'react'
// Material UI
import { Button, CssBaseline, Grid, TextField } from '@mui/material'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles'
// React Hook Form
import { useController } from 'react-hook-form'

export function useCustomController (props) {
  const { name, control, rules, defaultValue, ...rest } = props
  const controllerFunctions = useController({ name, control, rules, defaultValue })
  return { ...controllerFunctions, ...rest }
}

export const CustomInput = ({ form, handleSubmit, onSubmit, button }) => {
  const formArray = Object.keys(form)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={3}
      >
        {formArray.map((field, index) => {
          const {
            field: { ref, value, ...inputProps },
            fieldState: { error },
            label,
            type
          } = form[field]

          return (
            <Grid key={index} item xs={12}>
              <TextField
                error={!!error}
                fullWidth
                helperText={error ? error.message : ''}
                inputRef={ref}
                label={label}
                type={type || 'text'}
                value={value || ''}
                {...inputProps}
              />
            </Grid>
          )
        })}
        <Grid item xs={12}>
          <Button type='submit' variant='contained' fullWidth>
            {button || 'Submit'}
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

export const CustomThemeProvider = (props) => {
  const { children } = props
  const theme = createTheme({
    palette: {
      primary: {
        main: '#C75AF6'
      },
      info: {
        main: '#3A4374'
      }
    },
    typography: {
      fontFamily: '"Jost", sans-serif',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      h6: {
        color: '#3A4374'
      },
      body1: {
        color: '#647196'
      }
    }
  })

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </>
  )
}

export const CustomButton = styled(Button)(({ theme }) => ({
  color: '#4661E6',
  borderRadius: 10,
  margin: 6,
  textTransform: 'none',
  fontWeight: 600,
  backgroundColor: '#F2F4FF',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#CFD7FF'
  }
}))

export const CustomSelectedButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  borderRadius: 10,
  margin: 6,
  textTransform: 'none',
  fontWeight: 600,
  backgroundColor: '#4661E6',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#4661E6'
  }
}))
