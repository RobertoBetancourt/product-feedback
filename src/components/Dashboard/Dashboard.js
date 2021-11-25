
import React, { useContext } from 'react'
// Components
import DashboardSidebar from './DashboardSidebar'
import DashboardHeader from './DashboardHeader'
import ResponsiveDrawer from './ResponsiveDrawer'
import FeedbackCard from '../Feedback/FeedbackCard'
// Context
import { LocalDatabase } from '../../localDatabase'
// Utils
import { CustomContainer, filterFeedback, sortFeedback } from '../Utils/Utils'
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
      <ResponsiveDrawer filter={filter} setFilter={setFilter} />
      <div className='dashboard-container'>
        <div className='dashboard-sidebar-container'>
          <div className='dashboard-sidebar-group'>
            <DashboardSidebar filter={filter} setFilter={setFilter} />
          </div>
        </div>
        <div className='dashboard-main-container'>
          <DashboardHeader dataToShow={dataToShow} sort={sort} setSort={setSort} />
          {dataToShow.map(element =>
            <FeedbackCard
              key={element.id}
              setFilter={setFilter}
              dispatch={dispatch}
              info={element}
            />)}
        </div>
      </div>
    </CustomContainer>
  )
}
export default Dashboard
