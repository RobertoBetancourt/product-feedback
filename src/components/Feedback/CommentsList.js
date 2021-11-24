import React from 'react'
// Components
import CommentCard from './CommentCard'

const CommentsList = ({ comments, level = 0, parentResponse = null }) => {
  return (
    comments.map((element, index) => {
      return (
        <div key={element.id} style={{ marginLeft: level === 1 ? 50 : 0 }}>
          <CommentCard
            index={index}
            element={element}
            parentResponse={parentResponse}
          />
          {element.comments.length > 0 &&
            <CommentsList
              parentResponse={element.username}
              comments={element.comments}
              level={level + 1}
            />}
        </div>
      )
    })
  )
}

export default CommentsList
