import { useSelector, useDispatch } from 'react-redux';
import { fetchFlightAC } from '../../redux/actionCreators'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import style from './MainPage.module.css';
import List from '../list/List';
import useAuth from '../useAuth/useAuth';
import { dateToString } from '../../utils/variables';

export default function MainPage() {
  const count = useSelector(state => state.favorites)
  const dispatch = useDispatch();
  const history = useHistory();
  const date = new Date(Date.now());
  const day = dateToString(date, { day: 'numeric' });
  const month = dateToString(date, { month: 'long' });
  const year = dateToString(date, { year: 'numeric' })

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
      <Container className={style.main}>
        <div className={style.containerHead}>
          <p className={style.header}>
            Вылеты
          <img className={style.arrow} src="/img/Vector111.png" alt="arrow" />
          SVO - JFK
          </p>
          <div className={style.dateContainer}>
            <div>
              <p className={style.date}>{day} {month} {year} </p>
            </div>
            <div>
              <img className={style.calendar} src="/img/Group9.png" alt="calendar" />
            </div>
          </div>
        </div>
        <p className={style.favorites}>Добавлено в избранное: <span className={style.count} >{count ? count.length : 0}</span> рейсов</p>
        <div className={style.scroll}>
          <List />
        </div>
      </Container>
    </div>
  )
}
