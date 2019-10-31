import React from "react";
import "./card-list.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <h1 key={monster.id}>
          {monster.name},{monster.id}
        </h1>
      ))}
    </div>
  );
};
