import empathyImg from '../../../../../assets/images/pictures/Empathy-EmpathyLogo.png'
import LoveReaction from '../../../../../assets/icons/LoveReaction.svg?component'
import CommentReaction from '../../../../../assets/icons/CommentReaction.svg?component'
import RetweetReaction from '../../../../../assets/icons/RetweetReaction.svg?component'

const SocialMediaPost = (props) => {
	return (
		<div className='card'>
			<div className='card__user'>
				<img
					src={empathyImg}
					className='profilePicture'
					alt='Imagen del usuario'
				/>
				<div className='userInfo'>
					<p className='userInfo__publicname'>{props.publicname}</p>
					<p className='userInfo__username'>{props.username}</p>
				</div>
			</div>
			<div className='card__content'>{props.content}</div>
			<div className='card__reactions'>
				<div className='reactionInfo'>
					<div className='reactionIcon'>
						<CommentReaction />
					</div>
					<p>{props.comments}</p>
				</div>
				<div className='reactionInfo'>
					<div className='reactionIcon'>
						<RetweetReaction />
					</div>
					<p>{props.retweets}</p>
				</div>
				<div className='reactionInfo'>
					<div className='reactionIcon'>
						<LoveReaction />
					</div>
					<p>{props.likes}</p>
				</div>
			</div>
		</div>
	)
}

export default SocialMediaPost
