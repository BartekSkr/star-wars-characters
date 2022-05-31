import { Link } from 'react-router-dom';
import { Button } from '../common/Button/Button';
import { CharacterItemProps } from './types';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import './CharacterItem.scss';
import { useDispatch } from 'react-redux';
import { setUrl } from '../../store/actions';

export const CharacterItem: React.FC<CharacterItemProps> = ({
  character,
  isDisable,
  btnIcon,
  action,
  tip,
}) => {
  const dispatch = useDispatch();

  return (
    <div className='character-info'>
      <h3>{character.name}</h3>
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
            tip='Show details'
            action={() => dispatch(setUrl(character.url))}
          />
        </Link>
      </div>
    </div>
  );
};
