import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function Search({ onSearch }) {
	const searchRef = useRef('');
	const handleSearch = () => {
		onSearch(searchRef.current);
	};
	return (
		<div>
			<label htmlFor="search">
				Search:
				<input
					ref={searchRef}
					type="text"
					name="search"
					value={searchRef.current}
				/>
			</label>
			<button type="button" onClick={handleSearch}>
				Search
			</button>
		</div>
	);
}

Search.propTypes = {
	onSearch: PropTypes.func.isRequired,
};

export default Search;
