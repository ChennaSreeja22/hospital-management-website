import "./DoctorCard.css";

import {
  FaBriefcaseMedical,
  FaHospital,
  FaCheckCircle
} from "react-icons/fa";
import { FaUserMd } from "react-icons/fa";
import { Link } from "react-router-dom";


const doctorSchedule = {
  Cardiology: "Mon – Sat | 9:00 AM – 6:00 PM",
  Neurology: "Mon – Fri | 10:00 AM – 5:00 PM",
  Orthopedics: "Mon – Sat | 8:30 AM – 7:00 PM",
  Pediatrics: "Daily | 9:00 AM – 8:00 PM",
  Dermatology: "Mon – Sat | 11:00 AM – 6:00 PM"
};

function DoctorCard({ doctor }) {

  return (
    <div className="doctor-card">

    <div className="doctor-avatar">
        <FaUserMd />
    </div>

        <h3>{doctor.name}</h3>

        <p className="doctor-department">
            <FaHospital style={{marginRight:"8px"}} />
            {doctor.department.name}
        </p>

        <p className="doctor-specialization">
            {doctor.specialization}
        </p>

        <p className="doctor-qualification">
            {doctor.qualification}
        </p>

        <p className="doctor-experience">
            <FaBriefcaseMedical style={{marginRight:"8px"}} />
            {doctor.experience} Years Experience
        </p>

        <p
            className={
                doctor.available
                    ? "available"
                    : "unavailable"
            }
        >

            <FaCheckCircle style={{marginRight:"8px"}} />

            {doctor.available
                ? "Available"
                : "Unavailable"}

        </p>

        <Link
            to="/appointment"
            state={{
                doctorId: doctor.id,
                doctorName: doctor.name
            }}
        >
            <button className="primary-btn">
                Book Appointment
            </button>
        </Link>

    </div>
  );
}

export default DoctorCard;