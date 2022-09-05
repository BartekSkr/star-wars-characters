import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { FavoritesProps } from './types';
import yodaBlack from '../../assets/images/baby-yoda-black.svg';
import yodaYellow from '../../assets/images/baby-yoda-yellow.svg';
import { CharacterItem } from '../../components/CharacterItem/CharacterItem';
import { deleteList, removeFromList } from '../../store/actions';
import { isOnFavoriteList } from '../../utils/favoriteListServices';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CharacterInterface } from '../../utils/types';
import { Button } from '../../components/Button/Button';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Favorites = ({ favoriteList, isDarkTheme }: FavoritesProps) => {
  const dispatch = useDispatch();

  //  toast info
  const deleteFromFavoritesToast = (info: string) => toast.error(info);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favoriteList));
    document.title = 'StarWars - favorites';
  }, [favoriteList]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {favoriteList!.length === 0 && (
        <div className="my-8 mx-auto items-center text-1.2rem font-bold text-center w-[80%] text-accent-color transition-colors duration-0.2s">
          <p className="text-center my-2 mx-0 transition-colors duration-0.2s">
            No any favorite characters yet, sorry there is. Add your favorite
            characters, please.
          </p>
          <img
            src={isDarkTheme ? yodaYellow : yodaBlack}
            alt="baby yoda"
            className="w-24 h-24 mt-8 mx-auto"
          />
        </div>
      )}
      {favoriteList!.length > 0 && (
        <>
          <p className="text-center text-1.2rem text-accent-color font-bold my-2 mx-0 transition-colors duration-0.2s">
            Your favorites characters from Star Wars
          </p>
          <Button
            btnIcon={faTrash}
            isDeleteList={true}
            tip="Delete list"
            action={() => dispatch(deleteList())}
          />
          {favoriteList!.map((character: CharacterInterface) => (
            <div
              key={character.created}
              className="rounded-2xl mb-4 w-[90%] my-4 mx-auto border-3px border-accent-color md:w-[50%]"
            >
              <CharacterItem
                btnIcon={faTrash}
                character={character}
                favoriteList={favoriteList!}
                action={() => {
                  dispatch(removeFromList(character));
                  deleteFromFavoritesToast(
                    `Been removed from the favorites list, ${character.name} has.`
                  );
                }}
                isDisable={Boolean(!isOnFavoriteList(favoriteList!, character))}
                tip={
                  isOnFavoriteList(favoriteList!, character)
                    ? 'Delete From favorites'
                    : 'Add to favorites'
                }
              />
            </div>
          ))}
        </>
      )}
    </motion.div>
  );
};

const mapStateToProps = (state: RootState) => ({
  favoriteList: state.favoriteList,
  isDarkTheme: state.isDarkTheme,
});

export default connect(mapStateToProps, null)(Favorites);
