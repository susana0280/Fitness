import React, {useState,useEffect} from "react";
import Loading from "../components/Loading";
import FatalError from "./500";
import EjerciciosNew from "./EjerciciosNew";
import useFetch from "../hooks/useFetch";
import url from "../config";

// class Excercises extends React.Component{

    
    // constructor(props){
    //     super(props)
    //     this.state={
    //         data:[
    //             {
           
    //             "id": 1,
    //             "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //             "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    //             "img":"https://picsum.photos/id/1/200/300"
    //         },
    //             {
            
    //             "id": 2,
    //             "title": "qui est esse",
    //             "description": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    //             "img":"https://picsum.photos/id/20/200/300"
    //         },
    //             {
                
    //             "id": 3,
    //             "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //             "description": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    //             "img":"https://picsum.photos/id/30/200/300"
    //             },
    //             {
          
    //             "id": 4,
    //             "title": "eum et est occaecati",
    //             "description": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    //             "img":"https://picsum.photos/id/40/200/300"
    //         },
    //             {
              
    //             "id": 5,
    //             "title": "nesciunt quas odio",
    //             "description": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    //             "img":"https://picsum.photos/id/50/200/300"  
    //         },
    //             {
           
    //             "id": 6,
    //             "title": "dolorem eum magni eos aperiam quia",
    //             "description": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    //             "img":"https://picsum.photos/id/60/200/300"
    //             },
    //             {
      
    //             "id": 7,
    //             "title": "magnam facilis autem",
    //             "description": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    //             "img":"https://picsum.photos/id/70/200/300"
    //             },
    //             {
              
    //             "id": 8,
    //             "title": "dolorem dolore est ipsam",
    //             "description": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    //             "img":"https://picsum.photos/id/80/200/300" 
    //         },
    //             {
            
    //             "id": 9,
    //             "title": "nesciunt iure omnis dolorem tempora et accusantium",
    //             "description": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    //             "img":"https://picsum.photos/id/90/200/300"
    //         },
    //             {
        
    //             "id": 10,
    //             "title": "optio molestias id quia eum",
    //             "description": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    //             "img":"https://picsum.photos/id/100/200/300"
    //         },
    //             {
          
    //             "id": 11,
    //             "title": "et ea vero quia laudantium autem",
    //             "description": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    //             "img":"https://picsum.photos/id/110/200/300"
    //         },
    //         ]

    //     }

    // }

//____________________________________________________________________________

    // state={  
    //  data:   [
    //                     {
                   
    //                     "id": 1,
    //                     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    //                     "description": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    //                     "img":"https://picsum.photos/id/1/200/300"
    //                 },
    //                     {
                    
    //                     "id": 2,
    //                     "title": "qui est esse",
    //                     "description": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    //                     "img":"https://picsum.photos/id/20/200/300"
    //                 },
    //                     {
                        
    //                     "id": 3,
    //                     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    //                     "description": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    //                     "img":"https://picsum.photos/id/30/200/300"
    //                     },
    //                     {
                  
    //                     "id": 4,
    //                     "title": "eum et est occaecati",
    //                     "description": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    //                     "img":"https://picsum.photos/id/40/200/300"
    //                 },
    //                     {
                      
    //                     "id": 5,
    //                     "title": "nesciunt quas odio",
    //                     "description": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    //                     "img":"https://picsum.photos/id/50/200/300"  
    //                 },
    //                     {
                   
    //                     "id": 6,
    //                     "title": "dolorem eum magni eos aperiam quia",
    //                     "description": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    //                     "img":"https://picsum.photos/id/60/200/300"
    //                     },
    //                     {
              
    //                     "id": 7,
    //                     "title": "magnam facilis autem",
    //                     "description": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    //                     "img":"https://picsum.photos/id/70/200/300"
    //                     },
    //                     {
                      
    //                     "id": 8,
    //                     "title": "dolorem dolore est ipsam",
    //                     "description": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
    //                     "img":"https://picsum.photos/id/80/200/300" 
    //                 },
    //                     {
                    
    //                     "id": 9,
    //                     "title": "nesciunt iure omnis dolorem tempora et accusantium",
    //                     "description": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
    //                     "img":"https://picsum.photos/id/90/200/300"
    //                 },
    //                     {
                
    //                     "id": 10,
    //                     "title": "optio molestias id quia eum",
    //                     "description": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
    //                     "img":"https://picsum.photos/id/100/200/300"
    //                 },
    //                     {
                  
    //                     "id": 11,
    //                     "title": "et ea vero quia laudantium autem",
    //                     "description": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
    //                     "img":"https://picsum.photos/id/110/200/300"
    //                 }
    //              ]

    //            }

//______________________________________________________________________

// state={
//     data:[],
//     loading:true,
//     error:null
// }

// async componentDidMount(){

//     await this.fetchJson()
// }

// fetchJson=async ()=>{

//     try{
//     let res=await fetch('https://jsonplaceholder.typicode.com/posts')
//     let data=await res.json()
        


//     this.setState({
//             data,
//             loading:false,
          
//             })
//         }
//         catch(error){

//             this.setState({

//                 loading:false,
//                 error
//             })
//         }

// }





// render(){

//     if(this.state.loading){
//         return(
//             <div>
        
//             <Loading/>
//             </div>
//         )
//     }
//     if(this.state.error){
//         return(
//             <div>
//             <FatalError/>
//             </div>
//         )
//     }

//     return(

//         <EjerciciosNew datos={this.state.data}/>

//         // <React.Fragment>
//         //     <Welcome userName="Raul"/>

//         //     <ExerciseList exercises={this.state.data}/>
            
//         //     {/* {this.state.data.map(exercise=>{
//         //         return (

//         //             <Card 
//         //             title={exercise.title}
//         //             description={exercise.description}
//         //             img={exercise.img}
//         //             leftColor="#A74CF2"
//         //             rightColor="#617BFB"
//         //             />
//         //         )

//         //     })} */}

          
          
//         // </React.Fragment>

//     )
        
    
// }

// }
// export default Excercises

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const EjercicioContainer =()=>{

    // const [data,setData]=useState([])
    // const [loading,setLoading]=useState(false)
    // const [error,setError]=useState(null)


    // useEffect( ()=>{

    //     const EffectExercise=async()=>{
    //     try{
    //             let res= await fetch('https://jsonplaceholder.typicode.com/posts')
    //             let data=await res.json()
                    
    //             setData(data)
    //             setLoading(false)
              
    //                 }
    //                 catch(error){
    //                     setError(error)
    //                     setLoading(true)
                      
    //                 }
    //             }
    //             EffectExercise()
    // },[])

    const {data,loading,error}=useFetch(`${url}`)

    if(loading){
      return  <Loading/>
    }
    if(error){
        return <FatalError/>
    }
    return <EjerciciosNew datos={data}/>
}

export default EjercicioContainer;