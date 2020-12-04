import React from 'react';
import { Card } from './card/Card.js';

export const CardRow = ({row}) => {
  let content = [];
  for (let i=0; i<4; i++) {
    const id = row*4+i;
    content.push(<Card key={id} id={id}/>)
  }
  return <div>{content}</div>;
}