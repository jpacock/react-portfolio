import React from 'react';

import { GrFacebook, GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";
import { FaInstagramSquare, FaRegBellSlash } from "react-icons/fa";

import { Link } from 'rebass';

const Toolbar = () => {
    return (

        <div className="side-container-overlay">
            {/* <img className="profile-picture" src="/images/profile-picture.png"/> */}
            <div className="profile-container">
                <div className="profile">
                    <div className="profile-name">Jordan Acock</div>
                    <div className="profile-job">IBM Software Consultant</div>
                    <hr className="horizontal-rule" />
                    <div >
                        <Link href="https://www.linkedin.com/in/jordan-acock-8ba91152/"><GrLinkedin className="contact-icon" /></Link>
                        <Link href="https://www.github.com/jpacock"><GrGithub className="contact-icon" /></Link>
                        <Link href="https://www.instagram.com/jordan.acock"><GrInstagram className="contact-icon" /></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toolbar;