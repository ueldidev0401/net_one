import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Button } from '@mui/material'
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import SimplePage from '@components/SimplePageWithLogo'

const useStyles = makeStyles(theme => {
  console.log(theme)
  return ({
    root: {
    },
    successIcon: {
      color: theme.palette.text.secondary
    }
  })
})

function VerifySuccessPage(props) {
  const classes = useStyles(props);
  const navigate = useNavigate();

  return (
    <SimplePage>
      <CheckCircleOutlineIcon className={clsx(classes.successIcon, 'text-6xl sm:text-9xl')} />
      <Typography className='font-extrabold text-base sm:text-2xl text-center'>Your email Address has been successfully changed</Typography>

      <Button className={'h-12 rounded-full text-xl  px-4 py-2 my-8'}
        variant='contained' color="primary"
        sx={{ minWidth: '30%' }}
        onClick={() => {
          navigate('/set_pwd')
        }}
      >
        Next
      </Button>
    </SimplePage>
  )
}

export default VerifySuccessPage