import React from "react";
import {useFormik} from 'formik'
import { Schema } from "./FormSchema";


export default function Formik(){
    const initialValuess = {
        Naam: '',
        gmail: '',
        }
        // const UseFormikObject = useFormik({
        //     initialValues:initialValuess,
        //     onSubmit:(values)=>{ 
        //         console.log(values.Nafam);
        //         console.log(values.mail);
        //     }
        // })

        const obj= useFormik({
            initialValues:initialValuess,
            validationSchema:Schema,
            onSubmit:(values) => {
                console.log("Working Fine!");
                console.log(values.Naam);
                console.log(values.gmail);
            }
            
        })

    const fun = ()=>{
        return (console.log(""));
    }
    
    return(
    
    <form onSubmit={obj.handleSubmit} style={{border:'10px solid red', margin:'center', width:'350px'}}>
        
            <label htmlFor="">Enter your name!</label>
            <input  name="Naam" type="text" onChange={obj.handleChange} value={obj.values.Naam}/>
           
            <br/>
            <label htmlFor="">Enter email address!</label>
            <input name="gmail" type="mail" onChange={obj.handleChange} value={obj.values.gmail}/>
          
            <br/>
            <br/>
            <input type='submit' onClick={fun} value={"Submit"}/>       
    </form>)
}