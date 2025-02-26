import { useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import classes from './AddUser.module.css'
import ErrorModal from '../ui/ErrorModal'

const AddUser = (props) => {
	const [userName, setUserName] = useState('')
	const [userAge, setUserAge] = useState('')
	const [errorModal, setErrormodal] = useState(null)

	const userAgeChangeHandler = (event) => {
		setUserAge(event.target.value)
	}

	const userNameChangeHandler = (event) => {
		setUserName(event.target.value)
	}

	const addUserHandler = (event) => {
		event.preventDefault()

		if (userName.trim().length === 0 || userAge.trim().length === 0) {
			setErrormodal({
				title: 'Ошибка в Input',
				message: 'Пожалуйста заполните все поля!'
			})
			return
		}

		if (+userAge < 1) {
			setErrormodal({
				title: 'Ошибка в Input',
				message: 'Возраст должен быть больше 0-я !'
			})
			return
		}

		props.addUser(userName, userAge)

		setUserName('')
		setUserAge('')
	}

	const errorHandler = () => {
		setErrormodal(null)
	}
	return (
		<>
			{errorModal && <ErrorModal title={errorModal.title} message={errorModal.message} onConfirm={errorHandler}/>}
			<form onSubmit={addUserHandler}>
				<Card className={classes.input}>
					<label htmlFor='userName'>User Name</label>
					<input
						type='text'
						id='userName'
						value={userName}
						onChange={userNameChangeHandler}
					/>

					<label htmlFor='userAge'>User Age</label>
					<input
						type='number'
						id='userAge'
						value={userAge}
						onChange={userAgeChangeHandler}
					/>

					<Button type='submit'>Add user</Button>
				</Card>
			</form>
		</>
	)
}

export default AddUser
