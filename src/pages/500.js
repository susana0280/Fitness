import React from "react";
import '../components/style/Errors.css'
import FatalErrorImg from '../images/500.png'

const FatalError=()=>{

    return(
    <div className="text-center">
        <h1 className="Error_Text">Error:500 Unexpected Error</h1>
        <img src={FatalErrorImg} alt="500 Unexpected Error" className="Error_Image"></img>
    </div>
    )

}

export default FatalError