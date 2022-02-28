import styled from "styled-components";
import { IContainerProps, IProgressBarProps } from "types/pokemon";

const colorTypes = (props: IContainerProps) =>
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
    : null;

export const CardContainer = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    ${colorTypes} 100%
  );
  border: 10px solid #fff;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.625rem 0 0.625rem 0;
  box-shadow: 0px 1px 4px -1px rgba(0, 0, 0, 0.5);
  position: relative;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const InfoButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.3125rem;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const PokemonName = styled.h3`
  text-align: center;
`;

export const TypesContainer = styled.small`
  display: flex;
  justify-content: center;
`;

export const TypeContainer = styled.div<IContainerProps>`
  background: ${colorTypes};
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

export const ProgressBarWrapper = styled.div`
  background: #e7e9eb;
  width: 70%;
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`;

export const ProgressBarText = styled.p`
  width: 30%;
  @media screen and (max-width: 767px) {
    width: 50%;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0.3125rem;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImageContainer = styled(CardContainer)`
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const ProgressBar = styled.div<IProgressBarProps>`
  background: #086eff;
  width: ${(props) => `${props.width}%`};
  padding: 0 0.3125rem;
  color: ${(props) => props.theme.main.secondaryText};
`;

export const BioContainer = styled.div``;

export const PokemonDetailsBody = styled.div`
  background: ${(props) => props.theme.main.secondaryText};
  display: flex;
  width: 100%;
  padding: 0.625rem;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

export const DetailsContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
