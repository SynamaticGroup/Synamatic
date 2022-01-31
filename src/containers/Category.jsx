import React, { useEffect, useState } from 'react';
import API from '../API';
import Card from '../components/common/Card';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Slider from 'react-slick';
import Router from '../Router';

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

    const settings = {
        className: 'center',
        infinite: false,
        centerPadding: '60px',
        slidesToShow: 4,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
        },
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    speed: 500
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    speed: 500
                }
            },
            {
                breakpoint: 530,
                settings: {
                    className: 'center',
                    centerMode: true,
                    infinite: true,
                    centerPadding: '60px',
                    slidesToShow: 1,
                    speed: 500,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 380,
                settings: {
                    infinite: true,
                    centerPadding: '60px',
                    slidesToShow: 1,
                    speed: 500,
                    initialSlide: 0
                }
            }
        ]
    };
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
                    <Slider {...settings}>
                        {action.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </Slider>
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
                    <Slider {...settings}>
                        {horror.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </Slider>
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
                    <Slider {...settings}>
                        {drama.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </Slider>
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
                    <Slider {...settings}>
                        {family.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </Slider>
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
                    <Slider {...settings}>
                        {romance.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </Slider>
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
                    <Slider {...settings}>
                        {animation.map(movie => (
                            <Card movie={movie} />
                        ))}
                    </Slider>
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
