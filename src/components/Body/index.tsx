/* eslint-disable react/jsx-key */
import { GetPokemonList } from "actions/pokemonActions";
import _ from "lodash";
import { NextPage } from "next";
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import PokemonCards from "./pokemonCards";
import { BodyContainer, Pagination, PaginationContainer } from "./styles";

const Body: NextPage = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootStateOrAny) => state.PokemonList);
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
    return null;
  };

  return (
    <>
      {showData()}
      {!_.isEmpty(pokemonList.data) && (
        <PaginationContainer>
          <Pagination
          nextLabel="Next >"
          previousLabel="< Previous"
            previousClassName="previous-page"
            nextClassName="next-page"
            disabledClassName="disabled-page"
            activeClassName="active-page"
            className="pagination"
            pageCount={Math.ceil(pokemonList.count / 20)}
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}
            onPageChange={(data) => getData(data.selected + 1)}
          />
        </PaginationContainer>
      )}
    </>
  );
};

export default Body;
