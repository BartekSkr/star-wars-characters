import {
  CharacterInterface,
  DataFromApiInterface,
} from '../interface/interface';

//  fetching data from API (used in components: Search)
export const fetchDataFromApi = (
  pageNumber: number, // page number to API
  setLoading: (isLoading: boolean) => void, //  dispatching is loading
  setDisplay: (isDisplay: boolean) => void, //  dispatching is display
  fetchData: (data: CharacterInterface[]) => void, //  dispatching fetched data
  setCharactersAmount: (number: number) => void, //  dispatching characters amount
  setSearchError: (isError: boolean) => void, //  dispatching is error
  setPageNumber: (pageNumber: number) => void
) => {
  setLoading(true);
  setDisplay(false);
  fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
    .then((res: Response) => res.json())
    .then(async (data: DataFromApiInterface) => {
      await Promise.all([
        setLoading(false),
        setDisplay(true),
        fetchData(data.results),
        setCharactersAmount(data.count),
        setSearchError(false),
        setPageNumber(pageNumber),
      ]);
    })
    .catch((error: Error) => console.error(error));
};

//  searching for characters by name (used in components: Search)
export const fetchDataFromApiByName = (
  e: React.KeyboardEvent,
  setLoading: (isLoading: boolean) => void, //  dispatching is loading
  setDisplay: (isDisplay: boolean) => void, //  dispatching is display
  setPageNumber: (number: number) => void,
  fetchData: (data: CharacterInterface[]) => void, //  dispatching etched data
  setCharactersAmount: (number: number) => void, //  dispatching characters amount
  setSearchError: (isError: boolean) => void //  dispatching is error
) => {
  if (e.key === 'Enter') {
    setLoading(true);
    setDisplay(false);
    fetch(
      `https://swapi.dev/api/people/?search=${
        (e.currentTarget as HTMLInputElement).value
      }`
    )
      .then((res: Response) => res.json())
      .then(async (data: DataFromApiInterface) => {
        await Promise.all([
          setLoading(false),
          setDisplay(true),
          setPageNumber(1),
          fetchData(data.results),
          setCharactersAmount(data.count),
          data.results.length !== 0
            ? setSearchError(false)
            : setSearchError(true),
        ]);
      });
  }
};
