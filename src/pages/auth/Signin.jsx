import React, { useState } from 'react';
import { Form, Button, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import firebase from '../../firebase';
import { login } from '../../store/duck/userReducer';

function Signin() {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	function handleChange(event) {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	}
	function handleSubmit(event) {
		event.preventDefault();
		firebase
			.auth()
			.signInWithEmailAndPassword(formData.email, formData.password)
			.then((userCredential) => {
				const { user } = userCredential;
				dispatch(login({ ...formData, id: user.uid }));
			});
	}
	return (
		<Container className="m-5">
			<Row>
				<Form className="w-50 m-auto" onSubmit={(e) => handleSubmit(e)}>
					<h1 className="d-2 my-5">Sign In</h1>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							onChange={(e) => handleChange(e)}
							value={formData.email}
							name="email"
						/>
						<Form.Text className="text-muted">
							We&apos;ll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							onChange={(e) => handleChange(e)}
							value={formData.password}
							name="password"
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Row>
		</Container>
	);
}

export default Signin;
