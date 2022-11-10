import { useAuth0 } from '@auth0/auth0-react'
import { useRef, useState } from 'react'
import { LargeButton, TextButton } from '../../../components/Buttons'
import {
	RadioOption,
	RadioOptionGroup,
	Select,
	Textfield,
} from '../../../components/Forms'
import UserService from '../../../fetchers/UserService'
import { useSlides } from '../../../utils/Slides'

const DataGeneralSlide = () => {
	const { user, logout } = useAuth0()
	const { slideTo, state } = useSlides()
	const [sex, setSex] = useState('Masculino')
	const [error, setError] = useState(false)
	const nameRef = useRef()
	const ageRef = useRef()
	const civil_statusRef = useRef()
	const housing_situationRef = useRef()

	const handleOnClick = () => {
		const name = nameRef.current.value
		const age = ageRef.current.value
		const civil_status = civil_statusRef.current.value
		const housing_situation = housing_situationRef.current.value

		if (!name || !age) {
			setError(true)
			return
		}

		const data = {
			email: user.email,
			age: +age,
			sex: sex === 'Masculino' ? 'M' : 'F',
			civil_status,
			housing_situation: +housing_situation,
			active_account: Math.floor(
				Math.random() * (999 - 100 + 1) + 100
			).toString(),
		}

		UserService.registerUser(state.username, data)
			.then((response) => {
				if (response.status === 'Success') slideTo('/noticeEmail')
				else {
					console.log(response)
					logout({ returnTo: window.location.origin }) //Change for Error
				}
			})
			.catch((error) => {
				console.error(error)
				logout({ returnTo: window.location.origin }) //Change for Error
			})
	}

	return (
		<>
			<section className='mainWrapper__centerContent'>
				<h1 className='text--big'>Déjanos saber más sobre ti...</h1>
				<span className='systemText__instruction'>
					Por favor, llena los siguientes campos:
				</span>
				<div className='registerPage__mainContent'>
					<Textfield
						label='Nombre'
						placeholder='Tu nombre'
						innerRef={nameRef}
						error={error & !nameRef.current?.value ? 'Escribe tu nombre' : ''}
						onChange={() => {
							if (error) setError(false)
						}}
					/>
					<div className='dataGeneralSlide__ageGender'>
						<Textfield
							label='Edad'
							placeholder='Tu edad'
							innerRef={ageRef}
							error={error & !ageRef.current?.value ? 'Escribe tu edad' : ''}
							onChange={() => {
								if (error) setError(false)
							}}
						/>
						<RadioOptionGroup
							value={sex}
							onChange={setSex}
							label='Sexo'
							name='sexo'
						>
							<RadioOption value='Masculino' />
							<RadioOption value='Femenino' />
						</RadioOptionGroup>
					</div>
					<Select label='Estado Civil' innerRef={civil_statusRef}>
						<option value='Single'>Soltero</option>
						<option value='Married'>Casado</option>
						<option value='Divorced'>Divorciado</option>
					</Select>
					<Select
						label='Situacion Habitacional'
						innerRef={housing_situationRef}
					>
						<option value='1'>Vivo Solo</option>
						<option value='2'>Acompañado</option>
						<option value='3'>Con Padres</option>
					</Select>
				</div>
			</section>
			<section className='mainWrapper__bottom dataGeneralSlide__bottom'>
				<LargeButton onClick={handleOnClick}>Finalizar Registro</LargeButton>
				<TextButton
					className='marginCenter'
					withBack={true}
					onClick={() => slideTo('/username')}
					color='secondary'
				>
					Atrás
				</TextButton>
			</section>
		</>
	)
}

export default DataGeneralSlide
