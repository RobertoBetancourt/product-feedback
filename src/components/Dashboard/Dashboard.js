
import React, { useContext } from 'react'
// Components
import DashboardSidebar from './DashboardSidebar'
import DashboardHeader from './DashboardHeader'
// Context
import { LocalDatabase } from '../../localDatabase'
// Material UI
import { Grid } from '@mui/material'
import { CustomContainer, filterFeedback, sortFeedback } from '../Utils/Utils'
import FeedbackCard from '../Feedback/FeedbackCard'
import './Dashboard.css'

const Dashboard = (props) => {
  const { data: { feedback }, dispatch } = useContext(LocalDatabase)
  const [filter, setFilter] = React.useState('All')
  const [sort, setSort] = React.useState('most-upvotes')
  const [dataToShow, setDataToShow] = React.useState(feedback)

  React.useEffect(() => {
    const filteredData = filterFeedback({ feedback, filter })
    const sortedData = sortFeedback({ feedback: filteredData, sort })
    setDataToShow([...sortedData])
  }, [feedback, filter, sort])

  return (
    <CustomContainer maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <DashboardSidebar filter={filter} setFilter={setFilter} />
        </Grid>
        <Grid item xs={9}>
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

  // return (
  //   <CustomContainer maxWidth='lg'>
  //     <div className='dashboard-container'>
  //       <div className='dashboard-sidebar-container'>
  //         <DashboardSidebar filter={filter} setFilter={setFilter} />
  //       </div>
  //       <div className='dashboard-cards-container'>
  //         <DashboardHeader dataToShow={dataToShow} sort={sort} setSort={setSort} />
  //         {dataToShow.map(element =>
  //           <FeedbackCard
  //             key={element.id}
  //             setFilter={setFilter}
  //             dispatch={dispatch}
  //             info={element}
  //           />)}
  //       </div>
  //     </div>
  //   </CustomContainer>
  // )
}
export default Dashboard
