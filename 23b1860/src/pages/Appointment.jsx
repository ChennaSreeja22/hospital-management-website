import "./Appointment.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../services/api";

function Appointment() {

    const location = useLocation();

    const selectedDoctorId = location.state?.doctorId || "";
    const selectedDoctorName = location.state?.doctorName || "";

    const [doctors, setDoctors] = useState([]);

    const [successMessage, setSuccessMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const [validationError, setValidationError] = useState("");

    const [fieldErrors, setFieldErrors] = useState({});

    const [formData, setFormData] = useState({
        patient_name: "",
        email: "",
        phone: "",
        doctor: selectedDoctorId,
        appointment_date: "",
        appointment_time: "",
        reason: ""
    });
    
    useEffect(() => {
        api.get("doctors/")
            .then((response) => {
                setDoctors(response.data);
  
                if (selectedDoctorId) {
                    setFormData((prev) => ({
                        ...prev,
                        doctor: selectedDoctorId
                    }));
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [selectedDoctorId]);

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

        if (!formData.patient_name.trim()) {
            errors.patient_name = "Patient name is required.";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        }

        if (!formData.phone.trim()) {
            errors.phone = "Phone number is required.";
        }

        if (!formData.doctor) {
            errors.doctor = "Please select a doctor.";
        }

        if (!formData.appointment_date) {
            errors.appointment_date = "Please choose a date.";
        }

        if (!formData.appointment_time) {
            errors.appointment_time = "Please choose a time.";
        }

        if (!formData.reason.trim()) {
            errors.reason = "Reason is required.";
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

        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(formData.phone)) {

            setFieldErrors({
                phone: "Phone number must contain exactly 10 digits."
            });

            setValidationError("Please correct the highlighted fields.");

            setTimeout(() => {
                setValidationError("");
            }, 4000);

            return;
        }
  
        try {
            await api.post("appointments/", formData);
    
            setErrorMessage("");
  
            setFormData({
                patient_name: "",
                email: "",
                phone: "",
                doctor: selectedDoctorId || "",
                appointment_date: "",
                appointment_time: "",
                 reason: ""
            });
      
            setSuccessMessage("Appointment booked successfully!");
      
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
      
            if (Object.keys(errors).length > 0) {

                setFieldErrors(errors);
          
                setValidationError("Please correct the highlighted fields.");
          
                setTimeout(() => {
                    setValidationError("");
                }, 4000);
          
                return;
            }
      
        }
        
        catch (error) {
          console.error(error);
      
          setSuccessMessage("");
        
          setErrorMessage("Unable to book appointment. Please try again.");
      
          setTimeout(() => {
              setErrorMessage("");
          }, 4000);
        }
    };   

  return (
    <div className="appointment-page">

      <div className="appointment-container">

        <h1>Book an Appointment</h1>

        <p>
          Schedule your consultation with our experienced specialists.
        </p>

        {selectedDoctorName && (
            <div className="selected-doctor">
                👨‍⚕️ Booking an appointment with <strong>{selectedDoctorName}</strong>
            </div>
        )}

        {successMessage && (
            <div className="success-message">
                {successMessage}
            </div>
        )}

        {errorMessage && (
            <div className="error-message">
                {errorMessage}
            </div>
        )}

        {validationError && (
            <div className="validation-message">
                {validationError}
            </div>
        )}

        <form 
            className="appointment-form"
            onSubmit={handleSubmit}
        >
          <div className="form-row">

            <div className="form-group">
              <label>Patient Name</label>
              
              <input
                  className={fieldErrors.patient_name ? "input-error" : ""}
                  type="text"
                  name="patient_name"
                  value={formData.patient_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
              />

              {fieldErrors.patient_name && (
                  <small className="field-error">
                      {fieldErrors.patient_name}
                  </small>
              )}  
            </div>  

            <div className="form-group">
              <label>Email</label>
              <input
                  className={fieldErrors.email ? "input-error" : ""}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
              />

              {fieldErrors.email && (
                  <small className="field-error">
                      {fieldErrors.email}
                  </small>
              )}
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Phone Number</label>
              <input
                  className={fieldErrors.phone ? "input-error" : ""}
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
              />

              {fieldErrors.phone && (
                  <small className="field-error">
                      {fieldErrors.phone}
                  </small>
              )}
            </div>

            <div className="form-group">
              <label>Select Doctor</label>
            
              <select
                  className={fieldErrors.doctor ? "input-error" : ""}
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
              >

                  <option value="">Select Doctor</option>

                  {doctors.map((doctor) => (
                      <option key={doctor.id} value={doctor.id}>
                          {doctor.name}
                      </option>
                  ))}

              </select>

              {fieldErrors.doctor && (
                  <small className="field-error">
                      {fieldErrors.doctor}
                  </small>
              )}
            
            </div>

          </div>

          <div className="form-row">

            <div className="form-group">
              <label>Appointment Date</label>
              <input
                  className={fieldErrors.appointment_date ? "input-error" : ""}
                  type="date" 
                  name="appointment_date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
              />

              {fieldErrors.appointment_date && (
                  <small className="field-error">
                      {fieldErrors.appointment_date}
                  </small>
              )}

            </div>

            <div className="form-group">
              <label>Appointment Time</label>
              <input
                  className={fieldErrors.appointment_time ? "input-error" : ""}
                  type="time"
                  name="appointment_time"
                  value={formData.appointment_time}
                  onChange={handleChange}
              />

              {fieldErrors.appointment_time && (
                  <small className="field-error">
                      {fieldErrors.appointment_time}
                  </small>
              )}

            </div>

          </div>

          <div className="form-group">

            <label>Reason for Visit</label>

            <textarea
                className={fieldErrors.reason ? "input-error" : ""}
              rows="5"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Describe your symptoms or reason for consultation"
            ></textarea>

            {fieldErrors.reason && (
                <small className="field-error">
                    {fieldErrors.reason}
                </small>
            )}

          </div>

          <button 
              type="submit"
              className="primary-btn"
          >
              Book Appointment
          </button>

        </form>

      </div>

    </div>
  );
}

export default Appointment;