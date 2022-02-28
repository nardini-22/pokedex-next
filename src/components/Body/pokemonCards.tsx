/* eslint-disable react/jsx-key */
import { GetPokemon } from "actions/pokemonActions";
import { InfoIcon } from "components/icons";
import Modal from "components/Modal";
import Portal from "HOC/portal";
import _ from "lodash";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PokemonDetails from "./pokemonDetails";
import {
  CardContainer,
  InfoButton,
  PokemonName,
  SubtypeContainer,
  TypeContainer,
  TypesContainer,
} from "./styles";

const PokemonCards = (name: any) => {
  const pokemonName = name.name;
  const dispatch = useDispatch();
  const pokemonState = useSelector((state) => state.Pokemon);
  useEffect(() => {
    dispatch(GetPokemon(pokemonName));
  }, []);
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
  const [open, setOpen] = useState<boolean>();
  const showData = () => {
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokemonData = pokemonState.data[pokemonName];
      const stringID = pokemonData.id.toString();
      const formattedID =
        stringID.length === 1
          ? `#00${pokemonData.id}`
          : stringID.length === 2
          ? `#0${pokemonData.id}`
          : `#${pokemonData.id}`;
      return (
        <>
          <button onClick={() => console.log(pokemonData.abilities[1])}>
            hhfdtd
          </button>
          <CardContainer type={pokemonData.types[0].type.name}>
            <InfoButton onClick={() => setOpen(true)}>
              <InfoIcon width={25} height={25} />
            </InfoButton>
            <header>
              <h3>{formattedID}</h3>
            </header>
            {pokemonData.sprites.front_default !== null ? (
              <Image
                src={pokemonData.sprites.front_default}
                width={100}
                height={100}
                alt={pokemonData.name}
              />
            ) : null}

            <div>
              <PokemonName>{capitalize(pokemonName)}</PokemonName>
              <TypesContainer>
                <TypeContainer type={pokemonData.types[0].type.name}>
                  {pokemonData.types[0].type.name}
                </TypeContainer>
                <SubtypeContainer
                  type={
                    pokemonData.types[1] === undefined
                      ? null
                      : pokemonData.types[1].type.name
                  }
                >
                  {pokemonData.types[1] === undefined
                    ? null
                    : pokemonData.types[1].type.name}
                </SubtypeContainer>
              </TypesContainer>
            </div>
          </CardContainer>
          <Portal>
            <Modal open={open} closeModal={() => setOpen(false)}>
              <PokemonDetails
                id={formattedID}
                name={capitalize(pokemonName)}
                hp={pokemonData.stats[0].base_stat}
                attack={pokemonData.stats[1].base_stat}
                defense={pokemonData.stats[2].base_stat}
                special_attack={pokemonData.stats[3].base_stat}
                special_defense={pokemonData.stats[4].base_stat}
                speed={pokemonData.stats[5].base_stat}
                type={pokemonData.types[0].type.name}
                subtype={
                  pokemonData.types[1] === undefined
                    ? null
                    : pokemonData.types[1].type.name
                }
                image={pokemonData.sprites.front_default}
                height={pokemonData.height}
                weight={pokemonData.weight}
                ability_1={pokemonData.abilities[0].ability.name}
                ability_2={
                  pokemonData.abilities[1] === undefined
                    ? null
                    : pokemonData.abilities[1].ability.name
                }
                ability_3={
                  pokemonData.abilities[2] === undefined
                    ? null
                    : pokemonData.abilities[2].ability.name
                }
              />
            </Modal>
          </Portal>
        </>
      );
    }
    if (pokemonState.loading) {
      return <p>loading ...</p>;
    }
    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }
  };
  return <>{showData()}</>;
};

export default PokemonCards;
