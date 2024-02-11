import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import NotFound from "../pages/NotFound"
import exerciseNewContainer from "../pages/exerciseNewContainer";
import ejercicioContainer from "../pages/ejercicioContainer"
const App=()=>{
return(
<BrowserRouter>
<Switch>
   <Route exact path="/excercise" component={ejercicioContainer}/>
   <Route exact path="/excercise/new" component={exerciseNewContainer}/>
   <Route component={NotFound}/>


</Switch>
  
   
</BrowserRouter>
)
}



// function App(){

// return(

// <BrowserRouter>
// <Switch>
//    <Route exact path="/excercise" component={Excercises}/>
//    <Route exact path="/excercise/new" component={excerciseNew}/>
//    <Route component={NotFound}/>


// </Switch>
  
   
// </BrowserRouter>


// )
// }

export default App