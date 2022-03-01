/* eslint-disable react/jsx-key */
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { IPokemonProps } from "types/pokemon";
import {
  BioContainer,
  Details,
  DetailsContainer,
  ImageContainer,
  PokemonDetailsBody,
  ProgressBar,
  ProgressBarContainer,
  ProgressBarText,
  ProgressBarWrapper,
  StatsContainer,
  SubtypeContainer,
  TypeContainer,
  TypesContainer,
} from "./styles";

const PokemonDetails: NextPage<IPokemonProps> = ({
  hp,
  name,
  attack,
  defense,
  special_attack,
  special_defense,
  speed,
  type,
  subtype,
  image,
  height,
  weight,
  ability_1,
  ability_2,
  ability_3,
  id,
}) => {
  const statsArray = [
    {
      name: "HP",
      stats: hp,
    },
    {
      name: "Atk",
      stats: attack,
    },
    {
      name: "Def",
      stats: defense,
    },
    {
      name: "Sp. Atk",
      stats: special_attack,
    },
    {
      name: "Sp. Def",
      stats: special_defense,
    },
    {
      name: "Speed",
      stats: speed,
    },
  ];
  const capitalize = (string: string) => {
    if (string !== null) {
      if (string.indexOf("-") > 0) {
        const newString = string.replace(/-/g, " ");
        return newString.charAt(0).toUpperCase() + newString.slice(1);
      } else {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    } else {
      return null;
    }
  };
  return (
    <>
      <PokemonDetailsBody>
        <ImageContainer type={type}>
          <h3>{id}</h3>
          <Image src={image} width={100} height={100} alt={name} />
          <h1>{name}</h1>
          <TypesContainer>
            <TypeContainer type={type}>{type}</TypeContainer>
            <SubtypeContainer type={subtype}>{subtype}</SubtypeContainer>
          </TypesContainer>
        </ImageContainer>
        <DetailsContainer>
          <BioContainer>
            <Details>
              <p>Height:</p> {(height / 10).toFixed(1)}m
            </Details>
            <Details>
              <p>Weight:</p> {(weight / 10).toFixed(1)}m
            </Details>
            <Details>
              <p>Abilities: </p>
              <ul>
                <li>{capitalize(ability_1)}</li>
                <li>{capitalize(ability_2)}</li>
                <li>{capitalize(ability_3)}</li>
              </ul>
            </Details>
          </BioContainer>
          <StatsContainer>
            {statsArray.map((stats, index) => (
              <ProgressBarContainer key={index}>
                <ProgressBarText>{stats.name}:</ProgressBarText>
                <ProgressBarWrapper>
                  <ProgressBar width={stats.stats > 100 ? 100 : stats.stats}>
                    {stats.stats}
                  </ProgressBar>
                </ProgressBarWrapper>
              </ProgressBarContainer>
            ))}
          </StatsContainer>
        </DetailsContainer>
      </PokemonDetailsBody>
    </>
  );
};

export default PokemonDetails;
