import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../components/common/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/common/Card';
import Header from '../components/common/Header';
import HeaderClone from '../components/common/Header copy';
import SearchBar from '../components/common/SearchBox';

const TRENDING_API =
    'https://api.themoviedb.org/3/discover/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&language=en-US&sort_by=popularity.desc&page=1';

const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&sort_by=popularity.desc&query=';
const SearchPage = () => {
    const [movies, setMovies] = useState([
        {
            adult: false,
            backdrop_path: '/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg',
            genre_ids: [28, 12, 14, 878],
            id: 524434,
            original_language: 'en',
            original_title: 'Eternals',
            overview:
                'The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.',
            popularity: 10277.072,
            poster_path: '/b6qUu00iIIkXX13szFy7d0CyNcg.jpg',
            release_date: '2021-11-03',
            title: 'Eternals',
            video: false,
            vote_average: 7.3,
            vote_count: 3218
        }
    ]);
    const [favourites, setFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const getMovieRequest = async searchValue => {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&language=en-US&query=${searchValue}&page=1&include_adult=false`;

        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);

        if (responseJson.results) {
            setMovies(responseJson.results);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);
    console.log(searchValue);
    return (
        <section className="content">
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="grid">
                {movies.map(movie => (
                    <Card movie={movie} />
                ))}
            </div>
        </section>
    );
};

export default SearchPage;
