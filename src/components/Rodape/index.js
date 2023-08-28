import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='rodapeDaPagina'>

            <nav>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/' target='_blank'>
                            <img src='assets/images/fb.png' alt='Facebook link'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://twitter.com/' target='_blank'>
                            <img src='assets/images/tw.png' alt='Twitter link'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/' target='_blank'>
                            <img src='assets/images/ig.png' alt='Instagram link'/>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className='logo'>
                <img src='assets/images/logo.png' alt='Organo logo'/>
            </div>

            <p>Desenvolvido por Alura</p>
        </footer>
    )
};

export default Rodape