import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import ImgLogo from '../../assets/img/synamatic-logo.png';
import ImgSearch from '../../assets/img/search.svg';
import ImgArrowDown from '../../assets/img/arrowdown.svg';
import ImgHeart from '../../assets/img/heart.svg';
import MenuIcon from './MenuIcone';
import SearchBar from './SearchBox';

const HeaderClone = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState();

    return (
        <div>
            <header>
                <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            </header>
        </div>
    );
};
export default HeaderClone;
