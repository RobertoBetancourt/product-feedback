
import React, { useContext } from 'react'
// Components
import RoadmapColumn from './RoadmapColumn'
import RoadmapHeader from './RoadmapHeader'
// Context
import { LocalDatabase } from '../../localDatabase'
// Material UI
import { Grid } from '@mui/material'
import { CustomContainer } from '../Utils/Utils'

const Roadmap = (props) => {
  const { data: { roadmap } } = useContext(LocalDatabase)

  const roadmapInformation = [
    {
      key: 'planned',
      title: 'Planned',
      description: 'Ideas prioritized for research',
      color: '#F49F85'
    },
    {
      key: 'inProgress',
      title: 'In-Progress',
      description: 'Currently being developed',
      color: '#AD1FEA'
    },
    {
      key: 'live',
      title: 'Live',
      description: 'Released features',
      color: '#62BCFA'
    }
  ]

  return (
    <CustomContainer paddingTop={20} maxWidth='lg'>
      <Grid sx={{ marginBottom: 3 }} container spacing={4}>
        <Grid item xs={12}>
          <RoadmapHeader />
        </Grid>
        {roadmapInformation.map((element, index) => {
          return (
            <RoadmapColumn
              key={index}
              columnDetails={element}
              cards={roadmap[element.key]}
            />
          )
        })}
      </Grid>
    </CustomContainer>
  )
}
export default Roadmap
