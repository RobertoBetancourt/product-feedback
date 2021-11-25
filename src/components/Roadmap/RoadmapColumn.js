
import React from 'react'
// Components
import RoadmapCard from './RoadmapCard'
// Material UI
import { Typography } from '@mui/material'
import './Roadmap.css'

const RoadmapColumn = (props) => {
  const { columnDetails: { title, description, color }, cards } = props

  return (
    <div className='column-container'>
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
    </div>

  )
}
export default RoadmapColumn
