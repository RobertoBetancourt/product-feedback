import { Button, Card, CardContent, Typography } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import React, { useContext } from 'react'
// React Hook Form
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
// Utils
import {
  CustomContainer,
  useCustomController
} from '../Utils/Utils'
import { add, LocalDatabase } from '../../localDatabase'
import FeedbackCard from './FeedbackCard'
import CommentsList from './CommentsList'

const ShowFeedback = (props) => {
  const { data: { feedback }, dispatch } = useContext(LocalDatabase)
  const { control, handleSubmit } = useForm()
  const navigate = useNavigate()
  const params = useParams()

  const currentElement = feedback.find(element => element.id === parseInt(params.feedbackID))

  const onSubmit = (data) => {
    const feedback = {
      title: data.title,
      type: data.category,
      description: data.description
    }
    dispatch(add(feedback))
    navigate('/')
  }

  const form = {
    title: useCustomController({
      name: 'title',
      control,
      rules: { required: 'Feedback Title is required' },
      label: 'Feedback Title',
      type: 'text'
    }),
    category: useCustomController({
      name: 'category',
      control,
      rules: { required: 'Feedback Title is required' },
      label: 'Category',
      type: 'select',
      options: [
        { value: 'UI', label: 'UI' },
        { value: 'UX', label: 'UX' },
        { value: 'Enhancement', label: 'Enhancement' },
        { value: 'Bug', label: 'Bug' },
        { value: 'Feature', label: 'Feature' }
      ]
    }),
    description: useCustomController({
      name: 'description',
      control,
      rules: { required: 'Feedback Detail is required' },
      label: 'Feedback Detail',
      type: 'text',
      multiline: true,
      rows: 3
    })
  }

  return (
    <CustomContainer paddingTop={30} maxWidth='md'>
      <Button onClick={() => navigate('/')} sx={{ marginBottom: 5 }} startIcon={<ChevronLeftIcon />}>
        Go back
      </Button>
      <FeedbackCard
        key={currentElement.id}
        dispatch={dispatch}
        info={currentElement}
        disableOnClick
      />

      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>{currentElement.comments.length} Comments</Typography>
          <CommentsList comments={currentElement.comments} level={0} />
        </CardContent>
      </Card>

    </CustomContainer>
  )
}

export default ShowFeedback
