import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'
import { createPortal } from 'react-dom'


const BackDrop=(props)=>{
	return( 
	<div className={classes.backdrop} onClick={props.onConfirm} />
	)
}
const ModalOverlay=(props)=>{
	return(
	<Card className={classes.modal}>
	<header className={classes.header}>
		<h3>{props.title}</h3>
	</header>
	<div className={classes.content}>
		<p>{props.message}</p>
	</div>
	<footer className={classes.actions}>
		<Button onClick={props.onConfirm}>Okay</Button>
	</footer>
</Card>
	)
}

const ErrorModal = (props) => {
	return ( 
	<>
	{createPortal(	<BackDrop onClick={props.onClick} />,
	document.getElementById('backdrop-root')
)}
	
	{createPortal(<ModalOverlay 
			title={props.title}
			message={props.message} 
			onConfirm={props.onConfirm} 
	/>,
	document.getElementById('modal-root')
	)}
		
	</>
	)
}

export default ErrorModal
