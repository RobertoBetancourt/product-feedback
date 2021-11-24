
import React, { useReducer } from 'react'
import { FILTER, UP_VOTE } from './constants'
import { initialDB } from './initialDB'

export const LocalDatabase = React.createContext()

export const upVote = (feedbackID) => ({
  type: UP_VOTE,
  feedbackID
})

// export const filter = (feedbackType) => ({
//   type: FILTER,
//   feedbackType
// })

const dataReducer = (state = initialDB, action) => {
  if (action.type === UP_VOTE) {
    return {
      ...state,
      feedback: state.feedback.map(element => {
        if (element.id === action.feedbackID) {
          return ({
            ...element,
            likes: element.likes + 1,
            alreadyLiked: true
          })
        }

        return element
      })
    }
  }

  // if (action.type === FILTER) {
  //   if (action.feedbackType === 'All') {
  //     return {
  //       ...state
  //     }
  //   }

  //   return {
  //     ...state,
  //     feedback: state.feedback.filter(element => {
  //       console.log(element.type, action.feedbackType)
  //       return element.type === action.feedbackType
  //     })
  //   }
  // }
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
