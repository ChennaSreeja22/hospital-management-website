import "./Home.css";
import FeatureCard from "../components/FeatureCard";
import DepartmentCard from "../components/DepartmentCard";

import { useEffect, useState } from "react";
import api from "../services/api";

import {
  FaHeartbeat,
  FaUserMd,
  FaAmbulance,
  FaHospital,
  FaHeart
} from "react-icons/fa";

import { Link } from "react-router-dom";
import DoctorCard from "../components/DoctorCard";

function Home() {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {

      api.get("departments/")
          .then((response)=>{
              setDepartments(response.data);
          });

      api.get("doctors/")
          .then((response)=>{
              setDoctors(response.data);
          });

  }, []);

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-left">

          <span className="tag">
            <FaHeartbeat style={{ marginRight: "8px" }} />
            Your Health, Our Priority
          </span>

          <h1>
            Compassionate Care,
            <br />
            <span>Advanced Treatment</span>
          </h1>

          <p>
            Welcome to SVR Multi Speciality Hospital.
            We provide expert medical care across multiple
            specialties with experienced doctors, advanced
            technology and compassionate healthcare.
          </p>

          <div className="hero-buttons">

              <Link to="/appointment" className="primary-btn">
                  Book Appointment
              </Link>

              <Link to="/doctors" className="secondary-btn">
                  Our Doctors
              </Link>

          </div>

        </div>

        <div className="hero-right">

            <img src="/hospital.png" alt="Hospital" />  
                
        </div>
          
        

      </section>

      {/* Features Section */}
      <section className="features">

        <h2>Why Choose SVR Multi Speciality Hospital?</h2>

        <div className="feature-grid">

          <FeatureCard
            icon={<FaUserMd />}
            title="Experienced Doctors"
            description="Highly qualified specialists providing expert medical care across all departments."
          />

          <FeatureCard
            icon={<FaHospital />}
            title="Modern Facilities"
            description="Advanced diagnostic equipment and state-of-the-art medical infrastructure."
          />

          <FeatureCard
            icon={<FaAmbulance />}
            title="24/7 Emergency"
            description="Round-the-clock emergency services with rapid response and expert care."
          />

          <FeatureCard
            icon={<FaHeart />}
            title="Patient-Centered Care"
            description="Compassionate healthcare focused on comfort, safety and recovery."
          />

        </div>

      </section>

      {/* Departments Section */}
      <section className="departments">

        <h2>Our Departments</h2>

        <p className="department-subtitle">
          Explore our specialized medical departments offering expert
          healthcare services for every stage of life.
        </p>

        <div className="department-grid">

          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              department={department}
            />
          ))}

        </div>

        <div className="department-btn">
            <Link to="/departments">
                <button className="primary-btn">
                    View All Departments
                </button>
            </Link>
        </div>

      </section>

      <section className="doctors">

          <h2>Meet Our Specialists</h2>

          <p className="doctor-subtitle">
              Our experienced doctors are dedicated to providing
              compassionate and high-quality healthcare.
          </p>

          <div className="doctor-grid">

              {doctors.map((doctor)=>(
                  <DoctorCard
                      key={doctor.id}
                      doctor={doctor}
                  />
              ))}

          </div>

      </section>

    </div>
  );
}

export default Home;