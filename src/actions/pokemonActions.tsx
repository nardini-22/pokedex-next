import { api } from "../../pages/api/hello";

export const GetPokemonList = (page: number) => async (dispatch: any) => {
  try {
    dispatch({ type: "POKEMON_LIST_LOADING" });
    const perPage = 20;
    const offset = page * perPage - perPage;
    const res = await api.get(`/pokemon?limit=${perPage}&offset=${offset}`);
    dispatch({ type: "POKEMON_LIST_SUCCESS", payload: res.data });
  } catch (e) {
    dispatch({ type: "POKEMON_LIST_FAIL" });
  }
};

export const GetPokemon = (pokemon: string) => async (dispatch: any) => {
  try {
    dispatch({ type: "POKEMON_MULTIPLE_LOADING" });
    const res = await api.get(`/pokemon/${pokemon}`);
    dispatch({
      type: "POKEMON_MULTIPLE_SUCCESS",
      payload: res.data,
      pokemonName: pokemon,
    });
  } catch (e) {
    dispatch({ type: "POKEMON_MULTIPLE_FAIL" });
  }
};
