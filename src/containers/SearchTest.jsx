import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../components/common/SearchBox';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/common/Card';
import SearchBar from '../components/common/SearchBox';
import logo from '../assets/img/SYNAMATIC.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const TRENDING_API =
    'https://api.themoviedb.org/3/discover/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&language=en-US&sort_by=popularity.desc&page=1';

const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=a5c5e6fda0c26677175e238d7ee0e1e0&sort_by=popularity.desc&query=';
const SearchPage = () => {
    //NAV

    //Mobile View
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    //Change color on scroll
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 10) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener('scroll', changeColor);

    //Close Mobile View
    const closeMenu = () => setClick(false);

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
        },
        {
            adult: false,
            backdrop_path: '/ur19n7Zabzf7wfhK4MrlFDJiZPI.jpg',
            genre_ids: [16, 10751, 14, 35, 12],
            id: 585083,
            original_language: 'en',
            original_title: 'Hotel Transylvania: Transformania',
            overview:
                'When Van Helsing\'s mysterious invention, the "Monsterfication Ray," goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it\'s too late, and before they drive each other crazy.',
            popularity: 9885.664,
            poster_path: '/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg',
            release_date: '2022-01-13',
            title: 'Hotel Transylvania: Transformania',
            video: false,
            vote_average: 7.7,
            vote_count: 835
        },
        {
            adult: false,
            backdrop_path: '/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg',
            genre_ids: [28, 12, 878],
            id: 634649,
            original_language: 'en',
            original_title: 'Spider-Man: No Way Home',
            overview:
                'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
            popularity: 6034.499,
            poster_path: '/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
            release_date: '2021-12-15',
            title: 'Spider-Man: No Way Home',
            video: false,
            vote_average: 8.4,
            vote_count: 4572
        },
        {
            adult: false,
            backdrop_path: '/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg',
            genre_ids: [16, 35, 10751, 10402],
            id: 438695,
            original_language: 'en',
            original_title: 'Sing 2',
            overview:
                'Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.',
            popularity: 5236.191,
            poster_path: '/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg',
            release_date: '2021-12-01',
            title: 'Sing 2',
            video: false,
            vote_average: 8.3,
            vote_count: 1167
        },
        {
            adult: false,
            backdrop_path: '/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg',
            genre_ids: [16, 35, 10751, 14],
            id: 568124,
            original_language: 'en',
            original_title: 'Encanto',
            overview:
                "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
            popularity: 4974.158,
            poster_path: '/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg',
            release_date: '2021-11-24',
            title: 'Encanto',
            video: false,
            vote_average: 7.8,
            vote_count: 3211
        },
        {
            adult: false,
            backdrop_path: '/EnDlndEvw6Ptpp8HIwmRcSSNKQ.jpg',
            genre_ids: [35, 14, 12],
            id: 425909,
            original_language: 'en',
            original_title: 'Ghostbusters: Afterlife',
            overview:
                'When a single mom and her two kids arrive in a small town, they begin to discover their connection to the original Ghostbusters and the secret legacy their grandfather left behind.',
            popularity: 3910.807,
            poster_path: '/sg4xJaufDiQl7caFEskBtQXfD4x.jpg',
            release_date: '2021-11-11',
            title: 'Ghostbusters: Afterlife',
            video: false,
            vote_average: 7.7,
            vote_count: 1403
        },
        {
            adult: false,
            backdrop_path: '/yfNbZ34Yt2S0DdgGH38bLDhJPiM.jpg',
            genre_ids: [28, 53],
            id: 860623,
            original_language: 'en',
            original_title: 'Last Man Down',
            overview:
                "After civilization succumbs to a deadly pandemic and his wife is murdered, a special forces soldier abandons his duty and becomes a hermit in the Nordic wilderness. Years later, a wounded woman appears on his doorstep. She's escaped from a lab and her pursuers believe her blood is the key to a worldwide cure. He's hesitant to get involved, but all doubts are cast aside when he discovers her pursuer is none other than Commander Stone, the man that murdered his wife some years ago.",
            popularity: 3559.395,
            poster_path: '/z6gKBF79tvyF9OCLhttjKsBkp1.jpg',
            release_date: '2021-10-19',
            title: 'Last Man Down',
            video: false,
            vote_average: 6.8,
            vote_count: 129
        },
        {
            adult: false,
            backdrop_path: '/o76ZDm8PS9791XiuieNB93UZcRV.jpg',
            genre_ids: [27, 28, 878],
            id: 460458,
            original_language: 'en',
            original_title: 'Resident Evil: Welcome to Raccoon City',
            overview:
                'Once the booming home of pharmaceutical giant Umbrella Corporation, Raccoon City is now a dying Midwestern town. The company’s exodus left the city a wasteland…with great evil brewing below the surface. When that evil is unleashed, the townspeople are forever…changed…and a small group of survivors must work together to uncover the truth behind Umbrella and make it through the night.',
            popularity: 3003.765,
            poster_path: '/7uRbWOXxpWDMtnsd2PF3clu65jc.jpg',
            release_date: '2021-11-24',
            title: 'Resident Evil: Welcome to Raccoon City',
            video: false,
            vote_average: 6.1,
            vote_count: 948
        },
        {
            adult: false,
            backdrop_path: '/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg',
            genre_ids: [878, 28, 12],
            id: 624860,
            original_language: 'en',
            original_title: 'The Matrix Resurrections',
            overview:
                "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
            popularity: 3005.201,
            poster_path: '/8c4a8kE7PizaGQQnditMmI1xbRp.jpg',
            release_date: '2021-12-16',
            title: 'The Matrix Resurrections',
            video: false,
            vote_average: 6.9,
            vote_count: 2381
        },
        {
            adult: false,
            backdrop_path: '/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg',
            genre_ids: [878, 28, 12],
            id: 580489,
            original_language: 'en',
            original_title: 'Venom: Let There Be Carnage',
            overview:
                'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.',
            popularity: 2407.306,
            poster_path: '/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg',
            release_date: '2021-09-30',
            title: 'Venom: Let There Be Carnage',
            video: false,
            vote_average: 7.1,
            vote_count: 5929
        },
        {
            adult: false,
            backdrop_path: '/AmLpWYm9R3Ur2FLPgj5CH3wR8wp.jpg',
            genre_ids: [878, 53],
            id: 739413,
            original_language: 'en',
            original_title: 'Mother/Android',
            overview:
                'Georgia and her boyfriend Sam go on a treacherous journey to escape their country, which is caught in an unexpected war with artificial intelligence. Days away from the arrival of their first child, the couple must face No Man’s Land—a stronghold of the android uprising—in hopes of reaching safety before giving birth.',
            popularity: 1997.133,
            poster_path: '/rO3nV9d1wzHEWsC7xgwxotjZQpM.jpg',
            release_date: '2021-12-17',
            title: 'Mother/Android',
            video: false,
            vote_average: 5.9,
            vote_count: 294
        },
        {
            adult: false,
            backdrop_path: '/8jIRAV5KVZeIP6tjI1NuCfb9Il0.jpg',
            genre_ids: [28, 12, 14],
            id: 566525,
            original_language: 'en',
            original_title: 'Shang-Chi and the Legend of the Ten Rings',
            overview:
                'Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.',
            popularity: 1651.023,
            poster_path: '/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg',
            release_date: '2021-09-01',
            title: 'Shang-Chi and the Legend of the Ten Rings',
            video: false,
            vote_average: 7.8,
            vote_count: 5252
        },
        {
            adult: false,
            backdrop_path: '/mo57hzhW3BcZL1f7MNteWKHsmlN.jpg',
            genre_ids: [28, 53],
            id: 763788,
            original_language: 'en',
            original_title: 'Dangerous',
            overview:
                'A reformed sociopath heads to a remote island after the death of his brother. Soon after his arrival, the island falls under siege from a deadly gang of mercenaries, and when he discovers their role in his brother’s demise, he sets out on a relentless quest for vengeance.',
            popularity: 1650.471,
            poster_path: '/vTtkQGC7qKlSRQJZYtAWAmYdH0A.jpg',
            release_date: '2021-11-05',
            title: 'Dangerous',
            video: false,
            vote_average: 6.7,
            vote_count: 118
        },
        {
            adult: false,
            backdrop_path: '/dK12GIdhGP6NPGFssK2Fh265jyr.jpg',
            genre_ids: [28, 35, 80, 53],
            id: 512195,
            original_language: 'en',
            original_title: 'Red Notice',
            overview:
                "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
            popularity: 1549.805,
            poster_path: '/lAXONuqg41NwUMuzMiFvicDET9Y.jpg',
            release_date: '2021-11-04',
            title: 'Red Notice',
            video: false,
            vote_average: 6.8,
            vote_count: 2738
        },
        {
            adult: false,
            backdrop_path: '/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg',
            genre_ids: [16, 28, 12, 14],
            id: 635302,
            original_language: 'ja',
            original_title: '劇場版「鬼滅の刃」無限列車編',
            overview:
                "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
            popularity: 1224.115,
            poster_path: '/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg',
            release_date: '2020-10-16',
            title: 'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train',
            video: false,
            vote_average: 8.4,
            vote_count: 2052
        },
        {
            adult: false,
            backdrop_path: '/7esxXkFyl0dVD7ViR0Q6fK5VeXB.jpg',
            genre_ids: [28, 53, 80],
            id: 787310,
            original_language: 'en',
            original_title: 'Survive the Game',
            overview:
                'When cop David is injured in a drug bust gone wrong, his partner Cal chases the two criminals who shot him. They all land at a remote farm owned by troubled vet Eric, and as Cal and Eric plot their defense, more of the gang arrives - along with a wounded David. Outnumbered, the three heroes must use stealth, smarts, and good shooting to take down the drug-dealing mob.',
            popularity: 1281.654,
            poster_path: '/xF1uc2pEf34X2G41wvZaF5H0V7C.jpg',
            release_date: '2021-10-08',
            title: 'Survive the Game',
            video: false,
            vote_average: 5.9,
            vote_count: 82
        },
        {
            adult: false,
            backdrop_path: '/1Wlwnhn5sXUIwlxpJgWszT622PS.jpg',
            genre_ids: [16, 35, 10751],
            id: 585245,
            original_language: 'en',
            original_title: 'Clifford the Big Red Dog',
            overview:
                'As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.',
            popularity: 1207.285,
            poster_path: '/oifhfVhUcuDjE61V5bS5dfShQrm.jpg',
            release_date: '2021-11-10',
            title: 'Clifford the Big Red Dog',
            video: false,
            vote_average: 7.4,
            vote_count: 903
        },
        {
            adult: false,
            backdrop_path: '/9fzNf2QcsHVvdx5g5QUOgAWpADw.jpg',
            genre_ids: [18, 27, 9648],
            id: 516329,
            original_language: 'en',
            original_title: 'Antlers',
            overview:
                'A small-town Oregon teacher and her brother, the local sheriff, discover a young student is harbouring a dangerous secret that could have frightening consequences.',
            popularity: 1163.892,
            poster_path: '/cMch3tiexw3FdOEeZxMWVel61Xg.jpg',
            release_date: '2021-10-28',
            title: 'Antlers',
            video: false,
            vote_average: 6.4,
            vote_count: 379
        },
        {
            adult: false,
            backdrop_path: '/1BqX34aJS5J8PefVnQSfQIEPfkl.jpg',
            genre_ids: [80, 28, 53],
            id: 826749,
            original_language: 'en',
            original_title: 'Fortress',
            overview:
                'The story revolves around a top-secret resort for retired U.S. intelligence officers. A group of criminals led by Balzary breach the compound, hellbent on revenge on Robert, forcing the retired officer and his son to save the day.',
            popularity: 1060.68,
            poster_path: '/vQxtoPJVfpHgL7DCg9hQFZKDWJa.jpg',
            release_date: '2021-12-17',
            title: 'Fortress',
            video: false,
            vote_average: 6.3,
            vote_count: 121
        },
        {
            adult: false,
            backdrop_path: '/7h5WAPAcUzOWpp2jrwHBB48790j.jpg',
            genre_ids: [16, 14],
            id: 843241,
            original_language: 'ja',
            original_title: '劇場版 七つの大罪 光に呪われし者たち',
            overview:
                'With the help of the "Dragon Sin of Wrath" Meliodas and the worst rebels in history, the Seven Deadly Sins, the "Holy War", in which four races, including Humans, Goddesses, Fairies and Giants fought against the Demons, is finally over. At the cost of the "Lion Sin of Pride" Escanor\'s life, the Demon King was defeated and the world regained peace. After that, each of the Sins take their own path.',
            popularity: 1011.733,
            poster_path: '/k0ThmZQl5nHe4JefC2bXjqtgYp0.jpg',
            release_date: '2021-07-02',
            title: 'The Seven Deadly Sins: Cursed by Light',
            video: false,
            vote_average: 8,
            vote_count: 283
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
            <div className={color ? 'header header-bg' : 'header'}>
                <nav className="navbar">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" />
                    </Link>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <div className="nav-menu-2">
                            <Link to="/categories" onClick={closeMenu} className="nav-item">
                                Categories
                            </Link>
                            <Link to="/favorites" onClick={closeMenu} className="nav-item">
                                Favorites
                            </Link>
                        </div>
                    </ul>
                    <div className="nav-end">
                        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
                        <div className="hamburger">
                            {click ? (
                                <FaTimes size={30} style={{ color: '#ffffff' }} />
                            ) : (
                                <FaBars size={30} style={{ color: '#ffffff' }} />
                            )}
                        </div>
                    </div>
                </nav>
            </div>
            <hr class="divider" />
            <div className="grid">
                {movies.map(movie => (
                    <Card movie={movie} />
                ))}
            </div>
        </section>
    );
};

export default SearchPage;
