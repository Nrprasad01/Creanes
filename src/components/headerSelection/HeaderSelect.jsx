import React, { useState } from 'react';
import './HeaderSelect.css'; // Import CSS file for styling
import PopupForm from './PopupForm/PopupForm';
import crean from '../../images/crean.jpeg'
const HeaderSelect = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(prevState => !prevState);
    };
    return (
        <>
            <nav className="navbar2001">
                <div className="nav-logo2001">
                    {/* <span><img src={crean} alt='crean' style={{ height: "50px", width: "70px", borderRadius: "10px" }} /></span> */}
                    <span>FRIENDS CRANES</span>
                </div>
                <ul className="nav-links2001">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className='login2001' onClick={togglePopup}>LogIn</button>
                {showPopup && <PopupForm onClose={togglePopup} />}
            </nav>

        </>
    );
}

export default HeaderSelect;
