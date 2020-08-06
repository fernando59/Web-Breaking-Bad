import React from "react";
import "./styles.css";
import Header from "./components/Header";
import ListOfCard from "./components/ListOfCard";
import { useCharacter } from "./hooks/useCharacter";
import Search from "./components/Search";

export default function App() {
  const { character, loading } = useCharacter({ keyword: "d" });

  return (
    <div className="container">
      <Header />
     
      {loading ? (
        <h1>Cargando ...</h1>
      ) : (
        <>
          <ListOfCard character={character} />
        </>
      )}
    </div>
  );
}
