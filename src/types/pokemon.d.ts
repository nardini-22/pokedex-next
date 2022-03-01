export interface IPokemonProps {
  id: number | string;
  name: string;
  type: string;
  subtype: string | null;
  image: string;
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
  ability_1: string;
  ability_2: string;
  ability_3: string;
  height: number;
  weight: number;
}

interface IProgressBarProps {
  width: number;
}

interface IContainerProps {
  type: string | null;
}
