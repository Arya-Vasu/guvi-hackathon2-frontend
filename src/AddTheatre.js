export function AddTheatre() {
    return (
        <div className="form">
            <div className="details">
                <label for="theatre_name">Theatre Name</label>
                <input type="text" id="theatre_name" reqired></input>
            </div>
            <div className="details">
                <label for="theatre_poster">Theatre Poster Link</label>
                <input type="text" id="theatre_poster" reqired></input>
            </div>
            <div className="details">
                <label for="rating">IMDB Rating</label>
                <input type="number" id="rating" reqired></input>
            </div>
            <div className="details">
                <label for="theatre">Theatres to be launched in</label>
                <input type="text" id="theatre" required></input>
            </div>
        </div>
    );
}
