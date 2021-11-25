
import React, { useContext } from 'react'
// Components
import RoadmapColumn from './RoadmapColumn'
import RoadmapHeader from './RoadmapHeader'
// Context
import { LocalDatabase } from '../../localDatabase'
// Material UI
import { Container, Tab, Tabs } from '@mui/material'
import { CustomContainer } from '../Utils/Utils'
import useMediaQuery from '@mui/material/useMediaQuery'
import './Roadmap.css'

const Roadmap = (props) => {
  const { data: { roadmap } } = useContext(LocalDatabase)
  const matches = useMediaQuery('(max-width:600px)')
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  console.log({ matches })
  const roadmapInformation = [
    {
      key: 'planned',
      title: 'Planned',
      description: 'Ideas prioritized for research',
      color: '#F49F85',
      index: 0
    },
    {
      key: 'inProgress',
      title: 'In-Progress',
      description: 'Currently being developed',
      color: '#AD1FEA',
      index: 1
    },
    {
      key: 'live',
      title: 'Live',
      description: 'Released features',
      color: '#62BCFA',
      index: 2
    }
  ]

  return (
    <CustomContainer paddingTop={20} maxWidth='lg'>
      <div className='roadmap-container'>
        <div className='header-container'>
          <RoadmapHeader />
        </div>

        {matches &&
          <>
            <Container sx={{ ml: matches ? 3.5 : 0 }}>
              <Tabs value={value} variant='fullWidth' onChange={handleChange}>
                <Tab label='Planned' />
                <Tab label='In-Progress' />
                <Tab label='Live' />
              </Tabs>

              <RoadmapColumn
                columnDetails={roadmapInformation[value]}
                cards={roadmap[roadmapInformation[value].key]}
              />
            </Container>
          </>}

        {!matches &&
          roadmapInformation.map((element, index) => {
            return (
              <RoadmapColumn
                key={index}
                columnDetails={element}
                cards={roadmap[element.key]}
              />
            )
          })}
      </div>
    </CustomContainer>
  )
}
export default Roadmap
