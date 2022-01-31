import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = props => {
    return (
        <>
            <form className="input_container1">
                <input
                    type="text"
                    placeholder="Search"
                    value={props.value}
                    onChange={event => props.setSearchValue(event.target.value)}
                ></input>
                <Link to="/search">
                    <i class="fas fa-search"></i>
                </Link>
            </form>
        </>
    );
};

export default SearchBar;
