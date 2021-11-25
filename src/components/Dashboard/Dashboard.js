
import React, { useContext } from 'react'
// Components
import DashboardSidebar from './DashboardSidebar'
import DashboardHeader from './DashboardHeader'
// Context
import { LocalDatabase } from '../../localDatabase'
// Material UI
import { AppBar, Drawer, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { CustomContainer, filterFeedback, sortFeedback } from '../Utils/Utils'
import FeedbackCard from '../Feedback/FeedbackCard'
import './Dashboard.css'
import MenuIcon from '@mui/icons-material/Menu'
const drawerWidth = 240

const Dashboard = (props) => {
  const { data: { feedback }, dispatch } = useContext(LocalDatabase)
  const [filter, setFilter] = React.useState('All')
  const [sort, setSort] = React.useState('most-upvotes')
  const [dataToShow, setDataToShow] = React.useState(feedback)

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  React.useEffect(() => {
    const filteredData = filterFeedback({ feedback, filter })
    const sortedData = sortFeedback({ feedback: filteredData, sort })
    setDataToShow([...sortedData])
  }, [feedback, filter, sort])

  return (
    <CustomContainer maxWidth='lg'>
      <AppBar
        position='fixed'
        sx={{ display: { xs: 'block', sm: 'none' } }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap sx={{ flexGrow: 1 }} component='div'>
            Responsive drawer
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
      <Grid container spacing={3}>
        <Grid sx={{ display: { xs: 'none', sm: 'block' } }} item lg={3}>
          <Grid item container direction='row' spacing={3} alignItems='center'>
            <DashboardSidebar filter={filter} setFilter={setFilter} />
          </Grid>
        </Grid>
        <Grid item sm={12} lg={9}>
          <DashboardHeader dataToShow={dataToShow} sort={sort} setSort={setSort} />
          {dataToShow.map(element =>
            <FeedbackCard
              key={element.id}
              setFilter={setFilter}
              dispatch={dispatch}
              info={element}
            />)}
        </Grid>
      </Grid>
    </CustomContainer>
  )
}
export default Dashboard
