import { useSelector, useDispatch } from 'react-redux';
import { addFavoritesAC, fetchFlightAC, logoutFavoritesAC, logoutUserAC } from '../../redux/actionCreators'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import style from './MainPage.module.css';
import List from '../list/List';
import CarouselComponent from '../carousel/Carousel';


export default function MainPage() {
  const count = useSelector(state => state.favorites)
  const dispatch = useDispatch();
  const history = useHistory();

// const flights = localStorage.getItem('flights', )

  useEffect(() => {

    dispatch(fetchFlightAC())
  }, [dispatch])

  return (
    <div className="container">
    <div className='d-flex flex-column justify-content-center align-items-end' >
        <button style={{margin:'3vh 0'}} onClick={() => {
          dispatch({ type: 'RESET' });
          console.log('hi');
          history.push('/');
        }}>Выйти</button>
      <Container className={style.main} style={{maxHeight:'70vh',overflowY:'scroll'}}>
        <p style={{ marginTop:'3vh', color: '424242', fontSize: '17px', paddingBottom: '1%' }}>Добавлено в избранное: <span style={{color:'#1157A7',fontWeight:'bold'}}>{count.length}</span> рейсов</p>
        <List />
      </Container>
    </div>
    </div>
  )
}