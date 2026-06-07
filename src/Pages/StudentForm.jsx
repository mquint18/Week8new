import { useState } from "react";
import NewInput from "../Components/NewInput";
import Button from "../Components/Button";
import StudentCard from "../Components/StudentCard";


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

     function DeleteStudent(index) {
        const updatedStudents = students.filter(
            (_, i) => i !== index
        );

        setStudents(updatedStudents);
    }
    return(
        <div>

            <form onSubmit={handleSubmit} className="student-form">

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
                    className="pull-down"
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


            <div>
            <h2 className="card-head">My Students</h2>
           
            <div className="student-list">
             {students.map((student, index) => (
            <StudentCard
                key={index}
                student={student}
                onDelete={() => DeleteStudent(index)}
            />
             ))}
            </div>

            </div>
            </div>
    
        )}

export default StudentForm;