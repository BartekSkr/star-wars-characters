import { createAction } from '@reduxjs/toolkit';
import { CharacterInterface } from '../helpers/types';

//  set url used to character's details
export const setUrl = createAction<string>('set character url');
//  set page number used in pagination & Search component
export const setPage = createAction<string>('page number');
//  is dark theme
export const darkTheme = createAction<boolean>('set theme');
//  used to change between data of all characters & data for characters found by name
export const isAllCharacters = createAction<boolean>('is all characters list');
//  character name used to find character by name
export const characterToFindName = createAction<string>(
  'character name to find'
);
//  set is error
export const setIsError = createAction<boolean>('set is search error');
//  adding character to favorite list
export const addToList = createAction<CharacterInterface>(
  'add to favorite list'
);
//  removing character from favorite list
export const removeFromList = createAction<CharacterInterface>(
  'remove from favorite list'
);
//  delete all characters from favorite list
export const deleteList = createAction('delete favorite list');
