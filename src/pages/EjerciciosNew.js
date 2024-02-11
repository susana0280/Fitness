import React from "react";
import Welcome from "../components/Welcome";
import ExerciseList from "../components/ExerciseList";



const EjerciciosNew=({datos})=>{

    return(

       
    <React.Fragment>
        <Welcome userName="Raul"/>

     <ExerciseList exercises={datos}/>       
    </React.Fragment>

    )
    }

    export default EjerciciosNew