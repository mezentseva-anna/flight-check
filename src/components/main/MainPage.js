import { useSelector, useDispatch } from 'react-redux';
import { addFavoritesAC, fetchFlightAC, logoutFavoritesAC, logoutUserAC } from '../../redux/actionCreators'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

export default function MainPage() {
  const count = useSelector(state => state.favorites)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log('hello');
    dispatch(fetchFlightAC())
   
  }, [dispatch])

  return (
    <>
      hello it's main
      <button onClick={() => dispatch(addFavoritesAC('hi'))}>{count && count}</button>
      <button onClick={() => {
        dispatch({type:'RESET'});
        // dispatch(logoutFavoritesAC());
        console.log('hi');
        history.push('/');
      }}>Выйти</button>
    </>
  )
}