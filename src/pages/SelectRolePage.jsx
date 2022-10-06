import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUserRole } from '@store/actions/index'

import { Box, Paper, FormControl, TextField, OutlinedInput, Typography, Divider, Button } from "@mui/material";
import { makeStyles } from '@mui/styles'
import clsx from 'clsx';

import SimplePage from '@components/SimplePageWithLogo'


const useStyles = makeStyles(theme => ({
  root: {},
  roleBtn: {
    // minWidth: '65%',
    aspectRatio: '5 / 4',
    '&.role-selected': {
      boxShadow: `${theme.palette.primary.main} 0px 2px 5px`,
    },
    '&:focus': {
      boxShadow: `${theme.palette.secondary.main} 0px 2px 5px`,
    },

    [theme.breakpoints.up('md')]: {
      // width: '10vw',
      // height: '10vw',
    },
  },
  loginLink: {
    color: theme.palette.warning.main
  }
}))

function SelectRolePage(props) {
  const classes = useStyles(props)
  const dispatch = useDispatch()
  const userData = useSelector(state => state.user)
  console.log("data : ", userData)
  
  const navigate = useNavigate();

  const handleSelectRole = role => {
    dispatch(setUserRole(role));
    navigate("/signup");
  }


  const RoleBtn = (props) => {
    const { className, children, ...others } = props
    return (<Button className={clsx(
      classes.roleBtn,
      "sm:w-2/3 w-full rounded-3xl md:text-xl sm:text-base text-sm",
      className
    )}
      variant="outlined"
      disableFocusRipple={true}
      {...others}
    >
      {children}
    </Button>)
  }

  return (
    <SimplePage>
      <Typography className='my-10 font-bold sm:text-xl text-base'>Are you a client or A Recruiter?</Typography>
      <Divider className="w-3/4" />

      <Box className="md:w-full flex flex-col items-center p-8">
        <RoleBtn className={userData.role === 'client' ? "role-selected" : ""}
          onClick={() => {
            handleSelectRole("client")
          }}
        >I'm a client, hiring for projects</RoleBtn>

        <div style={{ height: '2rem' }}></div>

        <RoleBtn className={userData.role === 'recruiter' ? "role-selected" : ""}
          onClick={() => {
            handleSelectRole("recruiter")
          }}
        >I'm a Recruiter, Looking for Work</RoleBtn>
      </Box>

      <Divider className="w-3/4" />
      <Typography className='my-5 font-bold sm:text-lg text-sm'>
        Already have an account?
        <Link className={clsx(classes.loginLink)} to="/login">   Log In   </Link>
      </Typography>
    </SimplePage>
  )
}


export default SelectRolePage