import React from "react";
import './style/Add.css'
import add from '../images/add.png'
import {Link} from 'react-router-dom'


const Add =()=>{

    return(
    <Link to="/excercise/new">
        <img src={add}  class="add"/>
    </Link>
    )
}




// class Add extends React.Component{

  

//     render(){

//         return(
            
//             <div>
//                 <Link to="/exercise/new">
//                <img src={add}  class="add"/>
//                </Link>
//             </div>
//         ) 
//     }
// }

export default Add