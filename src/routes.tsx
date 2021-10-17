import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { RegistrationPage } from './components/RegistrationPage';

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/registrationPage" component={RegistrationPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
