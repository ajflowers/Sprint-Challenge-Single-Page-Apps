import React from "react";
import {Card, Icon} from "semantic-ui-react";


export default function LocationCard({ name, type, dimension, residents }) {
  
  const extra = (
    <div>
      <Icon name="user" />
      {residents} residents
    </div>
  )
  
  return (
    <Card className="location-card" 
      header={name}
      meta={type}
      description={dimension}
      extra={extra}
    />
  )
}
