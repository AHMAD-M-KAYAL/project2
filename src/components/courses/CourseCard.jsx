import { Card, Typography } from '@mui/material'
import React from 'react'

const CourseCard = ({name, center}) => {
  return (
    <Card sx={{width:'100%', padding:'10px', m:'4px'}}>
        <Typography variant='h6'>{name}</Typography>
        <Typography variant='body1'>{center}</Typography>
    </Card>
  )
}

export default CourseCard