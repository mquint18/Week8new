import { useState } from "react";
import NewInput from "../Components/NewInput";
import Button from "../Components/Button";

function StudentList(){

    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        studentID: "",
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

    return(
        <div className="student-list">
            <h2>My Students</h2>

          <NewInput
            value = {student}
            placeholder = "Enter full name"
            onChange = {(e) => setStudent(e.target.value)}
            />

           <Button
            text = "Add Student"
            onClick={AddStudent}
           />
            

        </div>
    )


}

export default StudentList;