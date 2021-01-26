import { ListGroup } from 'react-bootstrap';
import Card from '../card/Card';

export default function List() {
  return (
    <div>
      <ListGroup variant="flush">
        <ListGroup.Item><Card /></ListGroup.Item>
        <ListGroup.Item><Card /></ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </div>
  )
}
