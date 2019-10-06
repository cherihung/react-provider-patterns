import styled from "styled-components";

export const DiceContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: blueviolet;
  color: white;
  padding: 0.5em;
  font-size: 2em;
  span {
    border: 1px solid white;
    padding: 0.5em 0.75em;
    border-radius: 0.3em;
  }
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1em;
  border-top: 1px dotted darkgray;
`;

export const Button = styled.button`
  margin-top: 1em;
  font-size: 1em;
  padding: 0.5em;
  border-radius: 0.25em;
  cursor: pointer;
`;

export const H2 = styled.h2`
  color: black;
  height: 2em;
  span {
    color: blueviolet;
  }
`;

export const PlayerContainer = styled.div`
  padding: 1em;
  margin-top: 1em;
`;
