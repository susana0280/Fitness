import React from 'react'
import '../components/style/Welcom.css'

const Welcome=({userName})=>(

   
        <div className='container'>
            <div className="Fitness-User-Info">
           
            <h1>Hello {userName}!</h1>
            <p>Let's workout to get someone gains!</p>
    
            </div>
    
    
        </div>
    )


// function Welcome(props){

// return(
//     <div className='container'>
//         <div className="Fitness-User-Info">
       
//         <h1>Hello {props.userName}!</h1>
//         <p>Let's workout to get someone gains!</p>

//         </div>


//     </div>
// )

// }
export default Welcome;