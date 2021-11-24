import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import FeedbackTag from './FeedbackTag'

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
    </>
  )
}

export default DashboardSidebar
