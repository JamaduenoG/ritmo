import Logo from '../assets/icons/ritmo-logo.svg';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='content align-center two-columns'>
                <div>
                    <img className='logo' src={Logo} alt='Ritmo logo' />
                </div>
                <div className='right'>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Header;