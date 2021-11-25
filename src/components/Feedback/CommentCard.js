import React, { useState } from 'react'
// Material UI
import { Avatar, Button, Divider, Grid, Typography } from '@mui/material'
// React Hook Form
import { useForm } from 'react-hook-form'
// Reducer
import { comment } from '../../localDatabase'
// Utils
import {
  CustomInput,
  stringAvatar,
  useCustomController
} from '../Utils/Utils'

const CommentCard = (props) => {
  const { dispatch, element, level, index, feedbackID, parentInfo } = props
  const { reset, control, handleSubmit } = useForm()
  const [reply, setReply] = useState(false)

  const onSubmit = (data) => {
    const newComment = {
      ...data,
      feedbackID,
      level: level + 1,
      parentCommentID: element.id
    }
    dispatch(comment(newComment))
    setReply(false)
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
    <>
      {index > 0 &&
        <Divider style={{ marginTop: 25 }} />}
      <Grid
        container
        key={element.id}
        sx={{ marginTop: 3.5, paddingLeft: level > 0 ? 6 : 0 }}
      >
        <Grid item xs={1}>
          <Avatar {...stringAvatar(element.author)} />
        </Grid>
        <Grid item xs={11} container>
          <Grid item xs={11}>
            <Typography sx={{ fontWeight: 600, color: '#3A4374' }}>
              {element.author}
            </Typography>
            <Typography sx={{ marginBottom: 2, color: '#647196' }}>
              @{element.username}
            </Typography>
            <Typography sx={{ fontWeight: 600, color: '#AD1FEA' }} display='inline'>
              {parentInfo ? `@${parentInfo.username} ` : ''}
            </Typography>
            <Typography sx={{ color: '#647196' }} display='inline'>
              {element.comment}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Button
              onClick={() => setReply(true)}
              style={{ textTransform: 'none', color: '#4661E6' }}
            >
              Reply
            </Button>
          </Grid>
          {reply &&
            <Grid item xs={11} sx={{ marginTop: 2 }}>
              <CustomInput
                form={form}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                button='Post Comment'
              />
            </Grid>}
        </Grid>

      </Grid>
    </>
  )
}

export default CommentCard
