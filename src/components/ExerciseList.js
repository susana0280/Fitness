
import React from "react";
import Card from "./Card";
import Add from "./Add"

const ExerciseList=({exercises})=>{

    let idFoto=0
    return(

        <div>
    
        {exercises.map(exercise=>{
            idFoto++
                    return (
                       
                        // <Card 
                        // key={exercise.id}
                        // title={exercise.title}
                        // description={exercise.body}
                        // img={`https://picsum.photos/id/${idFoto}/200/300`}
                        // leftColor="#A74CF2"
                        // rightColor="#617BFB"
                        // />

//____________COMPONENTE CARD USANDO DESTRUCTURING____________________
<Card 
key={exercise.id}
img={`https://picsum.photos/id/${idFoto}/200/300`}
{...exercise}
/>





                    )
    
                })}
                    <Add/>
            </div>
            )
       }


// function ExerciseList (props){

// return(

//     <div>

//     {props.exercises.map(exercise=>{
//                 return (
                   
//                     <Card 
//                     title={exercise.title}
//                     description={exercise.description}
//                     img={exercise.img}
//                     leftColor="#A74CF2"
//                     rightColor="#617BFB"
//                     />
     
//                 )

//             })}
//          <Add/>

//     </div>   
// )
// }

export default ExerciseList;