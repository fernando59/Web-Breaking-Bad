import React from 'react'
import './styles.css'


export default function Search({initialKeyword=''}){
  const {keyword} = useForm()
  const onSubmit = ({keyword})=>{

  }
  const handelSubmit = (e)=>{
    e.preventDefault()
    onsubmit({keyword})
    console.log(e.target.value)
  }

  return <>
    <form className="form-search" onSubmit={handelSubmit}>
      <input placeholder="Busca tu personaje aqui"/>
      <button>Buscar</button>
    </form>
  </>

}