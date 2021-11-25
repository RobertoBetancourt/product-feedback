import React from 'react'
// Components
import CommentCard from './CommentCard'

const CommentsList = (props) => {
  const {
    comments,
    dispatch,
    level = 0,
    maxLevel,
    feedbackID,
    parentID = null,
    parentInfo = null
  } = props

  return (
    comments.map((element, index) => {
      if (element.level !== level ||
        parentID !== element.parentComment ||
        level > maxLevel) { return null }

      return (
        <div key={element.id}>
          <CommentCard
            element={element}
            index={index}
            feedbackID={feedbackID}
            dispatch={dispatch}
            parentInfo={parentInfo}
            level={level}
          />
          <CommentsList
            comments={comments}
            dispatch={dispatch}
            level={level + 1}
            feedbackID={feedbackID}
            parentID={element.id}
            parentInfo={element}
          />
        </div>
      )
    })
  )
}

export default CommentsList
