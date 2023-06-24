import { HTMLAttributes } from 'react'
import styles from './Button.module.scss'

interface Props extends HTMLAttributes<HTMLInputElement> {
	height?: number
	width?: number
	text: string
}

const Button = ({ height = 44, width = 392, text, ...props }: Props) => {
	return (
		<input className={styles.button} type='submit' value={text} {...props} />
	)
}

export default Button
