import style from './Login.module.css';
import FormAuth from './FormAuth';

export default function Login() {

  return (
    <>
      <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <div className={style.img}>
          <div className={style.rgba}></div>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '80vh' }}>
          <div className={style.formBg}>
            <FormAuth />
          </div>
        </div>
      </div>
    </>
  )
}
