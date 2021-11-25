
import React from 'react'
// Components
import DashboardSidebar from './DashboardSidebar'
// Material UI
import { AppBar, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import './Dashboard.css'

const ResponsiveDrawer = ({ filter, setFilter }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <AppBar
        position='fixed'
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap sx={{ flexGrow: 1 }} component='div'>
            Home
          </Typography>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }
        }}
        anchor='right'
      >
        <DashboardSidebar filter={filter} setFilter={setFilter} />
      </Drawer>
    </>
  )
}
export default ResponsiveDrawer
