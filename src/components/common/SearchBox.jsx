import React from 'react';

const SearchBar = props => {
    return (
        <>
            <form className="">
                <input
                    type="text"
                    placeholder="Search"
                    value={props.value}
                    onChange={event => props.setSearchValue(event.target.value)}
                ></input>
            </form>
        </>
    );
};

export default SearchBar;
