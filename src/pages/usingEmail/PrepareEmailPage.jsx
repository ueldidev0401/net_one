import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Mail } from '@mui/icons-material';

import SimplePage from '@components/SimplePageWithLogo'

const useStyles = makeStyles(theme => {
	console.log(theme)
	return ({
		root: {
		},
		mailIcon: {
			color: theme.palette.text.secondary
		},
		changeEmailLink: {
			color: theme.palette.warning.main
		}
	})
})

function PrepareEmailPage(props) {
	const classes = useStyles(props);
	const navigate = useNavigate();

	const userData = useSelector(state => state.user)

	return (
		<SimplePage className="w-2/5 justify-evenly text-center py-6 sm:py-12">
			<Mail className={clsx(classes.mailIcon, 'text-6xl sm:text-9xl m-6 sm:m-16')} />
			<Typography className='font-bold w-max text-2xl sm:text-4xl text-center my-7 sm:my-14'>Hello {userData.full_name}!</Typography>
			<Typography className='font-bold text-base sm:text-2xl text-center mb-3 sm:mb-6'>Let's verify your email:</Typography>

			<Typography className='font-semibold lg:text-sm text-xs mb-3'>Let's confirm your account, please check your email and click the verification link that our team has sent over to:</Typography>
			<Typography className='font-bold lg:text-sm text-xs mb-4 sm:mb-8'>[ {userData.email_addr} ]</Typography>

			<Typography className={clsx(classes.changeEmailLink, 'font-bold lg:text-sm text-xs')}
				component={Link} to={{ pathname: "/verify_email" }}
			>
				Change email address
			</Typography>
		</SimplePage >
	)
}

export default PrepareEmailPage