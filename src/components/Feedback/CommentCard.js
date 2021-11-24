import { Avatar, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import React, { useContext } from 'react'
// React Hook Form
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
// Utils
import {
  CustomContainer,
  CustomInput,
  stringAvatar,
  useCustomController
} from '../Utils/Utils'
import { add, LocalDatabase } from '../../localDatabase'
import FeedbackCard from './FeedbackCard'

const CommentCard = ({ element, index, parentResponse }) => {
  return (
    <>
      {index > 0 &&
        <Divider style={{ marginTop: 25 }} />}
      <Grid sx={{ marginTop: 3.5 }} container key={element.id}>
        {/* {index > 0 &&
          <Grid item xs={12}>
          <Divider />
        </Grid>} */}
        <Grid item xs={1}>
          <Avatar {...stringAvatar(element.author)} />
        </Grid>
        <Grid item xs={11}>
          <Typography sx={{ fontWeight: 600, color: '#3A4374' }}>
            {element.author}
          </Typography>
          <Typography sx={{ marginBottom: 2, color: '#647196' }}>
            @{element.username}
          </Typography>
          <Typography sx={{ fontWeight: 600, color: '#AD1FEA' }} display='inline'>
            {parentResponse ? `@${parentResponse} ` : ''}
          </Typography>
          <Typography sx={{ color: '#647196' }} display='inline'>
            {element.comment}
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default CommentCard
