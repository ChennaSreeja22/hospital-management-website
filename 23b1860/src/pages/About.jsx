import "./About.css";
import { Link } from "react-router-dom";

import {
    FaHeartbeat,
    FaHospital,
    FaUserMd,
    FaAward
} from "react-icons/fa";

function About() {
    return (
        <div className="about-page">

            {/* Hero Section */}
            <section className="about-hero">

                <div className="about-hero-left">

                    <h1>About SVR Multi Speciality Hospital</h1>

                    <p>
                        Delivering compassionate, affordable and advanced
                        healthcare through experienced specialists,
                        modern medical technology and patient-centered care.
                    </p>

                </div>

                <div className="about-hero-right">

                    <img
                        src="/hospital.png"
                        alt="SVR Hospital"
                    />

                </div>

            </section>

            {/* Who We Are */}
            <section className="about-content">

                <div className="about-image">

                    <img
                        src="/hospital.png"
                        alt="Hospital"
                    />

                </div>

                <div className="about-text">

                    <h2>Who We Are</h2>

                    <p>
                        SVR Multi Speciality Hospital is committed to providing
                        world-class healthcare with compassion, innovation and
                        clinical excellence.
                    </p>

                    <p>
                        Our experienced doctors, advanced diagnostic facilities
                        and patient-first approach ensure every individual
                        receives high-quality treatment in a safe and caring
                        environment.
                    </p>

                </div>

            </section>

            {/* Mission & Vision */}
            <section className="mission-section">

                <div className="mission-card">

                    <FaHeartbeat />

                    <h3>Our Mission</h3>

                    <p>
                        To provide accessible, compassionate and high-quality healthcare
                        through medical excellence, advanced technology and a
                        patient-centered approach.
                    </p>

                </div>

                <div className="mission-card">

                    <FaHospital />

                    <h3>Our Vision</h3>

                    <p>
                        To become one of India's most trusted multi speciality hospitals
                        by delivering innovative healthcare services and improving the
                        lives of every patient we serve.
                    </p>

                </div>

            </section>

            {/* Why Choose Us */}

            <section className="why-us">   

                <h2>Why Choose SVR Multi Speciality Hospital?</h2>

                <div className="why-grid">

                    <div className="why-card">

                        <FaUserMd />

                        <h3>Experienced Specialists</h3>

                        <p>
                            Our highly qualified doctors bring years of expertise
                            across multiple medical specialties.
                        </p>

                    </div>

                    <div className="why-card">

                        <FaHospital />

                        <h3>Modern Infrastructure</h3>

                        <p>
                            Equipped with advanced medical technology and
                            state-of-the-art diagnostic facilities.
                        </p>

                    </div>

                    <div className="why-card">

                        <FaHeartbeat />

                        <h3>24 × 7 Emergency Care</h3>

                        <p>
                            Immediate emergency response with dedicated
                            healthcare professionals available around the clock.
                        </p>

                    </div>

                    <div className="why-card">

                        <FaAward />

                        <h3>Patient-First Care</h3>

                        <p>
                            Every treatment plan is personalized with compassion,
                            safety and comfort as our highest priorities.
                        </p>

                    </div>

                </div>

            </section>

            {/* Hospital Statistics */}

            <section className="stats-section">

                <div className="stat-card">

                    <h2>25+</h2>

                    <p>Experienced Doctors</p>

                </div>

                <div className="stat-card">

                    <h2>10+</h2>

                    <p>Medical Departments</p>

                </div>

                <div className="stat-card">

                    <h2>50K+</h2>

                    <p>Happy Patients</p>

                </div>

                <div className="stat-card">

                    <h2>24 × 7</h2>

                    <p>Emergency Care</p>

                </div>

            </section>

            {/* Call To Action */}

            <section className="about-cta">

                <h2>Your Health Is Our Priority</h2>

                <p>
                    Schedule an appointment with our experienced specialists
                    and receive quality healthcare tailored to your needs.
                </p>

                <Link to="/appointment">
                    <button className="primary-btn">
                        Book an Appointment
                    </button>
                </Link>

            </section>

        </div>
    );
}

export default About;