import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './components/Pages/HomePage';
import { LandingPage } from './components/Pages/LandingPage';
import { LoginPage } from './components/Pages/LoginPage';
import { ProfilePage } from './components/Pages/ProfilePage';
import { RegistrationPage } from './components/Pages/RegistrationPage';

export function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/registrationPage" component={RegistrationPage} />
          <Route path="/profilePage" component={ProfilePage} />
          <Route path="/homePage" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
