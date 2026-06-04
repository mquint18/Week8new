import { useState } from "react";
import NewInput from "../Components/NewInput";


function StudentForm({}){

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
    return(
        <div>

            <form onSubmit="{handleSubmit}">

                <NewInput
                    name= "firstName"
                    placeholder= "First Name"
                    value={student.firstName}
                    onChange = {handleChange}
                />

                <NewInput
                    name="lastName"
                    placeholder= "Last Name"
                    value = {student.lastName}
                    onChange={handleChange}
                />


                <NewInput
                    name = "gradYear"
                    placeholder = "Graduation Year"
                    value = {student.gradYear}
                    onChange={handleChange}
                />

                <select 
                
                    name = "course"
                    value = {student.course}
                    onChange={handleChange}
                >
                    <option value="">Select Course</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                    <option value="Writing">Writing</option>
                    <option value="Education"></option>
                </select>




            </form>


        </div>
    )
}

export default StudentForm;