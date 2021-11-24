import React from 'react'
// Components
import CommentCard from './CommentCard'

const Comments = ({ comments, level = 0, parentResponse = null }) => {
  return (
    comments.map((element, index) => {
      return (
        <div key={element.id} style={{ marginLeft: level * 40 }}>
          <CommentCard parentResponse={parentResponse} element={element} index={index} />
          {element.comments.length > 0 &&
            <Comments parentResponse={element.username} comments={element.comments} level={level + 1} />}
        </div>
      )
    })
  )
}

export default Comments
