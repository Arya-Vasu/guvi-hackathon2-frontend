import {Link, Route, Switch} from 'react-router-dom'
import { AddMovie } from './AddMovie';
import { AddTheatre } from './AddTheatre';
import { RemoveMovie } from './RemoveMovie';

export function Admin() {
  return (
    <div className="admin-page">
        <h2>Hello, Admin!</h2>
        <p>What do you want to do?</p>
        <ul className="to-do-list">
            <li>
                <Link className="admin-list" to="/admin/add-movie">Add Movie to Theatre</Link>
            </li>
            <li>
                <Link className="admin-list" to="/admin/remove-movie">Remove Movie from theatre</Link>
            </li>
            <li>
                <Link className="admin-list" to="/admin/add-theatre">Add new Theatre</Link>
            </li>
            <li>
                <Link className="admin-list" to="/admin/reduce-seats">Reduce seats for a particular Movie</Link>
            </li>
        </ul>

        <Switch>
            <Route path="/admin/add-movie">
                <AddMovie />
            </Route>
            <Route path="/admin/addtheatre">
                <AddTheatre />
            </Route>
            <Route path="/admin/remove-movie">
                <RemoveMovie />
            </Route>
            <Route path="/admin/reduceseats">
                <ReduceSeats />
            </Route>
        </Switch>
    </div>
  );
}

function ReduceSeats() {
    return(
        <div className="form">
            <div className="details">
                <label for="movie_name">Movie Name</label>
                <input type="text" id="movie_name" reqired></input>
            </div>
            <div className="details">
                <label for="theatre_name">Theatre Name</label>
                <input type="text" id="theatre_name" reqired></input>
            </div>
            <div className="details">
                <label for="seats">No. of seats to be removed</label>
                <input type="text" id="seats" reqired></input>
            </div>          
        </div>
    )
}