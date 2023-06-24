import Button from '@/components/ui/button/Button'
import { InputPhoneMask } from '@/components/ui/inputPhoneMask/InputPhoneMask'
import { phoneInputSubmitted } from '@/stores/auth/auth'
import { yupResolver } from '@hookform/resolvers/yup'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import styles from './AuthPage.module.scss'

type Props = {}

export type RegisterFormValues = {
	phoneNumber: string
}

const schema = yup.object().shape({
	phoneNumber: yup.string().required('Введите номер телефона'),
})

const AuthPage = ({}: Props) => {
	const { push } = useRouter()

	const {
		register,
		handleSubmit,
		resetField,
		formState: { errors },
	} = useForm<RegisterFormValues>({
		resolver: yupResolver(schema),
		mode: 'onChange',
	})

	const onSubmit = handleSubmit(data => {
		console.log(data.phoneNumber)
		phoneInputSubmitted(data.phoneNumber)
		push('/confirm-code')
	})

	return (
		<>
			<Head>
				<title>Авторизация</title>
			</Head>
			<form className={styles.form} onSubmit={onSubmit}>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<div className={styles.authTitle}>ВХОД / РЕГИСТРАЦИЯ</div>
						<InputPhoneMask
							type='tel'
							error={Boolean(errors?.phoneNumber?.message)}
							register={register}
							name='phoneNumber'
							resetFiled={resetField}
						/>
						{errors?.phoneNumber && (
							<div className={styles.errorMessage}>
								{errors?.phoneNumber?.message}
							</div>
						)}
						<Button style={{ marginTop: 15 }} text='ДАЛЕЕ' />
					</div>
				</div>
			</form>
		</>
	)
}

export default AuthPage
