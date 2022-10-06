import React from 'react'
import { Box, Paper } from "@mui/material";
import { makeStyles } from '@mui/styles'
import clsx from 'clsx';

import LogoNetOne from '@assets/imgs/logo-netOne-primary.png'

const useStyles = makeStyles(theme => ({
	root: {
		// padding: '5vw',
	}
}))

function SelectRolePage(props) {
	const classes = useStyles(props)

	return (
		<Box className={clsx(props.className, 'w-full flex flex-col items-center p-8')}>
			<img className='w-1/5 mb-12' src={LogoNetOne} />
			<Paper elevation={24} className={clsx(classes.root,
				`flex flex-col 
				items-center justify-center
				sm:rounded-3xl rounded-lg
				p-8
			`)}>
				{props.children}
			</Paper>
		</Box>
	)
}

export default SelectRolePage