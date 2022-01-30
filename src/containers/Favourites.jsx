import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavourites } from '../reducks/favourites/selectors';
import { fetchFromLocalStorage } from '../reducks/favourites/operations';
import FavCard from '../components/common/FavCard';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const Favourites = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const favourites = getFavourites(selector);
    console.log(favourites);
    useEffect(() => {
        dispatch(fetchFromLocalStorage());
    }, []);
    return (
        <>
            <Header />
            <section class="content">
                <div class="pt">
                    <h1 class="section-heading m20 p10">Favorites</h1>
                </div>
                <div class="grid">{favourites && favourites.map(favourite => <FavCard favourite={favourite} />)}</div>
            </section>
            <Footer />
        </>
    );
};

export default Favourites;