import React from 'react'
// Context
import { upVote } from '../../localDatabase'
// Components
import FeedbackTag from './FeedbackTag'
// Material UI
import { Button, Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useNavigate } from 'react-router'
import './Feedback.css'

const FeedbackCard = ({ disableOnClick = false, dispatch = null, info, setFilter = null }) => {
  const navigate = useNavigate()

  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <div className='feedback-card-container'>
          <div className='feedback-card-votes-container'>
            <Box
              sx={{
                paddingTop: 1.5,
                paddingBottom: 1.5,
                backgroundColor: info.alreadyLiked ? '#4661E6' : '#F2F4FE',
                borderRadius: 4,
                '&:hover': {
                  background: info.alreadyLiked ? '#4661E6' : '#CFD7FF',
                  cursor: info.alreadyLiked ? 'default' : 'pointer'
                }
              }}
            >
              <div onClick={() => info.alreadyLiked ? null : dispatch(upVote(info.id))}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <KeyboardArrowUpIcon sx={{ color: info.alreadyLiked ? '#FFFFFF' : '#4661E6' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography color={info.alreadyLiked ? '#FFFFFF' : '#3A4374'}>
                    {info.votes}
                  </Typography>
                </div>
              </div>
            </Box>
          </div>
          <div className='feedback-card-content-container'>
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => disableOnClick ? null : navigate(`feedback/${info.id}`)}
            >
              <Typography variant='h6'>
                {info.title}
              </Typography>
            </div>
            <Typography variant='body1'>
              {info.description}
            </Typography>
            <FeedbackTag setFilter={setFilter} variant='contained'>{info.type}</FeedbackTag>
          </div>
          <div className='feedback-card-comments-container'>
            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <Button
                onClick={() => disableOnClick ? null : navigate(`feedback/${info.id}`)}
                color='info'
                startIcon={<ChatBubbleTwoToneIcon />}
              >
                <Typography>{info.comments.length}</Typography>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default FeedbackCard
