import React from 'react';
import { Button } from "antd";

const Superhero = props => (
  <div className="superhero">
    <li className="superheros__item" key={props.hero.id}>
      <Button className="superhero__button" key={props.hero.id} onClick={() => {props.heroSelected(props.hero)}} style={{backgroundImage: `url(${props.hero.images.sm})`}}>
      </Button>
      <p className="superhero__name">{props.hero.name}</p>
    </li>
  </div>
);

export default Superhero;
