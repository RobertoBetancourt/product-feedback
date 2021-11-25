import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import FeedbackTag from '../Feedback/FeedbackTag'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const DashboardSidebar = ({ filter, setFilter }) => {
  const tags = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

  return (
    <>
      <Card
        sx={{
          height: 150,
          display: 'flex',
          alignItems: 'flex-end',
          background: 'radial-gradient(circle at 100%, #E84D70, #A337F6, #28A7ED)'
        }}
      >
        <CardContent>
          <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'white' }}>
            Frontend Mentor
          </Typography>
          <Typography variant='subtitle1' sx={{ color: 'white' }} gutterBottom>
            Feedback Board
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          {tags.map(tag =>
            <FeedbackTag
              filter={filter}
              setFilter={setFilter}
              key={tag}
              variant='contained'
            >
              {tag}
            </FeedbackTag>)}
        </CardContent>
      </Card>
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Typography variant='h6' style={{ fontWeight: 600 }}>Roadmap</Typography>
          <div style={{ display: 'flex', marginTop: 10, flex: 1 }}>
            <div>
              <FiberManualRecordIcon sx={{ fontSize: 12, color: '#F49F85' }} />
            </div>
            <div style={{ display: 'flex', marginLeft: 10, flex: 1, justifyContent: 'space-between' }}>
              <Typography>Planned</Typography>
              <Typography>2</Typography>
            </div>
          </div>
          <div style={{ display: 'flex', flex: 1, marginTop: 10 }}>
            <div>
              <FiberManualRecordIcon sx={{ fontSize: 12, color: '#AD1FEA' }} />
            </div>
            <div style={{ display: 'flex', marginLeft: 10, flex: 1, justifyContent: 'space-between' }}>
              <Typography>In-Progress</Typography>
              <Typography>2</Typography>
            </div>
          </div>
          <div style={{ display: 'flex', flex: 1, marginTop: 10 }}>
            <div>
              <FiberManualRecordIcon sx={{ fontSize: 12, color: '#62BCFA' }} />
            </div>
            <div style={{ display: 'flex', marginLeft: 10, flex: 1, justifyContent: 'space-between' }}>
              <Typography>Live</Typography>
              <Typography>2</Typography>
            </div>
          </div>
          {/* <div>
            <FiberManualRecordIcon sx={{ fontSize: 12, color: '#AD1FEA' }} />
            <Typography>In-Progress</Typography>
          </div>
          <div>
            <FiberManualRecordIcon sx={{ fontSize: 12, color: '#62BCFA' }} />
            <Typography>Live</Typography>
          </div> */}
        </CardContent>
      </Card>
    </>
  )
}

export default DashboardSidebar
