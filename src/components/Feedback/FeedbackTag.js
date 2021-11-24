import React from 'react'
import { CustomButton, CustomSelectedButton } from '../Utils/Utils'

const FeedbackTag = ({ children, filter = null, setFilter }) => {
  const handleFilter = () => {
    setFilter(children)
  }

  if (filter === children) {
    return (
      <CustomSelectedButton variant='contained'>
        {children}
      </CustomSelectedButton>
    )
  }

  return (
    <CustomButton onClick={handleFilter} variant='contained'>
      {children}
    </CustomButton>
  )
}

export default FeedbackTag
