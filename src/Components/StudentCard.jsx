

function StudentCard({student}) {

        return (
            <div className= "student-card">
            
            <h2>
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

            </div>
        )
    
}

export default StudentCard;