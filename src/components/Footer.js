import '../css/footer.css';
import { Link } from 'react-router-dom';

export function Footer({ dark }) {
    return (<>
        <div className={dark ? 'footerDark' : 'footerLight'}>
            <h3>Karan Maurya</h3>
            <div>
                <Link to='https://github.com/KaranMaurya7'  target='_blank' rel="noopener noreferrer">

                    <img className={dark ? 'darkiconF' : 'lighticonF'} src='https://cdn-icons-png.flaticon.com/128/25/25231.png' alt='github' />
                </Link>

                <Link to='https://www.linkedin.com/in/karan-maurya-9b6b29259/'  target='_blank'rel="noopener noreferrer">
                    <img className={dark ? 'darkiconF' : 'lighticonF'} src='https://cdn-icons-png.flaticon.com/128/1384/1384014.png' alt='Linkdein' />
                </Link>
                <Link to ='/contact'>
                    <img className={dark ? 'darkiconF' : 'lighticonF'} src='https://cdn-icons-png.flaticon.com/128/6244/6244710.png' alt='mail' />
                </Link>
            </div>
            <p>© 2023 Karan Maurya. All right reserved</p>
        </div>
    </>)
}