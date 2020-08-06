import {URL} from '../settings'

const apiUrlResponse =apiResponse=>{
 
const characters = apiResponse.map(character=>{
  const {name,img,char_id,birthday,status} = character
  return {name,img,char_id,birthday,status}
})

return characters
}


export default function getCharacter({keyword=''}={}) {
  const apiUrl = `${URL}/characters`;

  return fetch(apiUrl)
                .then(res=>res.json())
                .then(apiUrlResponse);
}
