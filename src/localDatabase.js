
import React, { useReducer } from 'react'
import { ADD, UP_VOTE } from './constants'
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
