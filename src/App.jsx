import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HomePage from './pages/home/HomePage';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Actors from './pages/Actors';
import Actor from './pages/Actor';
import Bookmarks from './pages/Bookmarks';
import Signup from './pages/auth/Signup';
import Header from './components/NavBar';
import Signin from './pages/auth/Signin';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Container>
					<Row>
						<Col>
							<Header />
						</Col>
					</Row>
					<Row>
						<Col>
							<Switch>
								<Route exact path="/" component={HomePage} />
								<Route exact path="/movies" component={Movies} />
								<Route exact path="/movie/:id" component={Movie} />
								<Route exact path="/actors" component={Actors} />
								<Route exact path="/actor/:id" component={Actor} />
								<Route exact path="/bookmarks" component={Bookmarks} />
								<Route exact path="/signup" component={Signup} />
								<Route exact path="/login" component={Signin} />
							</Switch>
						</Col>
					</Row>
					<Row>
						<Col>
							<Footer />
						</Col>
					</Row>
				</Container>
			</BrowserRouter>
		</div>
	);
}

export default App;
