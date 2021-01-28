import { useEffect, useState } from 'react';
import style from './Login.module.css';
import { Button, Form } from 'react-bootstrap';
import { startFetch } from '../../redux/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function FormAuth() {

  const [isUser, setIsUser] = useState(true);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user?.email ? state.user : null);
  useEffect(() => {
    if (user) {
      history.push('/main');
    }
  }, [user]);
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.children[1].children[1].value;
    const password = e.target.children[2].children[1].value;
    dispatch(startFetch({ email, password }));
    user ? setIsUser(true) : setIsUser(false);
  };

  //  VALIDATION FORM
  const validationsSchema = yup.object().shape({
    email: yup.string().email('Введите верный email').required('Поле обязательно для заполнения'),
    password: yup.string().typeError('Должно быть строкой').min(8, 'Пароль должен быть не менее 8-ми символов').required('Поле обязательно для заполнения'),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
        }) => (
          <div>
            <Form onSubmit={submitHandler}>
              <h3 className={style.h3}>Simple Flight Check</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className={style.label}>Email address</Form.Label>
                <Form.Control
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email} />
                {touched.email && errors.email && <p className={style.errorMsg}>{errors.email}</p>}
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className={style.labe}>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password} />
                {touched.password && errors.password &&
                  <p className={style.errorMsg}>{errors.password}</p>}
                {!isUser ? <p className={style.errorMsg}>Неверный email или пароль!</p> : null}
              </Form.Group>
              <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button variant="primary" type="submit">
                Войти
							</Button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}