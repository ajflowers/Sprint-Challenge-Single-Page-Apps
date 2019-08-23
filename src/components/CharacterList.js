import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState();

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
    .catch(err => {
      console.log(err);
    })




  }, [searchURL]);

  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
