import { Button, Card, CardContent, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import React, { useContext } from 'react'
// React Hook Form
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
// Utils
import {
  CustomContainer,
  CustomInput,
  useCustomController
} from '../Utils/Utils'
import { add, LocalDatabase } from '../../localDatabase'

const UpsertFeedback = (props) => {
  const { dispatch } = useContext(LocalDatabase)
  const { control, handleSubmit } = useForm()
  const navigate = useNavigate()

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
    <CustomContainer paddingTop={30} maxWidth='sm'>
      <Button onClick={() => navigate('/')} sx={{ marginBottom: 5 }} startIcon={<ChevronLeftIcon />}>
        Go back
      </Button>
      <div style={{ position: 'relative' }}>
        <AddCircleIcon
          sx={{
            position: 'absolute',
            top: -20,
            bottom: 0,
            left: 30,
            right: 0,
            fontSize: 50,
            color: '#AD1FEA'
          }}
        />
      </div>
      <Card sx={{ padding: 3 }}>
        <CardContent>
          <Typography variant='h5' style={{ marginBottom: 20 }}>
            Create New Feedback
          </Typography>
          <CustomInput
            form={form}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            button='Add Feedback'
            onCancel={() => navigate('/')}
          />
        </CardContent>
      </Card>
    </CustomContainer>
  )
}

export default UpsertFeedback
