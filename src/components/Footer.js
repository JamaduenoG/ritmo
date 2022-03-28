import Logo from '../assets/icons/ritmo-logo-white.svg';

const Footer = () => {

    return (
        <div className='footer'>
             <div className='content align-center two-columns'>
                <div>
                    <img className='logo' src={Logo} alt='Ritmo logo' />
                </div>
                <div className='right'>
                    <a href='https://www.linkedin.com/in/juanantoniomadueno' target='_blank' rel='noreferrer'>Juan Antonio Madueño</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;