
import React, { useReducer } from 'react'
// Constants
import { ADD, UP_VOTE, COMMENT, EDIT, DELETE } from './constants'
// Database seeding
import { initialDB } from './initialDB'

export const LocalDatabase = React.createContext()

export const upVote = (feedbackID) => ({
  type: UP_VOTE,
  feedbackID
})

export const add = (feedback) => ({
  type: ADD,
  newElement: feedback
})

export const edit = (feedback) => ({
  type: EDIT,
  editedElement: feedback
})

export const comment = (newComment) => ({
  type: COMMENT,
  newComment
})

export const deleteFeedback = (feedbackID) => ({
  type: DELETE,
  feedbackID
})

const dataReducer = (state = initialDB, action) => {
  if (action.type === UP_VOTE) {
    return {
      ...state,
      feedback: state.feedback.map(element => {
        if (element.id === action.feedbackID) {
          return ({
            ...element,
            votes: element.votes + 1,
            alreadyLiked: true
          })
        }

        return element
      })
    }
  }

  if (action.type === ADD) {
    return {
      ...state,
      feedback: [
        ...state.feedback,
        {
          id: state.feedback.length + 1,
          votes: 0,
          title: action.newElement.title,
          description: action.newElement.description,
          comments: [],
          alreadyLiked: false,
          isOwner: true,
          type: action.newElement.type
        }
      ]
    }
  }

  if (action.type === COMMENT) {
    return {
      ...state,
      feedback: state.feedback.map(element => {
        console.log(action.newComment)
        if (element.id === action.newComment.feedbackID) {
          return ({
            ...element,
            comments: [
              ...element.comments,
              {
                id: Math.floor((1 + Math.random()) * 0x10000),
                author: 'Martín Moraga',
                username: 'martin.moraga',
                comment: action.newComment.comment,
                parentComment: action.newComment.parentCommentID,
                level: action.newComment.level
              }
            ]
          })
        }

        return element
      })
    }
  }

  if (action.type === EDIT) {
    return {
      ...state,
      feedback: state.feedback.map(element => {
        if (element.id === action.editedElement.id) {
          return ({
            ...element,
            title: action.editedElement.title,
            description: action.editedElement.description,
            type: action.editedElement.type
          })
        }

        return element
      })
    }
  }

  if (action.type === DELETE) {
    return {
      ...state,
      feedback: state.feedback.filter(element => element.id !== action.feedbackID)
    }
  }
}

const localState = JSON.parse(localStorage.getItem('data'))

export const LocalDatabaseProvider = ({ children }) => {
  const [data, dispatch] = useReducer(dataReducer, localState || initialDB)

  React.useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  return (
    <LocalDatabase.Provider value={{ data, dispatch }}>
      {children}
    </LocalDatabase.Provider>
  )
}
