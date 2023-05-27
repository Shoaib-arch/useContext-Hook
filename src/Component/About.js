import { Link, Outlet, useParams } from "react-router-dom";
import { getStudents, getStudentsById } from "./students"


export default function About(){
    const students = getStudents();

    return(
        <>
            {students.map(student =>
                    <h1 style={{display:'inline', margin:'20px'}}><Link to={student.path}>name: {student.name}</Link></h1>
                )}

            <Outlet/>
        </>
    )
}