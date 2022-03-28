import Logo from '../assets/icons/ritmo-logo.svg';

const Header = ({children}) => {

    return (
        <div className='header'>
            <div className='content align-center two-columns'>
                <div>
                    <img className='logo' src={Logo} alt='Ritmo logo' />
                </div>
                <div className='right'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Header;