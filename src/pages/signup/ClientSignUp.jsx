import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography, Divider, Checkbox, FormControlLabel } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

import GoogleLogo from '@assets/imgs/social/google.png'
import LinkedInLogo from '@assets/imgs/social/linkedin.png'
import FacebookLogo from '@assets/imgs/social/facebook.png'

import SimplePage from '@components/SimplePageWithLogo'
import InputComponent from '@components/InputComponent'

const useStyles = makeStyles(theme => {
	console.log(theme)
	return ({
		root: {
		},
		divider: {
			fontSize: '1.25rem'
		},
		sociaLink: {
			width: '100%',
			'& img': {
				// width: '15%',
				aspectRatio: '1',
			}
		},
		loginLink: {
			color: theme.palette.warning.main
		}
	})
})

function ClientSignUp(props) {
	const classes = useStyles(props);
	const navigate = useNavigate();

	return (
		<SimplePage>
			<Typography className='my-10 font-extrabold sm:text-4xl text-2xl'>Join NetOne</Typography>
			<InputComponent className='mb-5' placeholder="E-mail" />
			<InputComponent className='mb-5' placeholder="Full Name" />

			<Button className={'h-12 rounded-full text-xl px-10 py-2'}
				variant='contained' color="primary"
				onClick={() => {
					navigate('/prepare_email')
				}}
				sx={{ minWidth: '30%' }}
			>
				Continue
			</Button>

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
				Already have an account?
				<Link className={clsx(classes.loginLink)} to="/login">   Log In   </Link>
			</Typography>
		</SimplePage >
	)
}

export default ClientSignUp