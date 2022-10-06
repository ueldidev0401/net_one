import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Mail } from '@mui/icons-material';

import SimplePage from '@components/SimplePageWithLogo'
import InputComponent from '@components/InputComponent'

const useStyles = makeStyles(theme => {
  console.log(theme)
  return ({
    root: {
    },
    mailIcon: {
      color: theme.palette.text.secondary
    }
  })
})

function EmailVerifyPage(props) {
  const classes = useStyles(props);
  const navigate = useNavigate();

  return (
    <SimplePage>
      <Mail className={clsx(classes.mailIcon, 'text-6xl sm:text-9xl')} />
      <Typography className='font-extrabold text-base sm:text-2xl text-center'>Change email Address:</Typography>
      <InputComponent className='my-8' placeholder="E-mail" />

      <Button className={'h-12 rounded-full text-xl px-4 py-2 my-8'}
        variant='contained' color="primary"
        sx={{ minWidth: '30%' }}
        onClick={() => {
          navigate('/verify_success')
        }}
      >
        Next
      </Button>
    </SimplePage>
  )
}

export default EmailVerifyPage