import React, { useState } from 'react'

import '../components/style/Card.css'
import circlesImage from '../images/circles.png'
import  emptyImage from '../images/empty.png'


//___________Componente funcional___________________________

const Card=({leftColor,rightColor,title,description,img})=>{

      return(

            
        <div className='card mx-auto Fitness-Card'
        
        style={{
             backgroundImage:`url(${circlesImage}), linear-gradient(to right,${leftColor|| '#56CCF2'} , ${rightColor || '#2F80ED'}) `
        }}
        >
            <div className='card-body'>
                <div className='row centener'>
                    <div className='col-6'>
                        <img src={img ||emptyImage }    className='float-right' alt=""/>
                    </div>
                    <div className='col-6 Fitness-Card-Info '>
                        <h1>{title}</h1>
                         <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}



//______________Componente de clase_______________________
// class Card extends React.Component{

//     constructor(props){
//         super(props)
//         this.state={
//             img:"https://picsum.photos/id/17/200/300 " 
//         } 
//     }

//         componentDidMount(){

//             setTimeout(()=>{
//                 this.setState(
//                    { img:this.props.img}
//                 )

//             }
//             ,5000)}

// render(){
  
//     const {leftColor,rightColor}=this.props
  
//     return (

       

//         <div className='card mx-auto Fitness-Card'
        
//         style={{
//             backgroundImage:`url(${circlesImage}), linear-gradient(to right,${leftColor|| '#56CCF2'} , ${rightColor || '#2F80ED'}) `
//         }}
//         >
//             <div className='card-body'>
//                 <div className='row centener'>
//                     <div className='col-6'>
//                         <img src={this.props.img ||emptyImage }    className='float-right' alt=""/>
//                     </div>
//                     <div className='col-6 Fitness-Card-Info '>
//                         <h1>{this.props.title}</h1>
//                          <p>{this.props.description}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
       
//     )

// }


// }

export default Card