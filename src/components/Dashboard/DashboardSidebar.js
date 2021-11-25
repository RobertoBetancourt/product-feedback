import React from 'react'
import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import FeedbackTag from '../Feedback/FeedbackTag'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { useNavigate } from 'react-router'

const DashboardSidebar = ({ filter, setFilter }) => {
  const navigate = useNavigate()
  const tags = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

  return (
    <>
      <Grid item xs={12} sm={3} md={4} lg={12}>
        <Card
          sx={{
            height: 170,
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
      </Grid>
      <Grid item xs={12} sm={5} md={4} lg={12}>
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
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={12}>
        <Card sx={{ marginTop: 2 }}>
          <CardContent>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h6' style={{ fontWeight: 600 }}>Roadmap</Typography>
              <Button onClick={() => navigate('/roadmap')} variant='text' style={{ minWidth: 0, textTransform: 'none', textDecoration: 'underline', color: '#4661E6' }}>View</Button>
            </div>
            <div style={{ display: 'flex', marginTop: 10, flex: 1 }}>
              <div>
                <FiberManualRecordIcon sx={{ fontSize: 12, color: '#F49F85' }} />
              </div>
              <div style={{ display: 'flex', marginLeft: 10, marginRight: 10, flex: 1, justifyContent: 'space-between' }}>
                <Typography>Planned</Typography>
                <Typography>2</Typography>
              </div>
            </div>
            <div style={{ display: 'flex', flex: 1, marginTop: 10 }}>
              <div>
                <FiberManualRecordIcon sx={{ fontSize: 12, color: '#AD1FEA' }} />
              </div>
              <div style={{ display: 'flex', marginLeft: 10, marginRight: 10, flex: 1, justifyContent: 'space-between' }}>
                <Typography>In-Progress</Typography>
                <Typography>2</Typography>
              </div>
            </div>
            <div style={{ display: 'flex', flex: 1, marginTop: 10 }}>
              <div>
                <FiberManualRecordIcon sx={{ fontSize: 12, color: '#62BCFA' }} />
              </div>
              <div style={{ display: 'flex', marginLeft: 10, marginRight: 10, flex: 1, justifyContent: 'space-between' }}>
                <Typography>Live</Typography>
                <Typography>2</Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default DashboardSidebar
