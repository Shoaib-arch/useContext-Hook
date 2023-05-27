import { useParams } from "react-router-dom";
import { getStudentsById } from "./students";
export default function Container(){
    const {name} = useParams();
    const std = getStudentsById(name);
    console.log(name);

    return (
        <h1>{std?.age}</h1>

    )
}