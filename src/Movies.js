import { useHistory } from "react-router-dom";

export function Movies({ name, poster, rating }) {
  const styles = { background: rating > 8 ? "orange" : "lightgreen" };
  const history = useHistory();

  return (
    <div className="movie-card">
      <img className="img" src={poster} alt={name} />
      <div className="movie-details">
        <p className="movie-name">{name}</p>
        <div className="rating" style={styles}>
          <p className="movie-rating">{rating}</p>
        </div>
        <button className="action" onClick={() => {history.push("/movies/"+name)}}>Book</button>
      </div>
    </div>
  );
}
