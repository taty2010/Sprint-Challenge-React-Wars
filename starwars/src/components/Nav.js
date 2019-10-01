import React from "react";
import styled from "styled-components";

export default function Nav(props) {
  const Button = styled.button`
    background-color: rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: 30px;
    color: white;
    font-weight: 700;
    margin: 2% 5%;
  `;

  return (
    <div className="nav">
      <Button onClick={props.back}>BACK</Button>
      <Button onClick={props.next}>NEXT</Button>
    </div>
  );
}
