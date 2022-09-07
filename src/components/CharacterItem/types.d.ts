export interface CharacterItemProps {
  character: CharacterInterface;
  favoriteList: CharacterInterface[];
  isDisable: boolean;
  btnIcon: any;
  action: MouseEventHandler<HTMLButtonElement>;
  tip: string;
}
