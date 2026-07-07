import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaHeartbeat
} from "react-icons/fa";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">

                    <div className="footer-logo">

                        <img src={logo} alt="SVR Hospital Logo" />

                        <h2>SVR Multi Speciality Hospital</h2>

                    </div>

                    <p>
                        Providing compassionate, high-quality healthcare with 
                        experienced specialists,  advanced medical technology,
                        and personalized treatment for every patient.
                    </p>

                </div>

                <div className="footer-section">

                    <h3>Quick Links</h3>

                    <ul>

                        <li><Link to="/">Home</Link></li>

                        <li><Link to="/about">About</Link></li>

                        <li><Link to="/departments">Departments</Link></li>

                        <li><Link to="/doctors">Doctors</Link></li>

                        <li><Link to="/appointment">Appointment</Link></li>

                        <li><Link to="/contact">Contact</Link></li>

                    </ul>

                </div>

                <div className="footer-section">

                    <h3>Departments</h3>

                    <ul>

                        <li>Cardiology</li>

                        <li>Neurology</li>

                        <li>Orthopedics</li>

                        <li>Pediatrics</li>

                        <li>Dermatology</li>

                    </ul>

                </div>

                <div className="footer-section">

                    <h3>Contact</h3>

                    <p>
                        <FaMapMarkerAlt />
                         Road No. 12, Banjara Hills<br />
                         Hyderabad, Telangana - 500034
                    </p>

                    <p>
                        <FaPhoneAlt /> +91 40 2456 7890
                    </p>

                    <p>
                        <FaEnvelope /> info@svrhospital.com
                    </p>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 SVR Multi Speciality Hospital. All Rights Reserved.
                </p>

            </div>

        </footer>

    );

}

export default Footer;