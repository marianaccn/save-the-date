import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LandingPage } from './components/Pages/LandingPage';
import { LoginPage } from './components/Pages/LoginPage';
import { RegistrationPage } from './components/Pages/RegistrationPage';

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/registrationPage" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />

          <Route path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
