import { ListGroup } from 'react-bootstrap';
import Card from '../card/Card';
import { useSelector } from 'react-redux';

export default function List() {

  const flights = useSelector(state => state.flights)

  return (
    <div>
      <ListGroup variant="flush">
        {flights.map(el =>
          <ListGroup.Item><Card key={el.id} data={el.data} id={el.id} flag={el.flag} /></ListGroup.Item>
        )}
      </ListGroup>
    </div>
  )
}
