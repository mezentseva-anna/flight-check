import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavoriteAC, deleteFavoriteAC } from '../../redux/actionCreators';
import style from './Card.module.css';

export default function Card() {

  const [condition, setCondition] = useState(false);
  const dispatch = useDispatch();

  const flights = useSelector(state => state.flights)
  console.log(flights);
  let year, month, day, time
  const state = (flights.length !== 0)

  if (flights.length !== 0) {
    year = new Date(flights.Quotes[0].QuoteDateTime).toLocaleString('en', { year: 'numeric' });
    month = new Date(flights.Quotes[0].QuoteDateTime).toLocaleString('en', { month: 'long' });
    day = new Date(flights.Quotes[0].QuoteDateTime).toLocaleString('en', { day: 'numeric' });
    time = new Date(flights.Quotes[0].QuoteDateTime).toLocaleTimeString().slice(0, -3);;
  }

  const favorites = () => {
    console.log(condition);
    setCondition(!condition);
    console.log(condition);
    // if (condition) dispatch(addFavoriteAC)
    // else dispatch(deleteFavoriteAC)
  }

  return (
    <div className='d-flex justify-content-center align-items-center' >
      <div className={`${style.img}`}>
        <div className={`${style.rgba}`}></div>
      </div>
      <div className={`${style.information}`}>
        <p className={`${style.text}`}>{state && flights.Places[1].CityName} ({state && flights.Places[1].IataCode}) <img src=".img/Group 4.png" alt="arrow" />
          {state && flights.Places[0].CityName} ({state && flights.Places[0].IataCode})</p>
        <p className={`${style.date}`}>{day} {month}, {year} — {time} </p>
        <p className={`${style.date}`}>{state && flights.Carriers[1].Name}</p>
      </div>
      <div onClick={() => favorites()} className={`${style.price}`}>
        <div className={`${style.heart}`}></div>
        <div style={{ textAlign: 'center' }}>
          <p className={`${style.priceText}`}>Price: <span className={`${style.priceValue}`}>{state && flights.Quotes[0].MinPrice}</span></p>
        </div>
      </div>
    </div>
  )
}
