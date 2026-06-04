import { useState } from "react";
import NewInput from "../Components/NewInput";
import Button from "../Components/Button";
import StudentForm from "./StudentForm";

function StudentList({students}){
/*
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        gradYear: "",
        course: ""
    });

    const [students, setStudents] = useState([]);


    function AddStudent(){

        if (name === ""){
            alert("Please Enter a Student Name")
            return;
        }

        setStudents([... students]);

    }
*/
    return(
        <div className="student-list">
            <h2>My Students</h2>
            <div>
                {students.map((s, index) => (
            <div key={index}>
            <h3>
                {s.firstName} {s.lastName}
            </h3>

            <p>Graduation Year: {s.gradYear}</p>
            <p>Course: {s.course}</p>
            </div>
  ))}
            </div>

           <Button
            text = "Add Student"
            onClick={StudentForm}
           />
            

        </div>
    )


}

export default StudentList;