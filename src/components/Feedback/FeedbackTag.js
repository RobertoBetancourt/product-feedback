import React from 'react'
import { CustomButton, CustomSelectedButton } from '../Utils/Utils'

const FeedbackTag = ({ children, filter = null, setFilter = null }) => {
  const handleFilter = () => {
    if (setFilter) {
      setFilter(children)
    }
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
