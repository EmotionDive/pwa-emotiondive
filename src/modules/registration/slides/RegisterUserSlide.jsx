import { SocialMediaButton } from '@/components/Buttons'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSlides } from '../../../utils/Slides'
import image from '@assets/images/pictures/New-User-Image.png'

const RegisterUserSlide = () => {
	const { slideTo, state, setState } = useSlides()

	useEffect(() => {
		if (state === null) {
			setState({
				email: '',
				pswd: '',
				username: '',
				name: '',
				age: '',
				sex: '',
				civilState: '',
				situationalState: '',
			})
		}
	}, [])

	return (
		<>
			<section className='mainWrapper__centerContent'>
				<h1 className='text--big'>¿Creamos una cuenta nueva?</h1>
				<span className='systemText__instruction'>
					Elige como quieres registrarte:
				</span>
				<div className='registerUserSlide registerPage__desktopImageDistribution'>
					<div className='registerPage__image'>
						<img src={image} alt='New User' />
					</div>
					<div className='registerPage__socialButtons'>
						<SocialMediaButton social='Google' actionType='register' />
						<SocialMediaButton social='Facebook' actionType='register' />
						<SocialMediaButton
							social='Email'
							actionType='register'
							onClick={() => slideTo('/email')}
						/>
					</div>
				</div>
			</section>
			<section className='mainWrapper__bottom link'>
				<span>¿Ya tienes una cuenta?</span>
				<Link to='/'>
					Inicia sesión <u>aquí</u>
				</Link>
			</section>
		</>
	)
}

export default RegisterUserSlide
