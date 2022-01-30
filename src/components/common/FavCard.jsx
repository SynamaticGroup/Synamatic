import React from 'react';
import Imgstar from '../../assets/img/star.png';
import ImgHeart from '../../assets/img/delete.png';
import { useDispatch } from 'react-redux';
import { deleteFavourite } from '../../reducks/favourites/operations';
import ImgArrow from '../../assets/img/arrow.png';

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const PAGE_API = 'https://www.themoviedb.org/movie/';
const TRAILER_API = '/videos?active_nav_item=Trailers';

const FavCard = ({ favourite }) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div class="moviebox mar10">
                <img class="movieposter" src={IMG_API + favourite.poster_path} alt="" />
                <div class="moviedeets">
                    <div class="row spacer">
                        <div>
                            <img src={Imgstar} alt="" />
                            <span>{favourite.vote_average}</span>
                            <span class="darken">/10</span>
                        </div>
                        <div class="trailersec row">
                            <img src={ImgArrow} alt="" />
                            <a href={PAGE_API + favourite.id + TRAILER_API} target="_blank" class="btn-text">
                                {' '}
                                Trailer
                            </a>
                        </div>
                    </div>
                </div>
                <div class="favit" onClick={() => dispatch(deleteFavourite(favourite.id))}>
                    <img src={ImgHeart} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FavCard;
