import "./Contact.css";
import { useState } from "react";
import api from "../services/api";

import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaAmbulance
} from "react-icons/fa";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const [validationError, setValidationError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    
        setValidationError("");
        setErrorMessage("");
        setSuccessMessage("");
    
        if (fieldErrors[e.target.name]) {
    
            setFieldErrors((prev) => ({
                ...prev,
                [e.target.name]: ""
            }));
    
        }
    
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const errors = {};

        if (!formData.name.trim()) {
            errors.name = "Name is required.";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        }

        if (!formData.subject.trim()) {
            errors.subject = "Subject is required.";
        }

        if (!formData.message.trim()) {
            errors.message = "Message is required.";
        }

        if (Object.keys(errors).length > 0) {

            setFieldErrors(errors);

            setValidationError("Please correct the highlighted fields.");

            setTimeout(() => {
            setValidationError("");
            }, 4000);

            return;
        }

        setFieldErrors({});
        setValidationError("");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {

            setFieldErrors({
                email: "Please enter a valid email address."
            });

            setValidationError("Please correct the highlighted fields.");

            setTimeout(() => {
                setValidationError("");
            }, 4000);

            return;
        }

        try {

            await api.post("contact/", formData);

            setSuccessMessage("Your message has been sent successfully!");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

        } catch (error) {

            console.error(error);

            setSuccessMessage("Unable to send message.");

        }

    };

    return (

        <div className="contact-page">

            <div className="contact-header">

                <h1>Contact Us</h1>

                <p>
                    We'd love to hear from you. Reach out for appointments,
                    enquiries or any healthcare assistance.
                </p>

            </div>

            <div className="contact-container">

                <div className="contact-info">

                    <div className="info-card">
                        <FaMapMarkerAlt />
                        <h3>Address</h3>
                        <p>
                            SVR Multi Speciality Hospital
                            Road No. 12, Banjara Hills
                            Hyderabad, Telangana – 500034
                        </p>
                    </div>

                    <div className="info-card">
                        <FaPhoneAlt />
                        <h3>Phone</h3>
                        <p>+91 40 2456 7890</p>
                    </div>

                    <div className="info-card">
                        <FaEnvelope />
                        <h3>Email</h3>
                        <p>info@svrhospital.com</p>
                    </div>

                    <div className="info-card">
                        <FaAmbulance />
                        <h3>Emergency</h3>
                        <p>24 × 7 Emergency Services</p>
                    </div>

                </div>

                <div className="contact-form-box">

                    <h2>Send us a Message</h2>

                    {successMessage && (
                        <div className="success-message">
                            {successMessage}
                        </div>
                    )}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <input
                            className={fieldErrors.name ? "input-error" : ""}
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                       
                        {fieldErrors.name && (
                            <small className="field-error">
                               {fieldErrors.name}
                            </small>
                        )}


                        <input
                            className={fieldErrors.email ? "input-error" : ""}
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        {fieldErrors.email && (
                            <small className="field-error">
                                {fieldErrors.email}
                            </small>
                        )}

                        <input
                            className={fieldErrors.subject ? "input-error" : ""}
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                        />

                        {fieldErrors.subject && (
                            <small className="field-error">
                                {fieldErrors.subject}
                            </small>
                        )}

                        <textarea
                            className={fieldErrors.message ? "input-error" : ""}
                            rows="6"
                            name="message"
                            placeholder="Write your message..."
                            value={formData.message}
                            onChange={handleChange}
                        />

                        {fieldErrors.message && (
                            <small className="field-error">
                                {fieldErrors.message}
                            </small>
                        )}

                        <button
                            type="submit"
                            className="primary-btn"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default Contact;