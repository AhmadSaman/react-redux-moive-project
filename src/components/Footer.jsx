import React from 'react';
import { NavLink } from 'react-router-dom';
import LOGO from '../images/logo.png';

function Footer() {
	return (
		<div className="text-white bg-dark">
			<div className="container">
				<footer className="row row-cols-5 py-5 d-flex">
					<div className="col">
						<h1 className="d-flex align-items-center NavLink-dark text-decoration-none">
							The best Movie Website Ever
						</h1>
						<p className="text-muted">&copy; 2021</p>
					</div>

					<div className="col" />

					<div className="col">
						<h5>Section</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<NavLink to="/" className="nav-NavLink p-0 text-muted">
									Home
								</NavLink>
							</li>
							<li className="nav-item mb-2">
								<NavLink to="/actors" className="nav-NavLink p-0 text-muted">
									Actors
								</NavLink>
							</li>
							<li className="nav-item mb-2">
								<NavLink to="/movies" className="nav-NavLink p-0 text-muted">
									Movies
								</NavLink>
							</li>
							<li className="nav-item mb-2">
								<NavLink to="/signup" className="nav-NavLink p-0 text-muted">
									Signup
								</NavLink>
							</li>
							<li className="nav-item mb-2">
								<NavLink to="/login" className="nav-NavLink p-0 text-muted">
									Signin
								</NavLink>
							</li>
						</ul>
					</div>

					<div className="col">
						<h5>About Us</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a
									href="https://github.com/aryanmajeed"
									className="nav-NavLink p-0  text-white"
								>
									<img
										src="https://avatars.githubusercontent.com/u/58115075?v=4"
										alt="aryan"
										width="30"
										height="30"
										className="rounded-circle mx-1"
									/>
									Aryan Majeed
								</a>
							</li>
							<li className="nav-item mb-2">
								<a
									href="https://github.com/bnar98"
									className="nav-NavLink my-5 text-white"
								>
									<img
										src="https://ca.slack-edge.com/T026Z5BSK61-U026VEGNMAA-fd39edeeed86-512"
										alt="aryan"
										width="30"
										height="30"
										className="rounded-circle mx-1"
									/>
									Bnar
								</a>
							</li>

							<li className="nav-item mb-2">
								<a
									href="https://github.com/AhmadSaman"
									className="nav-NavLink p-0 text-white"
								>
									<img
										src="https://ca.slack-edge.com/T026Z5BSK61-U026Z6CM3T7-410e2f1dc86c-512"
										alt="aryan"
										width="30"
										height="30"
										className="rounded-circle mx-1"
									/>
									Ahmad Saman
								</a>
							</li>
						</ul>
					</div>

					<div className="col">
						{/* <h5>Section</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<NavLink to="#" className="nav-NavLink p-0 text-muted">
									Home
								</NavLink>
							</li>
							<li className="nav-item mb-2">
								<NavLink to="#" className="nav-NavLink p-0 text-muted">
									Features
								</NavLink>
							</li>
							<li className="nav-item mb-2">
								<NavLink to="#" className="nav-NavLink p-0 text-muted">
									Pricing
								</NavLink>
							</li>
							<li className="nav-item mb-2">
								<NavLink to="#" className="nav-NavLink p-0 text-muted">
									FAQs
								</NavLink>
							</li>
							<li className="nav-item mb-2">
								<NavLink to="#" className="nav-NavLink p-0 text-muted">
									About
								</NavLink>
							</li>
						</ul> */}
						<img src={LOGO} width="200" height="80" alt="movie" />
					</div>
				</footer>
			</div>
		</div>
	);
}

export default Footer;
