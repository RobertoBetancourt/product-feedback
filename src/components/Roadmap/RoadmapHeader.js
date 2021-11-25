import React from 'react'
// Material UI
import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
// React Router
import { useNavigate } from 'react-router'

const innerTheme = createTheme({
  palette: {
    secondary: {
      main: '#C75AF6'
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
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: 'white'
        }
      }
    }
  }
})

const RoadmapHeader = (props) => {
  const navigate = useNavigate()

  return (
    <ThemeProvider theme={innerTheme}>
      <Card sx={{ backgroundColor: '#373F68' }}>
        <CardContent>
          <Grid columns={20} container spacing={0}>
            <Grid item xs={12}>
              <Button
                onClick={() => navigate('/')}
                sx={{ textTransform: 'none', color: 'white' }}
                startIcon={<ChevronLeftIcon />}
              >
                Go Back
              </Button>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: 'flex' }}>
                <Typography sx={{ marginLeft: 1.5, fontWeight: 600, color: 'white', fontSize: 20 }}>
                  Roadmap
                </Typography>
              </div>
            </Grid>

          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default RoadmapHeader
