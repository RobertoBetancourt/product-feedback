import React from 'react'
// Material UI
import { Button, Card, CardContent, Grid, MenuItem, Select, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'

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

const DashboardHeader = (props) => {
  const { dataToShow, sort, handleSort } = props

  return (
    <ThemeProvider theme={innerTheme}>
      <Card sx={{ backgroundColor: '#373F68', marginBottom: 2 }}>
        <CardContent>
          <Grid columns={20} container spacing={3}>
            <Grid item xs={5}>
              <div style={{ display: 'flex' }}>
                <SettingsSuggestIcon style={{ marginRight: 10, color: 'white' }} />
                <Typography sx={{ fontWeight: 600, color: 'white', fontSize: 20 }}>
                  {dataToShow.length} Suggestions
                </Typography>
              </div>
            </Grid>
            <Grid item xs={11}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  sx={{
                    fontWeight: 400,
                    color: '#F2F4FE',
                    fontSize: 16,
                    marginRight: 2
                  }}
                >
                  Sort by:
                </Typography>
                <Select
                  disableUnderline
                  value={sort}
                  onChange={handleSort}
                  variant='standard'
                  sx={{ fontWeight: 600, color: '#F2F4FE', fontSize: 16 }}
                  classes={{ root: 'test' }}
                >
                  <MenuItem value='most-upvotes'>Most Upvotes</MenuItem>
                  <MenuItem value='least-upvotes'>Least Upvotes</MenuItem>
                  <MenuItem value='most-comments'>Most Comments</MenuItem>
                  <MenuItem value='least-comments'>Least Comments</MenuItem>
                </Select>
              </div>
            </Grid>
            <Grid item xs={4}>
              <Button
                style={{ textTransform: 'none' }}
                color='secondary'
                variant='contained'
              >
                + Add Feedback
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default DashboardHeader
