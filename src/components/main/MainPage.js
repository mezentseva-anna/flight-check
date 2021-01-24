import { useSelector, useDispatch } from 'react-redux';
import { addFavoritesAC, logoutFavoritesAC, logoutUserAC } from '../../redux/actionCreators'
import { useHistory } from 'react-router-dom';

export default function MainPage() {
  const count = useSelector(state => state.favorites)
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <>
      hello it's main
      <button onClick={() => dispatch(addFavoritesAC('hi'))}>{count}</button>
      <button onClick={() => {
        dispatch(logoutUserAC());
        dispatch(logoutFavoritesAC());
        history.push('/');
      }}>Выйти</button>
    </>
  )
}