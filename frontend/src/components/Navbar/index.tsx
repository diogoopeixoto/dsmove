import { ReactComponent as GithubIcon } from 'assets/img/githubIcon.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovies-nav-content'>
                    <h1>DSMovies</h1>
                    <a href="https://github.com/diogoopeixoto">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/diogopeixoto</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;