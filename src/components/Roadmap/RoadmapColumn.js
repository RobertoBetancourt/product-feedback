
import React from 'react'
// Components
import RoadmapCard from './RoadmapCard'
// Material UI
import { Grid, Typography } from '@mui/material'

const RoadmapColumn = (props) => {
  const { columnDetails: { title, description, color }, cards } = props

  return (
    <Grid item xs={4}>
      <Typography variant='h6' style={{ fontSize: 19, fontWeight: 600 }}>
        {`${title} (${cards.length})`}
      </Typography>
      <Typography>
        {description}
      </Typography>
      {cards.map((card, index) => {
        return (
          <RoadmapCard
            key={index}
            info={card}
            color={color}
            category={title}
          />
        )
      })}
    </Grid>

  )
}
export default RoadmapColumn
