export function AddMovie() {
    return (
        <div className="form">
            <div className="details">
                <label for="name">Movie Name</label>
                <input type="text" id="name" reqired></input>
            </div>
            <div className="details">
                <label for="poster">Poster Link</label>
                <input type="text" id="poster" reqired></input>
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
