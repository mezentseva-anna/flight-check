import style from './Login.module.css';
import { useState } from 'react'
import FormAuth from './FormAuth';

export default function Login() {

  const [auth, setAuth] = useState(false);


  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <div className={`${style.img}`} style={{ height: '100vh', width: '100vw' }}>
        <div className={`${style.rgba}`} style={{ height: '100vh' }}></div>
      </div>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '80vh' }}>
        <div className={`${style.formBg}`}>
          <FormAuth />
        </div>
      </div>
    </div>
  )

}
