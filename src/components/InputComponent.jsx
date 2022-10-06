import { OutlinedInput } from '@mui/material'
import clsx from 'clsx'


const InputComponent = (props) => {
	const { className, ...others } = props;
	return false ? <input
		className={clsx(`sm:w-4/5 w-full rounded-full border
			border-black
			 focus:outline-none focus:ring focus:ring-violet-300
			text-3xl px-8 py-2`, className)}
		{...others}
	/> : <OutlinedInput
		className={clsx(`sm:w-4/5 w-full rounded-full border text-xl px-8`, className)}
		{...others}
	/>

}

export default InputComponent