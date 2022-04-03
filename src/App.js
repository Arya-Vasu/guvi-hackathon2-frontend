import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import { Movies } from "./Movies";
import { GlobalFooter } from "./GlobalFooter";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { SelectShow } from "./SelectShow";
import { ContactUs } from "./ContactUs";
import { PageNotFound } from "./PageNotFound";
import { SeatBooking } from "./SeatBooking";
import { Admin } from "./Admin";

export default function App() {

  // Below is the Mock data, API to replace it -

  const movies = [
    {
      id: "100",
      name: "Attack Part 1",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMzQxMGMzM2YtMWEwNi00ZGRkLWI1ZmMtMWJlZGE4NmIyMzBlXkEyXkFqcGdeQXVyOTE2NDU1NDM@._V1_.jpg",
      rating: 7.1,
    },
    {
      id: "101",
      name: "The Kashmir Files",
      poster:
        "https://i2.cinestaan.com/image-bank/1500-1500/198001-199000/198683.jpg",
      rating: 8.1,
    },
    {
      id: "102",
      name: "RRR: Rise Roar Revolt",
      poster:
        "https://dmerharyana.org/wp-content/uploads/2022/03/RRR-collection.png",
      rating: 9.1,
    },
    {
      id: "103",
      name: "Morbius",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYjlhNTA3Y2ItYjhiYi00NTBiLTg5MDMtZDJjMDZjNzVjNjJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      rating: 4.9,
    },
  ];

  return (
    <div className="App">
      <div className="global-header">
        <ul className="header-list">
          <li>
            <Link to="/admin" className="linkedpath">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/movies" className="linkedpath">
              Book Ticket
            </Link>
          </li>
          <li>
            <Link to="/sign-in" className="linkedpath">
              Sign-In/Up
            </Link>
          </li>
        </ul>

        <Switch>
          <Route path="/admin">
            <Admin />
            <GlobalFooter />
          </Route>
          <Route path="/sign-in">
            <div className="sign-in-page">
              <SignIn />
            </div>
            <GlobalFooter />
          </Route>
          <Route path="/sign-up">
            <div className="sign-up-page">
              <SignUp />
            </div>
            <GlobalFooter />
          </Route>
          <Route path="/movies/:name/:name1/:time1">
            <h2> Hello!</h2>
            <SeatBooking />
            <GlobalFooter />
          </Route>
          <Route path="/movies/:name">
            <div className="show-selection-page">
              <SelectShow />
            </div>
            <GlobalFooter />
          </Route>
          <Route path="/contact-Us">
            <div className="contactus-page">
              <ContactUs />
            </div>
            <GlobalFooter />
          </Route>
          <Route path="/movies">
            <div className="movies-list">
              {movies.map((movie) => (
                <Movies
                  name={movie.name}
                  poster={movie.poster}
                  rating={movie.rating}
                />
              ))}
            </div>
            <GlobalFooter />
          </Route>
          <Route path="/">
            <div>
              <h2>Please Sign-In to Book Ticket.</h2>
            </div>
          </Route>
          <Route path="**">
            <PageNotFound />
            <GlobalFooter />
          </Route>
        </Switch>
      </div>
    </div>
  );
}


