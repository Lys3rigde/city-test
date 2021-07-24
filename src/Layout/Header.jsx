import logo from './logo.svg';

export const Header = () => {
        return (
            <header className='header'>
                <a href="https://city-mobil.ru" target='_blank' rel='noreferrer' className='header__link'>
                    <img src={logo} alt="Logo" className='header__logo'/>
                </a>
            </header>
        );
    }