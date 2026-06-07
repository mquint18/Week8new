import Button from "./Button";

function StudentCard({student, onDelete}) {

        return (
            <div className= "student-card">
            
            <h2 className="student-name">
                {student.firstName} {student.lastName}
            </h2>

            <p>
                <strong>Graduation Year: </strong>{" "}
                    {student.gradYear}
            </p>

            <p>
                <strong> Course: </strong> { " "}
                    {student.course}
            </p>

            <Button
            text = "Delete Student"
            onClick = {onDelete}
            />

            </div>
        )
    
}

export default StudentCard;