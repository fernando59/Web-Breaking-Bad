import { useEffect, useState } from "react";
import getCharacter from "../services/getCharacters";

export function useCharacter({ keyword } = { keyword: null }) {
  const [character, setCharacter] = useState([]);
  const [loading,setLoading]  =useState(false)
  const keywordToUse = keyword;
  useEffect(function() {
    setLoading(true)
    getCharacter({keyword:keywordToUse})
        .then(character=>{
          setCharacter(character)
        setLoading(false)
        })

      }, [keyword,setCharacter,keywordToUse]);
 
      return {character,loading}
}
