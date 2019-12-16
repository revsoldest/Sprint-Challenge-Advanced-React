import React from "react";
import Player from "./Player.js";

const PlayerList = props => {
  return (
    <div className="playerList">
      {props.list.map(person => {
        return (
            <Player key={person.id} name={person.name} country={person.country}  />
        );
      })}
    </div>
  );
};

export default PlayerList;