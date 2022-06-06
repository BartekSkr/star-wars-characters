export interface ButtonProps {
  action: MouseEventHandler<HTMLButtonElement>;
  btnIcon: IconDefinition;
  isDeleteList: boolean;
  tip?: string;
  isDisable?: boolean;
}
