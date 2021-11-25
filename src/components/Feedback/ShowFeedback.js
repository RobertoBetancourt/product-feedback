import { Button, Card, CardContent, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import React, { useContext } from 'react'
// React Hook Form
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
// Utils
import {
  CustomContainer,
  CustomInput,
  useCustomController
} from '../Utils/Utils'
import { comment, LocalDatabase } from '../../localDatabase'
import FeedbackCard from './FeedbackCard'
import CommentsList from './CommentsList'

const getMaxLevel = (comments) => {
  let maxLevel = 0
  for (let i = 0; i < comments.length; i++) {
    maxLevel = Math.max(maxLevel, comments[i].level)
  }
  return maxLevel
}

const ShowFeedback = (props) => {
  const { data: { feedback }, dispatch } = useContext(LocalDatabase)
  const { reset, control, handleSubmit } = useForm()
  const navigate = useNavigate()
  const params = useParams()

  const currentElement = feedback.find(element => element.id === parseInt(params.feedbackID))
  const maxLevel = getMaxLevel(currentElement.comments)

  console.log({ currentElement })
  const onSubmit = (data) => {
    const newComment = {
      ...data,
      feedbackID: parseInt(params.feedbackID),
      parentCommentID: null,
      level: 0,
      alreadyLiked: false,
      isOwner: true
    }
    dispatch(comment(newComment))
    reset()
  }

  const form = {
    comment: useCustomController({
      name: 'comment',
      control,
      rules: { required: 'Comment is required', maxLength: 255 },
      label: 'Type your comment here',
      type: 'text',
      multiline: true,
      rows: 3
    })
  }

  return (
    <CustomContainer paddingTop={30} maxWidth='md'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Button onClick={() => navigate('/')} sx={{ marginBottom: 5, textTransform: 'none' }} startIcon={<ChevronLeftIcon />}>
            Go Back
          </Button>
        </div>
        {currentElement.isOwner &&
          <div>
            <Button onClick={() => navigate(`/edit-feedback/${currentElement.id}`)} variant='contained'>
              Edit feedback
            </Button>
          </div>}
      </div>
      <FeedbackCard
        key={currentElement.id}
        dispatch={dispatch}
        info={currentElement}
        disableOnClick
      />
      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            {currentElement.comments.length} Comments
          </Typography>
          <CommentsList
            feedbackID={currentElement.id}
            comments={currentElement.comments}
            dispatch={dispatch}
            level={0}
            maxLevel={maxLevel}
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant='h6' sx={{ fontWeight: 600, marginBottom: 2 }}>
            Add Comment
          </Typography>
          <CustomInput
            form={form}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            button='Post Comment'
          />
        </CardContent>
      </Card>
    </CustomContainer>
  )
}

export default ShowFeedback
