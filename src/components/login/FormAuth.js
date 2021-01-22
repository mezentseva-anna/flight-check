import style from './Login.module.css'
import { Button, Form } from 'react-bootstrap';


export default function FormAuth() {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    const email = e.target.children[1].children[1].value;
    const password = e.target.children[2].children[1].value;
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(response => {
        console.log(response);
        console.log(email, password);

      })

  }
  return (
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
  )
}
