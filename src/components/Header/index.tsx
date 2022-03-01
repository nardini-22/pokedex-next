/* eslint-disable react/jsx-key */
import { NextPage } from "next";
import { PageHeader } from "./styles";

const Header: NextPage = () => {
  return (
    <>
      <PageHeader>
        <h1>Pokedex</h1>
      </PageHeader>
    </>
  );
};

export default Header;
