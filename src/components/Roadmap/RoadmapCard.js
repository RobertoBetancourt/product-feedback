
import React from 'react'
// Components
import FeedbackTag from '../Feedback/FeedbackTag'
// Material UI
import { Card, CardContent, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const RoadmapCard = ({ category, info, color = '#3A4374' }) => {
  return (
    <Card
      sx={{
        marginTop: 3,
        paddingLeft: 2,
        paddingRight: 2,
        borderTop: 3,
        borderTopColor: color
      }}
    >
      <CardContent>
        <div style={{ display: 'flex', marginTop: 10, flex: 1 }}>
          <div>
            <FiberManualRecordIcon sx={{ fontSize: 12, color: color }} />
          </div>
          <div style={{ display: 'flex', marginLeft: 10, marginRight: 10, marginBottom: 8, flex: 1 }}>
            <Typography>{category}</Typography>
          </div>
        </div>
        <Typography sx={{ fontWeight: 600, fontSize: 18 }} variant='h6'>{info.title}</Typography>
        <Typography sx={{ color: '#647196' }}>{info.description}</Typography>
        <FeedbackTag variant='contained'>{category}</FeedbackTag>
      </CardContent>
    </Card>

  )
}
export default RoadmapCard
