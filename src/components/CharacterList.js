import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  const [searchURL, setSearchURL] = useState("https://rickandmortyapi.com/api/character/")

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`${searchURL}`)
    .then(response => {
      console.log(response);
      let charList = response.data.results;
      console.log(charList);
      setCharacters(charList);
    })
    .then(() => {
 
    })
    .catch(err => {
      console.log(err);
    })

  }, [searchURL]);
  console.log(characters);
  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
          status={character.status}
          origin={character.origin}
          location={character.location}
          episode={character.episode}
        />
      ))}
    </section>
  );
}
