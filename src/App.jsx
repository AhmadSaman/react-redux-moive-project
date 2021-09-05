import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Actors from './pages/Actors';
import Actor from './pages/Actor';
import Bookmarks from './pages/Bookmarks';
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import Header from './components/shared/NavBar';
import Footer from './components/shared/Footer';

function App() {
	return (
		<div className="">
			<BrowserRouter>
				<Header />

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
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
