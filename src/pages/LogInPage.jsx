import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { Box, Paper, TextField, Button, Typography, Divider, Checkbox, FormControlLabel, InputAdornment, IconButton, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

import GoogleLogo from '@assets/imgs/social/google.png'
import LinkedInLogo from '@assets/imgs/social/linkedin.png'
import FacebookLogo from '@assets/imgs/social/facebook.png'
import SimplePage from '@components/SimplePageWithLogo'
import InputComponent from '@components/InputComponent'

import { setInfo } from '../store/actions'

const useStyles = makeStyles(theme => {
	console.log(theme)
	return ({
		root: {
		},
		divider: {
			fontSize: '1.25rem'
		},
		loginLink: {
			color: theme.palette.warning.main
		}
	})
})

function LogInPage(props) {
	const dispatch = useDispatch()
	const classes = useStyles(props)
	const navigate = useNavigate()
	const [email, setEmail] = useState('')
	const [pwd, setPwd] = useState('')
	const [showPwd, setShowPwd] = useState(false)

	console.log(email, pwd)


	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};
	const handleLogIn = (e) => {
		if (!validateEmail(email)) {
			alert(`Your E-mail ${email} is not valid!`)
			return
		}

		alert(`${email}  and ${pwd}    valid!`)

		dispatch(setInfo({ email_addr: email }))
		navigate('/dashboard')
	}

	return (
		<SimplePage>
			<Typography className='my-10 font-extrabold sm:text-4xl text-2xl'>Join NetOne</Typography>
			<InputComponent className='mb-5' placeholder="Email"
				value={email} onChange={e => setEmail(e.target.value)}
			/>
			<InputComponent className='mb-3' placeholder="Password"
				value={pwd} onChange={e => setPwd(e.target.value)}
				type={showPwd ? 'text' : 'password'}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={() => setShowPwd(!showPwd)}
							onMouseDown={e => e.preventDefault()}
							edge="end"
						>
							{showPwd ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
			/>
			<Typography component={Link} to={{ pathname: "/verify_email" }}
				className="mb-6 text-gray-400 hover:text-black">forgot password?</Typography>


			<Button className={clsx('h-12 rounded-full text-xl px-10 py-2')}
				variant='contained' color="primary"
				onClick={handleLogIn}
			>Log In</Button>

			<Divider classes={{ root: classes.divider }} className='w-1/4 my-7' >OR</Divider>
			<div className='flex justify-evenly w-3/4 mb-12'>
				<img src={FacebookLogo} alt='FacebookLogo' />
				<img src={LinkedInLogo} alt='LinkedInLogo' />
				<img src={GoogleLogo} alt='GoogleLogo' />
			</div>

			<FormControlLabel
				className='w-3/5 mb-11'
				label={<Typography className='lg:text-sm text-xs'>By continuing with Google or Facebook, you are agreeing to our Terms + Conditions</Typography>}
				control={
					<Checkbox />
				}
			/>

			<Divider className="w-3/4" />
			<Typography className='my-5 font-bold'>
				Don't have an account?
				<Link className={clsx(classes.loginLink)} to="/signup">   Sign Up   </Link>
			</Typography>
		</SimplePage>
	)
}

export default LogInPage