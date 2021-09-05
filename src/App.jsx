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
import Header from './components/NavBar';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
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
							</Switch>
						</Col>
					</Row>
				</Container>
			</BrowserRouter>
		</div>
	);
}

export default App;
