import "./Doctors.css";
import { useEffect, useState } from "react";
import api from "../services/api";
import DoctorCard from "../components/DoctorCard";

function Doctors() {

    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("All");

    useEffect(() => {

        api.get("doctors/")
            .then((response) => {
                setDoctors(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    const departments = [
        "All",
        ...new Set(doctors.map((doctor) => doctor.department.name))
    ];

    const filteredDoctors = doctors.filter((doctor) => {

        const matchesSearch = doctor.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesDepartment =
            selectedDepartment === "All" ||
            doctor.department.name === selectedDepartment;

        return matchesSearch && matchesDepartment;
    });

    return (

        <div className="doctors-page">

            <div className="doctors-header">

                <h1>Meet Our Specialists</h1>

                <p>
                    Our experienced doctors are committed to providing
                    compassionate, personalized and high-quality medical care.
                </p>

            </div>

            <div className="doctor-controls">

                <input
                    type="text"
                    placeholder="Search by doctor's name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                    {departments.map((department) => (
                        <option
                            key={department}
                            value={department}
                        >
                            {department}
                        </option>
                    ))}
                </select>

            </div>

            <p className="doctor-count">
                Showing {filteredDoctors.length} doctor(s)
            </p>

            <div className="doctor-grid">

                {filteredDoctors.map((doctor) => (

                    <DoctorCard
                        key={doctor.id}
                        doctor={doctor}
                    />

                ))}

            </div>

        </div>

    );
}

export default Doctors;