import { useSelector, useDispatch } from 'react-redux';
import { addFavoritesAC, fetchFlightAC, logoutFavoritesAC, logoutUserAC } from '../../redux/actionCreators'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import style from './MainPage.module.css';
import List from '../list/List';


export default function MainPage() {
  const count = useSelector(state => state.favorites)
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log('hello');
    dispatch(fetchFlightAC())

  }, [dispatch])

  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
        <button onClick={() => {
          dispatch({ type: 'RESET' });
          // dispatch(logoutFavoritesAC());
          console.log('hi');
          history.push('/');
        }}>Выйти</button>
      <Container className={`${style.main}`} style={{ position: 'relative', height: '100%' }}>
        <p style={{ color: '424242', fontSize: '17px', paddingBottom: '1%' }}>Добавлено в избранное: {count.length} рейсов</p>
        <List />
      </Container>
    </div>
  )
}