import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {
    const [episodes, setEpisodes] = useState([]);

    const [searchURL, setSearchURL] = useState("https://rickandmortyapi.com/api/episode/")
    useEffect(() => {
        axios.get(`${searchURL}`)
        .then(response => {
          console.log(response);
          let episodeList = response.data.results;
          console.log(episodeList);
          setEpisodes(episodeList);
        })
        .catch(err => {
          console.log(err);
        })
    }, [searchURL]);

    return (
        <section className="episode-list grid-view">
            {episodes.map(episode => (
                <EpisodeCard 
                    key={episode.id}
                    name={episode.name}
                    airDate={episode.air_date}
                    characters={episode.characters.length}
                />
            ))}
        </section>
    );
}