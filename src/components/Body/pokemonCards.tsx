/* eslint-disable react/jsx-key */
import { InfoIcon } from "components/icons";
import { NextPage } from "next";
import Image from "next/image";
import { IPokemonProps } from "types/pokemon";
import {
  CardContainer,
  InfoButton,
  PokemonName,
  SubtypeContainer,
  TypeContainer,
  TypesContainer,
} from "./styles";

const PokemonCards: NextPage<IPokemonProps> = ({
  id,
  name,
  image,
  type,
  subtype,
}) => {
  const formattedID = id.toString();
  return (
    <>
      <CardContainer>
        <InfoButton>
          <InfoIcon width={25} height={25} />
        </InfoButton>
        <header>
          <small>
            {formattedID.length === 1
              ? `#00${id}`
              : formattedID.length === 2
              ? `#0${id}`
              : `#${id}`}
          </small>
        </header>
        <Image src={image} width={100} height={100} alt={name} />
        <div>
          <PokemonName>{name}</PokemonName>
          <TypesContainer>
            <TypeContainer type={type}>{type}</TypeContainer>
            <SubtypeContainer type={subtype}>{subtype}</SubtypeContainer>
          </TypesContainer>
        </div>
      </CardContainer>
    </>
  );
};

export default PokemonCards;
