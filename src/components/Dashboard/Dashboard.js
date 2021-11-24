
import React, { useContext } from 'react'
// Components
import DashboardCard from './DashboardCard'
import DashboardSidebar from './DashboardSidebar'
import DashboardHeader from './DashboardHeader'
// Context
import { LocalDatabase } from '../../localDatabase'
// Material UI
import { Container, Grid } from '@mui/material'

const Dashboard = (props) => {
  const { data: { feedback }, dispatch } = useContext(LocalDatabase)
  const [filter, setFilter] = React.useState('All')
  const [sort, setSort] = React.useState('most-upvotes')
  const [dataToShow, setDataToShow] = React.useState(feedback)

  React.useEffect(() => {
    if (filter === 'All') {
      setDataToShow(feedback)
    } else {
      const feedbackToShow = feedback.filter(element => element.type === filter)
      setDataToShow(feedbackToShow)
    }
  }, [feedback, filter])

  const handleSort = (event) => {
    setSort(event.target.value)
  }

  return (
    <div style={{ backgroundColor: '#F7F8FD', height: '100%', minHeight: '100vh' }}>
      <Container style={{ paddingTop: 50, paddingBottom: 20 }} maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <DashboardSidebar filter={filter} setFilter={setFilter} />
          </Grid>
          <Grid item xs={9}>
            <DashboardHeader dataToShow={dataToShow} sort={sort} handleSort={handleSort} />
            {dataToShow.map(element => <DashboardCard filter={filter} setFilter={setFilter} dispatch={dispatch} key={element.id} info={element} />)}
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
export default Dashboard
