import React from "react";
import "./StarWars.css";
import styled from "styled-components";

export default function StarWarsblock(props) {
  const Name = styled.h2`
    color: white;
    &:hover {
      color: brown;
    }
  `;

  const List = styled.li`
    list-style: none;
    color: white;
  `;
  return (
    <div className="blocks">
      <Name>{props.name}</Name>
      <div className="innerBlock">
        <ul>
          <List>Height: {props.height}</List>
          <List>Birth Year: {props.birth}</List>
        </ul>
      </div>
    </div>
  );
}
