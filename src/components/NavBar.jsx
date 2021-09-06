import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { AiOutlineUser } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LOGO from '../images/logo.png';
import { logout } from '../store/duck/userReducer';

function Header() {
	const states = useSelector((state) => state);
	const dispatch = useDispatch();

	function handleLogout() {
		dispatch(logout());
	}
	return (
		<>
			<Navbar
				bg="dark"
				collapseOnSelect
				expand="lg"
				fixed="top"
				variant="dark"
				className="scrolled-navbar"
			>
				<Container className="nav">
					<Navbar.Brand>
						<img src={LOGO} alt="logo" className="logo-image" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav>
							<p className="menu-item">
								<Link to="/" className="link">
									Home
								</Link>
							</p>
							<p className="menu-item">
								<Link to="/actors" className="link">
									Actors
								</Link>
							</p>
							<p className="menu-item">
								<Link to="/movies" className="link">
									Movies
								</Link>
							</p>
							<NavDropdown
								title={<span className="link">Genre</span>}
								id="collasible-nav-dropdown"
							>
								<NavDropdown.Item>
									<p className="">
										<Link to="/" className="menu-item-dropdown">
											Action
										</Link>
									</p>
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse
						id="responsive-navbar-nav"
						className="justify-content-end "
					>
						<Nav>
							{states.userStore.uid ? (
								<NavDropdown
									title={
										<span className="menu-item user-account">
											<AiOutlineUser />
										</span>
									}
									id="collasible-nav-dropdown"
								>
									<NavDropdown.Item>
										<p className="menu-item-dropdown">BookMark </p>
									</NavDropdown.Item>
									<NavDropdown.Item>
										<p className="menu-item-dropdown">My Profile </p>
									</NavDropdown.Item>
									<Dropdown.Divider />
									<NavDropdown.Item onClick={() => handleLogout()}>
										LogOut
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								''
							)}
							{!states.userStore.uid ? (
								<button to="/signin" type="submit" className="Login-btn">
									<Link to="/login" className="text-white text-decoration-none">
										LOGIN
									</Link>
								</button>
							) : (
								''
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default Header;
