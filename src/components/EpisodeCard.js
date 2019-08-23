import React from "react";
import {Card, Icon} from "semantic-ui-react";

export default function EpisodeCard({ name, episode, airDate, characters }) {

    const extra = (
        <div>
          <Icon name="user" />
          {characters} characters
        </div>
    );
    
    const description = (
        <p>First Aired: {airDate}</p>
    );

    return (
        <Card className="episode-card"
            header={name}
            meta={episode}
            description={description}
        
        />
    );
}