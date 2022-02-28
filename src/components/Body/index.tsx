/* eslint-disable react/jsx-key */
import { GetPokemonList } from "actions/pokemonActions";
import _ from "lodash";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import PokemonCards from "./pokemonCards";
import { BodyContainer } from "./styles";

const Body: NextPage = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);
  useEffect(() => {
    getData();
  }, []);
  const getData = (page = 1) => {
    dispatch(GetPokemonList(page));
  };
  const showData = () => {
    if (pokemonList.loading) {
      return <p>loading</p>;
    }
    if (!_.isEmpty(pokemonList.data)) {
      return (
        <>
          <div>
            <p>Search: </p>
            <input onChange={(el) => setSearch(el.target.value)} />
          </div>
          <BodyContainer>
            {pokemonList.data.map((pokemon: any) => (
              <PokemonCards key={pokemon.name} name={pokemon.name} />
            ))}
          </BodyContainer>
        </>
      );
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }
    return <p>ushduoashd</p>;
  };

  return (
    <>
      {showData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 20)}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          onPageChange={(data) => getData(data.selected + 1)}
        />
      )}
    </>
  );
};

export default Body;
