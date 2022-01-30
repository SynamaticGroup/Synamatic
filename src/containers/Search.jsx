import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import queryString from 'query-string';
import { getMovies } from '../reducks/movies/selectors';
import { fetchMovies } from '../reducks/movies/operations';
import Card from '../components/common/Card';

const Search = () => {
    const parsed = queryString.parse(window.location.search);
    const [search, setSearch] = useState(null);
    const [category, setCategory] = useState(null);
    const [release_type, setRelease_type] = useState(null);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const movies = getMovies(selector);
    useEffect(() => {
        if (parsed.search !== undefined) {
            setSearch(parsed.search);
        }
        if (search != null) {
            let params = { search: search };
            dispatch(fetchMovies(params));
        }
    }, [search]);
    return (
        <>
            <Header />
            <section class="content">
                <div class="pt">
                    <h1 class="section-heading m20 p10">Search</h1>
                </div>
                {console.log(movies)}
                <div class="grid">
                    {movies.results.map(movie => (
                        <Card movie={movie} />
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Search;
