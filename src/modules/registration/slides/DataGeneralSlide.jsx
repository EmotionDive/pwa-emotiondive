import { LargeButton, TextButton } from '../../../components/Buttons'
import { Select, Textfield } from '../../../components/Forms'
import { useSlides } from '../../../utils/Slides'

const DataGeneralSlide = () => {
	const { slideTo } = useSlides()
	return (
		<>
			<section className='mainWrapper__centerContent'>
				<h1 className='text--big'>Déjanos saber más sobre ti...</h1>
				<span className='systemText__instruction'>
					Por favor, llena los siguientes campos:
				</span>
				<div className='registerPage__mainContent'>
					<Textfield label='Nombre' placeholder='Tu nombre' />
					<div>
						<Textfield label='Edad' placeholder='Tu edad' />
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
			<section className='mainWrapper__bottom'>
				<LargeButton>Finalizar Registro</LargeButton>
				<TextButton
					className='marginCenter'
					withBack={true}
					onClick={() => slideTo('/username')}
				>
					Atrás
				</TextButton>
			</section>
		</>
	)
}

export default DataGeneralSlide
