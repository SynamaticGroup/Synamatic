import React, { useEffect, useState } from 'react';
import API from '../API';
import Card from '../components/common/Card';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const Category = () => {
    const ACTION_API = `https://api.themoviedb.org/3/discover/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`;
    const DRAMA_API = `https://api.themoviedb.org/3/discover/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate`;
    const HORROR_API = `https://api.themoviedb.org/3/discover/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`;
    const FAMILY_API = `https://api.themoviedb.org/3/discover/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751&with_watch_monetization_types=flatrate`;
    const ROMANCE_API = `https://api.themoviedb.org/3/discover/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`;
    const ANIMATION_API = `https://api.themoviedb.org/3/discover/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate`;
    const [action, setAction] = useState(null);
    const [horror, setHorror] = useState(null);
    const [drama, setDrama] = useState(null);
    const [family, setFamily] = useState(null);
    const [romance, setRomance] = useState(null);
    const [animation, setAnimation] = useState(null);

    useEffect(() => {
        fetch(DRAMA_API)
            .then(res => res.json())
            .then(data => {
                setDrama(data.results);
            });
    }, []);
    useEffect(() => {
        fetch(ACTION_API)
            .then(res => res.json())
            .then(data => {
                setAction(data.results);
            });
    }, []);
    useEffect(() => {
        fetch(HORROR_API)
            .then(res => res.json())
            .then(data => {
                setHorror(data.results);
            });
    }, []);
    useEffect(() => {
        fetch(FAMILY_API)
            .then(res => res.json())
            .then(data => {
                setFamily(data.results);
            });
    }, []);
    useEffect(() => {
        fetch(ROMANCE_API)
            .then(res => res.json())
            .then(data => {
                setRomance(data.results);
            });
    }, []);
    useEffect(() => {
        fetch(ANIMATION_API)
            .then(res => res.json())
            .then(data => {
                setAnimation(data.results);
            });
    }, []);
    return (
        <>
            <Header />
            <section class="content">
                <div class="pt">
                    <h1 id="action" class="section-heading m20 p10">
                        Action
                    </h1>
                </div>
                {action ? (
                    <div class="grid">
                        {action.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}
                <hr class="divider" />
                <h1 id="horror" class="section-heading m20">
                    Horror
                </h1>
                {horror ? (
                    <div class="grid">
                        {horror.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}
                <hr class="divider" />
                <h1 id="drama" class="section-heading m20">
                    Drama
                </h1>

                {drama ? (
                    <div class="grid">
                        {drama.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}
                <hr class="divider" />
                <h1 id="family" class="section-heading m20">
                    Family
                </h1>

                {family ? (
                    <div class="grid">
                        {family.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}
                <hr class="divider" />
                <h1 id="romance" class="section-heading m20">
                    Romance
                </h1>

                {romance ? (
                    <div class="grid">
                        {romance.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}
                <hr class="divider" />
                <h1 id="animation" class="section-heading m20">
                    Animation
                </h1>

                {animation ? (
                    <div class="grid">
                        {animation.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}
            </section>
            <Footer />
        </>
    );
};

export default Category;
