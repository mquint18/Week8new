import { useState } from "react";
import NewInput from "../Components/NewInput";
import Button from "../Components/Button";


function StudentForm(){

    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        gradYear: "",
        course: ""
    });

    const [students, setStudents] = useState([]);

    function handleChange(e) {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
            }   

    function handleSubmit(e) {
        e.preventDefault();
        AddStudent();
        }

    function AddStudent(){

    
        setStudents([...students, student]);
        setStudent({
            firstName: "",
            lastName: "",
            gradYear: "",
            course: ""
            });
    }
    return(
        <div>

            <form onSubmit={handleSubmit}>

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
                    <option value="Education">Education</option>
                </select>


                <Button
                    text = "Submit"
                    onClick ={AddStudent}
                />

            </form>


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

          
            

        </div>
        </div>
    )
}

export default StudentForm;