import { Link } from "react-router-dom";

export function GlobalFooter() {
  return (
    <div className="footer">
      <p>
        Please note that this App is created by Vasu Arya as a part of
        Hackathon.
      </p>
      <Link to="/contact-Us" className="linkedpath">
        <strong>Contact Us</strong>
      </Link>
    </div>
  );
}
