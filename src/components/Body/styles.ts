import styled from "styled-components";
import { IContainerProps } from "types/pokemon";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.625rem 0 0.625rem 0;
  background: ${(props) => props.theme.main.secondaryText};
  border-radius: 0.3125rem;
  box-shadow: 0px 1px 4px -1px rgba(0, 0, 0, 0.5);
  position: relative;
`;

export const InfoButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.3125rem;
  background: transparent;
  border-radius: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #f9f9f9;
  }
  &:active {
    background: #f1f1f1;
  }
`;

export const PokemonName = styled.h3`
  text-align: center;
`;

export const TypesContainer = styled.small`
  display: flex;
  justify-content: center;
`;

export const TypeContainer = styled.div<IContainerProps>`
  background: ${(props) =>
    props.type === "normal"
      ? "#A8A878"
      : props.type === "fire"
      ? "#F08030"
      : props.type === "fighting"
      ? "#C03028"
      : props.type === "water"
      ? "#6890F0"
      : props.type === "flying"
      ? "#A890F0"
      : props.type === "grass"
      ? "#78C850"
      : props.type === "poison"
      ? "#A040A0"
      : props.type === "electric"
      ? "#F8D030"
      : props.type === "ground"
      ? "#E0C068"
      : props.type === "psychic"
      ? "#F85888"
      : props.type === "rock"
      ? "#B8A038"
      : props.type === "ice"
      ? "#98D8D8"
      : props.type === "bug"
      ? "#A8B820"
      : props.type === "dragon"
      ? "#7038F8"
      : props.type === "ghost"
      ? "#705898"
      : props.type === "dark"
      ? "#705848"
      : props.type === "steel"
      ? "#B8B8D0"
      : props.type === "fairy"
      ? "#EE99AC"
      : null};
  padding: 0.125rem;
  border-radius: 0.3125rem;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0 0.125rem 0 0.125rem;
`;

export const SubtypeContainer = styled(TypeContainer)<IContainerProps>``;

export const BodyContainer = styled.div`
  margin: 1.25rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  gap: 1.25rem;
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
