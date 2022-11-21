import React from "react";

function toDoList(props){
    

    
    return(
        <div onClick={()=>{
            props.onChecked(props.id)
        }}>
        <li>{props.text}</li>
        </div>
    
    )
}
export default toDoList;