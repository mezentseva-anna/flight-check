import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import MainPage from './components/main/MainPage';

function App() {

  return (
    <>
      <Switch>

          <Route path='/main' component={MainPage} />
          <Route path='/' component={Login} />
     
      </Switch>
    </>
  );
}

export default App;
