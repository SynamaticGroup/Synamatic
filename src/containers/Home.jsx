import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ImgCover from '../assets/img/spider_man_hd_spider_man_no_way_home-1-scaled.jpg';
import ImgButton from '../assets/img/delete.png';
import Imgbutton from '../assets/img/sp-cover.png';
import { getMovies } from '../reducks/movies/selectors';
import queryString from 'query-string';
import API from '../API';
import Card from '../components/common/Card';
import Slider from 'react-slick';
const api = new API();
const Home = () => {
    const parsed = queryString.parse(window.location.search);
    const [moviesComingSoon, setMoviesCommingSoon] = useState(null);
    const [moviesNewReleased, setMoviesNewReleased] = useState(null);
    const selector = useSelector(state => state);
    const movies = getMovies(selector);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const TRENDING_API = `https://api.themoviedb.org/3/discover/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&language=en-US&sort_by=popularity.desc&page=1`;
    const [trending, setTrending] = useState(null);

    useEffect(() => {
        fetch(TRENDING_API)
            .then(res => res.json())
            .then(data => {
                setTrending(data.results);
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
            <div className="homepage">
                <div className="home_content">
                    <div className="desktop">
                        <h1>WATCH NOW</h1>
                        <p className="movie-desc">
                            With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked
                            and no longer able to separate his normal life as Peter Parker from the high stakes of being
                            a superhero. When Peter asks for help from Doctor Strange, the stakes become even more
                            dangerous, forcing him to discover what it truly means to be Spider-Man.
                        </p>
                        <a href="https://www.youtube.com/watch?v=JfVOs4VSpmA" target="_blank" className="play">
                            Play
                        </a>
                    </div>
                    <div className="mobile">
                        <h1>WATCH NOW</h1>
                        <div className="buttons">
                            <a href="https://www.youtube.com/watch?v=JfVOs4VSpmA" target="_blank" className="play">
                                Play
                            </a>
                            <div onClick={handleClick} className="more_info">
                                More Info
                            </div>
                        </div>
                        <div className={click ? 'info_box1 active_box' : 'info_box1 '}>
                            <div className="info_box">
                                <img className="close" src={ImgButton} onClick={closeMenu}></img>
                                <img src={ImgCover}></img>
                                <h1>SPIDER MAN: No Way Home</h1>
                                <p className="movie-desc">
                                    With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is
                                    unmasked and no longer able to separate his normal life as Peter Parker from the
                                    high stakes of being a superhero. When Peter asks for help from Doctor Strange, the
                                    stakes become even more dangerous, forcing him to discover what it truly means to be
                                    Spider-Man.
                                </p>
                                <a href="https://www.youtube.com/watch?v=JfVOs4VSpmA" target="_blank" className="play">
                                    Play
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="content">
                <h1 class="section-heading m20 p10">Newly Released</h1>
                {trending ? (
                    <div className="container-fluid movie-app">
                        <Slider {...settings}>
                            {trending.map(movie => (
                                <Card movie={movie} />
                            ))}
                        </Slider>
                    </div>
                ) : (
                    <div class="no-post">
                        <p>No movies here yet...</p>
                    </div>
                )}

                <hr class="divider" />

                <h1 class="section-heading m20 ">Coming Soon</h1>
                {moviesComingSoon && moviesComingSoon.results.length > 0 ? (
                    <div class="grid">
                        {moviesComingSoon.results.map(movie => (
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

export default Home;
