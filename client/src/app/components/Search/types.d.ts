export interface SearchProps {
  page: string;
  findCharacter: LazyQueryExecFunction<OperationVariables>;
  isAllCharactersList: boolean;
}
