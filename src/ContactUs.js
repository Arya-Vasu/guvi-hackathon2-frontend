import { useState } from "react";
import { useHistory } from "react-router-dom";

export function ContactUs() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="contactus">
      <h2>Contact Us</h2>
      <div className="my-details">
        <p>Email us at: vasu.arya97@gmail.com</p>
        <p>Contact us at: +91 8439 159 959</p>
      </div>
      <h3>You may drop your query below:</h3>
      <form className="user-details">
        <div className="input-fields">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="input-fields">
          <label for="mobile">Contact No.</label>
          <input
            type="number"
            id="mobile"
            placeholder="Mobile No"
            required
            onChange={(event) => setContact(event.target.value)}
          ></input>
        </div>
        <div className="input-fields">
          <label for="comment">Please drop your query</label>
          <textarea
            rows="5"
            placeholder="Write query here..."
            required
            max="350"
            onChange={(event) => setQuery(event.target.value)}
          ></textarea>
        </div>

        <button
          className="submit-button"
          onClick={() => {
            const query = {
              name: name,
              contact: contact,
              query: query,
            };
            fetch("", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(query),
            })
              .then((data) => data.json())
              .then(() => history.push("/"));
          }}
        >
          &nbsp; Submit &nbsp;
        </button>
      </form>
    </div>
  );
}
