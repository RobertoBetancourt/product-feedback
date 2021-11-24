import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
// React Hook Form
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
// Utils
import {
  CustomContainer,
  CustomInput,
  useCustomController
} from '../Utils/Utils'

const UpsertFeedback = (props) => {
  const { control, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  const navigate = useNavigate()

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
        { value: 'All', label: 'All' },
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
    <CustomContainer maxWidth='sm'>
      <Card sx={{ padding: 3 }}>
        <CardContent>
          <Typography variant='h5' style={{ marginBottom: 20 }}>Create New Feedback</Typography>
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
