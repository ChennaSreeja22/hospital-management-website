import "./Departments.css";
import { useEffect, useState } from "react";
import api from "../services/api";
import DepartmentCard from "../components/DepartmentCard";

function Departments() {

    const [departments, setDepartments] = useState([]);

    useEffect(() => {

        api.get("departments/")
            .then((response) => {
                setDepartments(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    return (

        <div className="departments-page">

            <div className="departments-header">

                <h1>Our Medical Departments</h1>

                <p>
                    Explore our specialized departments providing
                    comprehensive healthcare with experienced doctors
                    and advanced medical facilities.
                </p>

            </div>

            <div className="department-grid">

                {departments.map((department) => (

                    <DepartmentCard
                        key={department.id}
                        department={department}
                    />

                ))}

            </div>

        </div>

    );

}

export default Departments;