import { useDispatch } from 'react-redux';
import { addFavoriteAC, changeFlagAC, deleteFavoriteAC } from '../../redux/actionCreators';
import style from './Card.module.css';

export default function Card({ id, data, flag }) {

  const dispatch = useDispatch();

  let year, month, day, time

  if (data) {
    year = new Date(data.Quotes[0].QuoteDateTime).toLocaleString('en', { year: 'numeric' });
    month = new Date(data.Quotes[0].QuoteDateTime).toLocaleString('en', { month: 'long' });
    day = new Date(data.Quotes[0].QuoteDateTime).toLocaleString('en', { day: 'numeric' });
    time = new Date(data.Quotes[0].QuoteDateTime).toLocaleTimeString().slice(0, -3);;
  }

  const favorites = () => {
    dispatch(changeFlagAC(id))
    if (!flag) dispatch(addFavoriteAC(id))
    else dispatch(deleteFavoriteAC(id))
  }

  return (
    <div className='d-flex justify-content-center align-items-center' >
      <div className={style.img}>
      </div>
      <div className={style.information}>
        <p className={style.text}>{data && data.Places[1].CityName} ({data && data.Places[1].IataCode}) <img src="/img/Group4.png" alt="arrow" />
          {data && data.Places[0].CityName} ({data && data.Places[0].IataCode})</p>
        <p className={style.date}>{day} {month}, {year} — {time} </p>
        <p className={style.date}>{data && data.Carriers[0].Name}</p>
      </div>
      <div onClick={favorites} className={style.price}>
        <div className={!flag ? style.heart : style.heart_colored}></div>
        <div style={{ textAlign: 'center' }}>
          <p className={style.priceText}>Price: <span className={style.priceValue}>{data && data.Quotes[0].MinPrice} {data.Currencies[0].Symbol}</span></p>
        </div>
      </div>
    </div>
  )
}
