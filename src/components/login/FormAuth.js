import { useEffect } from 'react';
import style from './Login.module.css'
import { Button, Form } from 'react-bootstrap';
import { addUserAC, startFetch } from '../../redux/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


export default function FormAuth() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user?.email ? state.user : null)
  // const { user } = JSON.parse(localStorage.getItem('state') ? localStorage.getItem('state') : false);
  useEffect(() => {
    if (user) {
      history.push('/main')
    }
  }, [user])
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.children[1].children[1].value;
    const password = e.target.children[2].children[1].value;
    dispatch(startFetch({ email, password }))
  }

  return (
    <>
      <Form onSubmit={submitHandler}>
        <h3 className={`${style.h3}`}>Simple Flight Check</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className={`${style.label}`}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required
            pattern='[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+' />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className={`${style.label}`}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" pattern='[a-zA-Z0-9]+'
            minLength="6" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Войти
      </Button>
      </Form>
    </>
  )
}
