import { Navbar } from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../css/transition.css';


export function Error({ dark }) {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/'), 5000);
    }, [navigate]);
    return (<>
        <>
            <Navbar dark={dark} />
            <div className = {dark ? 'errorElelight':'errorEledark'}>
                <h1> Something went Wrong</h1>
                <p>We are redirecting you to Home page </p>
            </div>
        </>
    </>
    )


}