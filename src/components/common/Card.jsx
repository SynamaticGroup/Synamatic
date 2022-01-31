import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite } from '../../reducks/favourites/operations';
import { getFavourites } from '../../reducks/favourites/selectors';
import Imgstar from '../../assets/img/star.png';
import ImgHeart from '../../assets/img/red_heart.png';
import ImgArrow from '../../assets/img/arrow.png';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const PAGE_API = 'https://www.themoviedb.org/movie/';
const TRAILER_API = '/videos?active_nav_item=Trailers';

const Card = ({ movie }) => {
    const dispatch = useDispatch();
    const clickFavourite = movie => {
        dispatch(addFavourite(movie));
    };
    const selector = useSelector(state => state);
    const favourites = getFavourites(selector);
    const [showLikeButton, setShowLikeButton] = useState(true);
    useEffect(() => {
        let favoriteMovie = favourites.filter(favourite => favourite.id == movie.id);
        if (favoriteMovie.length > 0) {
            setShowLikeButton(false);
        }
    }, [favourites]);

    return (
        <div>
            <div class="moviebox mar10">
                <div className="movie">
                    <img class="movieposter" src={IMG_API + movie.poster_path} alt="" />
                    <div className="movie_overview">
                        <h2>Overview</h2>
                        {movie.overview}
                    </div>
                </div>
                <div class="moviedeets">
                    <p>{movie.name}</p>
                    <div class="row spacer">
                        <div className="imgheart">
                            <img src={Imgstar} alt="" />
                            <span>{movie.vote_average}</span>
                            <span class="darken">/10</span>
                        </div>
                        <a href={movie.trailer_link} target="_blank">
                            <div class="trailer_link">
                                <img src={ImgArrow} alt="" />
                                <a href={PAGE_API + movie.id + TRAILER_API} target="_blank" class="btn-text">
                                    {' '}
                                    Trailer
                                </a>
                            </div>
                        </a>
                    </div>
                </div>

                {showLikeButton && (
                    <div
                        class="favit"
                        onClick={() => {
                            clickFavourite(movie);
                        }}
                    >
                        <img src={ImgHeart} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
