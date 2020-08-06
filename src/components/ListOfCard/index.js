import React from "react";
import Card from "../Card";
import './styles.css'
export default function ListOfCard({character}) {
  const handleClick =(id)=>{
    console.log(id)
  }
  return (
    <div className="grid-card">
    {
      character.map(characters=><Card key={characters.char_id} {...characters} handleClick={()=>handleClick(characters.char_id)}/>)
    }
      
    </div>
  );
}
