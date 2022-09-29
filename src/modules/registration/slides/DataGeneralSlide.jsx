import { useState } from 'react'
import { LargeButton, TextButton } from '../../../components/Buttons'
import {
	RadioOption,
	RadioOptionGroup,
	Select,
	Textfield,
} from '../../../components/Forms'
import { useSlides } from '../../../utils/Slides'

const DataGeneralSlide = () => {
	const { slideTo } = useSlides()
	const [sexo, setSexo] = useState('Masculino')

	return (
		<>
			<section className='mainWrapper__centerContent'>
				<h1 className='text--big'>Déjanos saber más sobre ti...</h1>
				<span className='systemText__instruction'>
					Por favor, llena los siguientes campos:
				</span>
				<div className='registerPage__mainContent'>
					<Textfield label='Nombre' placeholder='Tu nombre' />
					<div className='dataGeneralSlide__ageGender'>
						<Textfield label='Edad' placeholder='Tu edad' />
						<RadioOptionGroup
							value={sexo}
							onChange={setSexo}
							label='Sexo'
							name='sexo'
						>
							<RadioOption value='Masculino' />
							<RadioOption value='Femenino' />
						</RadioOptionGroup>
					</div>
					<Select label='Estado Civil'>
						<option value='0'>Soltero</option>
						<option value='1'>Casado</option>
						<option value='2'>Divorciado</option>
					</Select>
					<Select label='Situacion Habitacional'>
						<option value='0'>Vivo Solo</option>
						<option value='1'>Acompañado</option>
						<option value='2'>Con Padres</option>
					</Select>
				</div>
			</section>
			<section className='mainWrapper__bottom dataGeneralSlide__bottom'>
				<LargeButton onClick={() => slideTo('/noticeEmail')}>
					Finalizar Registro
				</LargeButton>
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
