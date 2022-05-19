import { gql } from '@apollo/client';

//  schema for characters list
export const CHARACTERS_LIST_SCHEMA = gql`
  query CharactersList($page: String!) {
    charactersList(page: $page) {
      count
      next
      previous
      results {
        name
        created
        url
      }
    }
  }
`;

//  schema for characters
export const CHARACTER_DETAILS_SCHEMA = gql`
  query Characters($url: String!) {
    characterDetails(url: $url) {
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld {
        name
      }
      films {
        title
        episode_id
      }
      vehicles {
        name
        created
      }
      starships {
        name
        created
      }
      created
    }
  }
`;

export const FIND_CHARACTER_SCHEMA = gql`
  query FindCharacter($name: String!, $page: String!) {
    findCharacter(name: $name, page: $page) {
      count
      next
      previous
      results {
        name
        height
        mass
        hair_color
        skin_color
        eye_color
        birth_year
        gender
        homeworld {
          name
        }
        films {
          title
          episode_id
        }
        vehicles {
          name
          created
        }
        starships {
          name
          created
        }
        created
        url
      }
    }
  }
`;
