// const element=document.createElement('h1')

// element.innerText="hello react.."

// const container=document.getElementById('root')
// container.appendChild(element)


//_______________CREAR LO ANTERIOR CON REACT_________
import React from "react";
import ReactDom from "react-dom"

// const element=<h1>hello react</h1>
const container=document.getElementById('root')
const container2=document.getElementById('root')
const user={
  firstName:"susana",
  lastName:"moron",
  avatar:"https://i.blogs.es/ceda9c/dalle/1366_2000.jpg"
  
}

const getName=(user)=>{

  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){

  if(user){

    return <h1>hello {getName(user)}</h1>
  }
  else{

    return <h1>hello extranger</h1>


  }

}


const name='susana'
// const element=<div>{getGreeting(user)}</div>
// const element2=<img src={user.avatar}/>

const element3=(
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}/>
  </div>
)




// ReactDom.render(element,container)
ReactDom.render(element3,container2)
