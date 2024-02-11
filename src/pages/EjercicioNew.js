import React from "react";
import ExcerciseForm from "../components/ExcerciseForm";
import Card from "../components/Card"

const  EjercicioNew=({form,onChange, onSubmit})=>{
    
  
    return(
    <div>

    <div className="row">


    <div className="col-sm">
           <Card {...form} />
        </div>

        <div className="col-sm">
            <ExcerciseForm onChange={onChange} onSubmit={onSubmit} form={form}/>
        </div>


    </div>
   </div>

    )
    

}

export default EjercicioNew