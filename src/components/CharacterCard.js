import React from "react";
import {Card, Image, Icon} from "semantic-ui-react";

export default function CharacterCard(props) {

  return (
    <Card className="character-card">
      <Image src={props.image} alt={props.name} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className="species-status">{props.species}; {props.status}.</span>

        </Card.Meta>
        <Card.Description>
          <p>Origin: {props.origin.name}</p>
          <p>Location: {props.location.name}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="tv" />
        {props.episode.length} Epiosodes
      </Card.Content>
    </Card>
  );
}
