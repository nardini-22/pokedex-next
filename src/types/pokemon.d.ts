export interface IPokemonProps {
  id: number;
  name: string;
  type: string;
  subtype: string | null;
  image: string;
}

interface IContainerProps {
  type: string | null;
}
