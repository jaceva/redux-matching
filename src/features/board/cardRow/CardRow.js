import React from 'react';
import { Card } from './card/Card.js';

export const CardRow = ({row, cards}) => {
  let content = [];
  for (let i=0; i<4; i++) {
    const id = row*4+i;
    content.push(<Card 
      key={cards[i].id} 
      id={cards[i].id}
      contents={cards[i].contents}/>)
  }
  return <div>{content}</div>;
}