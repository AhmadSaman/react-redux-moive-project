import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/duck/userReducer';
import firebase from '../../firebase';

function Signup() {
	const history = useHistory();
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	function handleChange(event) {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	}
	function handleSubmit(event) {
		event.preventDefault();
		if (formData.password === formData.confirmPassword) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(formData.email, formData.password)
				.then((userCredential) => {
					// Signed in
					const { user } = userCredential;
					dispatch(signup({ ...formData, id: user.uid }));
				});
			setFormData({ email: '', password: '', confirmPassword: '' });
			history.push('/');
		}
	}
	function handleLogin() {
		history.push('/login');
	}
	return (
		<Container className="m-5">
			<Row>
				<Form className="w-50 m-auto" onSubmit={(e) => handleSubmit(e)}>
					<h1 className="d-2 my-5">Sign Up</h1>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							onChange={(e) => handleChange(e)}
							name="email"
							value={formData.email}
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
					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Confirm Password"
							onChange={(e) => handleChange(e)}
							value={formData.confirmPassword}
							name="confirmPassword"
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
					<div className="my-3">
						<p>If you have Account </p>
						<Button variant="primary" onClick={() => handleLogin()}>
							Login
						</Button>
					</div>
				</Form>
			</Row>
		</Container>
	);
}

export default Signup;
