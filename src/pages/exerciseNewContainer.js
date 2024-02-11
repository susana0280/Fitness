import { Button } from "bootstrap";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import FatalError from "./500";
import EjercicioNew from "./EjercicioNew";
import url from "../config";

class exerciseNewContainer extends React.Component{

    state={
        form:{
         
            title:'',
            description:'',
            img:'',
            leftColor:'',
            rightColor:''
        },
        error:null,
        loading:false
    }

    handleChange=(e)=>{


        this.setState({
    
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
          
        })
        console.log(this.state.form)
    }

    handleSubmit=async(e)=>{

        this.setState({
            loading:true
        })
        e.preventDefault()
       
      try{

        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                    },
            body: JSON.stringify(this.state.form)
             }
  
        let res= await fetch(`${url}`,config)
        let json=await res.json()
        
        console.log(json)
        this.setState({
            loading:false
        })
        this.props.history.push('/excercise')

      }
      catch(error){
        this.setState({
            loading:false,
            error
            })

      }
    }





render(){
    if(this.state.error){
        return(
            <div>
            <FatalError/>
            </div>
        )
    }
    return (
      <EjercicioNew form={this.state.form} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
      )
    }
}

export default exerciseNewContainer