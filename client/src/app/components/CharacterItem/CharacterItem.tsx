import { Link } from 'react-router-dom';
import { Button } from '../common/Button/Button';
import { CharacterItemProps } from './types';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setUrl } from '../../store/actions';

export const CharacterItem = ({
  character,
  isDisable,
  btnIcon,
  action,
  tip,
}: CharacterItemProps) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full py-2 px-4 flex items-center justify-between text-1.2rem text-accent-color transition-colors duration-0.2s">
      <p className="font-bold">{character.name}</p>
      <div>
        <Button
          btnIcon={btnIcon}
          isDeleteList={false}
          tip={tip}
          action={action}
          isDisable={isDisable}
        />
        <Link to={`/details/${character.name}`}>
          <Button
            btnIcon={faInfo}
            isDeleteList={false}
            tip="Show details"
            action={() => dispatch(setUrl(character.url))}
          />
        </Link>
      </div>
    </div>
  );
};
