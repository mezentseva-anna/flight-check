import { useSelector, useDispatch } from 'react-redux';
import { fetchFlightAC } from '../../redux/actionCreators'
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

    dispatch(fetchFlightAC())
  }, [dispatch])

  return (
    <div className='d-flex flex-column justify-content-center align-items-end' >
      <p className={style.logout} onClick={() => {
        dispatch({ type: 'RESET' });
        history.push('/');
      }}>Выйти
        <img className={style.logoutImg} src="/img/logout.png" alt="logout" />
      </p>
      <Container className={style.main} style={{ maxHeight: '70vh', overflowY: 'scroll', maxWidth: '40vw' }}>
        <p className={style.header}>
          Вылеты
          <img style={{margin: '0 0.5vw'}}src="/img/Vector111.png" alt="arrow"/>
          SVO - JFK
          </p>
        <p style={{ marginTop: '3vh', color: '424242', fontSize: '17px', paddingBottom: '1%' }}>Добавлено в избранное: <span style={{ color: '#1157A7', fontWeight: 'bold' }}>{count ? count.length : 0}</span> рейсов</p>
        <List />
      </Container>
    </div>
  )
}