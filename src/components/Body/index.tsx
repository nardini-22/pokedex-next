/* eslint-disable react/jsx-key */
import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { IPokemonProps } from "types/pokemon";
import { api } from "../../../pages/api/hello";
import PokemonCards from "./pokemonCards";
import { BodyContainer } from "./styles";

const Body: NextPage = () => {
  const [allPokemons, setAllPokemons] = useState<Array<IPokemonProps>>([]);
  const [nextPage, setNextPage] = useState<string>(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [previousPage, setPreviousPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const handleDelete = () => {
    localStorage.clear();
  };
  const getAllPokemons = async () => {
    if (typeof window !== "undefined") {
      let returnData = localStorage.getItem("pokemons");
      if (returnData) {
        setAllPokemons(JSON.parse(returnData));
        console.log("caiu no localStorage");
        console.log(allPokemons)
      } else {
        await axios.get(nextPage).then((res) => {
          console.log(res.data);
          setNextPage(res.data.next);
          setPreviousPage(res.data.previous);
          setAllPokemons([]);
          const createPokemons = async (result: any) => {
            result.forEach(async (pokemon: any) => {
              await axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                .then((res) => {
                  setAllPokemons((currentList) => [...currentList, res.data]);
                  console.log("caiu na requisição de api");
                });
            });
          };
          createPokemons(res.data.results);
        });
      }
    }
  };

  const handleNextPage = async () => {
    await axios.get(nextPage).then((res) => {
      console.log(res.data);
      setNextPage(res.data.next);
      setPreviousPage(res.data.previous);
      setAllPokemons([]);
      const createPokemons = async (result: any) => {
        result.forEach(async (pokemon: any) => {
          await axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            .then((res) => {
              setAllPokemons((currentList) => [...currentList, res.data]);
              console.log("caiu na requisição de api");
            });
        });
      };
      createPokemons(res.data.results);
    });
  };
  const handlePreviousPage = async () => {
    if (typeof window !== "undefined") {
      await axios.get(previousPage).then((res) => {
        console.log(res.data);
        setPreviousPage(res.data.previous);
        setAllPokemons([]);
        const createPokemons = async (result: any) => {
          result.forEach(async (pokemon: any) => {
            await axios
              .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
              .then((res) => {
                setAllPokemons((currentList) => [...currentList, res.data]);
                console.log("caiu na requisição de api");
              });
          });
        };
        createPokemons(res.data.results);
      });
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(allPokemons));
  }, [allPokemons]);

  return (
    <>
      <button onClick={() => handleDelete()}>saasasa</button>
      <BodyContainer>
        {allPokemons.map((pokemon: any, index) => (
          <PokemonCards
            key={index}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            subtype={
              pokemon.types[1] === undefined
                ? null
                : `${pokemon.types[1].type.name}`
            }
          />
        ))}
      </BodyContainer>
      <button onClick={() => handlePreviousPage()}>Previous Page</button>
      <button onClick={() => handleNextPage()}>Next Page</button>
    </>
  );
};

export default Body;
