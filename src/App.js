import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home.page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetail from './pages/movie-detail/movie-detail.page';
import Header from './components/header/header.component';
import Booking from './pages/booking/booking.page';
import SignUp from './pages/sign-up/sign-up.page';
import SignIn from './pages/sign-in/sign-in.page';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Switch>
          {/* path="/" <=> url = http://localhost:3000/ */}
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/movie-detail/:movieCode">
            <MovieDetail/>
          </Route>
          <Route path="/booking">
            <Booking/>
          </Route>
          <Route path="/sign-up">
            <SignUp/>
          </Route>
          <Route path="/sign-in">
            <SignIn/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
