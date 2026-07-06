import "./DepartmentCard.css";

import {
  FaHeartbeat,
  FaBrain,
  FaBone,
  FaBaby,
  FaAllergies,
  FaHospital
} from "react-icons/fa";

const departmentServices = {
  Cardiology: [
    "ECG",
    "Angioplasty",
    "Heart Check-up"
  ],

  Neurology: [
    "Stroke Care",
    "Epilepsy",
    "Migraine"
  ],

  Orthopedics: [
    "Joint Replacement",
    "Sports Injury",
    "Fracture Care"
  ],

  Pediatrics: [
    "Child Care",
    "Vaccination",
    "Neonatal Care"
  ],

  Dermatology: [
    "Skin Care",
    "Acne",
    "Cosmetic Care"
  ]
};

const departmentSchedule = {
  Cardiology: "🕒 Mon – Sat | 9:00 AM – 6:00 PM",

  Neurology: "🕒 Mon – Fri | 10:00 AM – 5:00 PM",

  Orthopedics: "🕒 Mon – Sat | 8:30 AM – 7:00 PM",

  Pediatrics: "🕒 Daily | 9:00 AM – 8:00 PM",

  Dermatology: "🕒 Mon – Sat | 11:00 AM – 6:00 PM"
};


function DepartmentCard({ department }) {

  const getIcon = (name) => {
    switch (name) {
      case "Cardiology":
        return <FaHeartbeat />;

      case "Neurology":
        return <FaBrain />;

      case "Orthopedics":
        return <FaBone />;

      case "Pediatrics":
        return <FaBaby />;

      case "Dermatology":
        return <FaAllergies />;

      default:
        return <FaHospital />;
    }
  };

  return (
    <div className="department-card">
  
      <div className="department-icon">
        {getIcon(department.name)}
      </div>
  
      <h3>{department.name}</h3>
  
      <p className="department-description">
          {department.description}
      </p>
  
      <div className="department-services">
  
        <h4>Services</h4>
  
        <ul>
          {departmentServices[department.name]?.map((service, index) => (
            <li key={index}>
              ✓ {service}
            </li>
          ))}
        </ul>
  
      </div>

      <div className="department-availability">
          {departmentSchedule[department.name]}
      </div>
  
    </div>
  );
}  

export default DepartmentCard;