import {
  CharacterInterface,
  FilmsInterface,
  HomeworldInterface,
  StarshipsInterface,
  VehiclesInterface,
} from '../interface/interface';

//  character details: starships, movies etc (used in components: Favorites, Characters)
export const getCharacterDetails = (
  setLoading: (isLoading: boolean) => void, //  dispatching is loading
  setDisplay: (isDisplay: boolean) => void, //  dispatching is display
  characterUrl: string, //  character url
  setCharacterDetails: (character: CharacterInterface[]) => void //  dispatching character's details
) => {
  setLoading(true);
  setDisplay(false);
  fetch(`${characterUrl}`)
    .then((res: Response) => res.json())
    .then(async (data: CharacterInterface) => {
      let filmsData: FilmsInterface[] = [];
      let vehiclesData: VehiclesInterface[] = [];
      let starshipsData: StarshipsInterface[] = [];

      await Promise.all([
        ...data.films.map((item: string) =>
          fetch(item)
            .then((res: Response) => res.json())
            .then((data: FilmsInterface) => {
              filmsData.push(data);
            })
        ),
        ...data.vehicles.map((item: string) =>
          fetch(item)
            .then((res) => res.json())
            .then((data: VehiclesInterface) => vehiclesData.push(data))
        ),
        ...data.starships.map((item: string) =>
          fetch(item)
            .then((res) => res.json())
            .then((data: StarshipsInterface) => starshipsData.push(data))
        ),
        fetch(data.homeworld)
          .then((res: Response) => res.json())
          .then(
            (homeworldData: HomeworldInterface) =>
              (data.homeworld = homeworldData.name)
          ),
      ]);
      data.filmsData = filmsData;
      data.vehiclesData = vehiclesData;
      data.starshipsData = starshipsData;

      setCharacterDetails([data]);
      setLoading(false);
      setDisplay(true);
    })
    .catch((error: Error) => console.error(error));
};
