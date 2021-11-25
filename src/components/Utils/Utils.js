import React from 'react'
// Material UI
import { Button, Container, CssBaseline, Grid, MenuItem, TextField } from '@mui/material'
import { createTheme, styled, ThemeProvider } from '@mui/material/styles'
// React Hook Form
import { useController } from 'react-hook-form'

// Form helpers
export function useCustomController (props) {
  const { name, control, rules, defaultValue, ...rest } = props
  const controllerFunctions = useController({ name, control, rules, defaultValue })
  return { ...controllerFunctions, ...rest }
}

export const CustomInput = ({ form, handleSubmit, onSubmit, onCancel, button, alignRight }) => {
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
            formState,
            type,
            options,
            ...otherProps
          } = form[field]

          let errorText = ''
          if (error) {
            if (error.type === 'maxLength') {
              errorText = 'You exceeded the maximum number of characters'
            } else {
              errorText = error.messagw
            }
          }
          return (
            <Grid key={index} item xs={12}>
              <TextField
                error={!!error}
                fullWidth
                helperText={errorText}
                inputRef={ref}
                type={type || 'text'}
                select={type === 'select'}
                value={value || ''}
                {...inputProps}
                {...otherProps}
              >
                {type === 'select' &&
                  options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
              </TextField>
            </Grid>
          )
        })}
        <Grid item xs />
        {onCancel &&
          <Grid item xs={3}>
            <Button
              style={{ textTransform: 'none' }}
              color='primary'
              variant='contained'
              fullWidth
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Grid>}
        <Grid item xs={4}>
          <Button
            style={{ textTransform: 'none' }}
            type='submit'
            color='secondary'
            variant='contained'
            fullWidth
          >
            {button || 'Submit'}
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}

// Style helpers
export const CustomThemeProvider = (props) => {
  const { children } = props
  const theme = createTheme({
    palette: {
      primary: {
        main: '#3A4374'
      },
      secondary: {
        main: '#AD1FEA'
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

export const CustomContainer = ({ children, maxWidth = 'md', paddingTop = 50 }) => {
  return (
    <div style={{ backgroundColor: '#F7F8FD', height: '100%', minHeight: '100vh' }}>
      <Container style={{ paddingTop: paddingTop, paddingBottom: 20 }} maxWidth={maxWidth}>
        {children}
      </Container>
    </div>
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

function stringToColor (string) {
  let hash = 0
  let i
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = '#'
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.substr(-2)
  }

  return color
}

export function stringAvatar (name) {
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
  }
}

// Filter and sorting helpers
export const filterFeedback = ({ feedback, filter }) => {
  if (filter === 'All') {
    return feedback
  }

  return feedback.filter(element => element.type === filter)
}

export const sortFeedback = ({ feedback, sort }) => {
  let sortedFeedback
  switch (sort) {
    case 'most-upvotes':
      sortedFeedback = feedback.sort((a, b) => a.votes < b.votes ? 1 : -1)
      break
    case 'least-upvotes':
      sortedFeedback = feedback.sort((a, b) => a.votes > b.votes ? 1 : -1)
      break
    case 'most-comments':
      sortedFeedback = feedback.sort((a, b) => a.comments < b.comments ? 1 : -1)
      break
    case 'least-comments':
      sortedFeedback = feedback.sort((a, b) => a.comments > b.comments ? 1 : -1)
      break
    default:
      sortedFeedback = feedback
      break
  }

  return sortedFeedback
}
