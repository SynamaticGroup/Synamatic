import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import ImgLogo from '../../assets/img/synamatic-logo.png';
import ImgSearch from '../../assets/img/search.svg';
import ImgArrowDown from '../../assets/img/arrowdown.svg';
import ImgHeart from '../../assets/img/heart.svg';
import MenuIcon from './MenuIcone';
import Search from './Search';

const Header = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const inputSearch = event => {
        setSearch(event.target.value);
    };
    const submitAction = () => {
        dispatch(push('/search/?search=' + search));
    };

    return (
        <div>
            <header>
                <div class="navbar row spacer">
                    <MenuIcon />
                    <img src={ImgLogo} class="sp-logo" onClick={() => dispatch(push('/'))} alt="" />
                    <Search />
                    <div class="logo">
                        {/* <img src={ImgLogo} alt="" class="logoimg" onClick={() => dispatch(push('/'))} /> */}
                    </div>
                    <div class="smenu row">
                        <form onClick={() => dispatch(push('/search'))} onSubmit={submitAction} class="searcharea">
                            <div class="searcharea mar15">
                                <input type="text" onChange={inputSearch} name="search" />
                                <img src={ImgSearch} alt="" />
                            </div>
                        </form>
                        <div class="category mar15 row" onClick={() => dispatch(push('/category'))}>
                            <div class="p10" onClick={() => dispatch(push('/category'))}>
                                Category
                            </div>
                            <img src={ImgArrowDown} alt="" />
                        </div>
                        <div class="favs mar15 row" onClick={() => dispatch(push('/favourites'))}>
                            <div class="p10">Favorites</div>
                            <img src={ImgHeart} alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};
export default Header;
