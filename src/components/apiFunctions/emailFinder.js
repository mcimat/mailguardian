import { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function EmailFinder() {
  const [emailFinder, setEmailFinder] = useState("");
  const [userDomain, setUserDomain] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //API KEY
  const KEY = "ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e";

  //Email Finder API Call
  const getEmailFinder = (e) => {
    e.preventDefault()
    axios.get(`https://api.hunter.io/v2/email-finder?domain=${userDomain}&first_name=${firstName}&last_name=${lastName}&api_key=${KEY}`)
      .then((response) => {
        const emailFinder = response.data.data;
        const email = emailFinder.email;
        const company = emailFinder.company;
        const position = emailFinder.position;
        const first = emailFinder.first_name;
        const last = emailFinder.last_name;

        setEmailFinder(`Email found: ${email}, Company: ${company}, Position: ${position}`
          + " " +
          `First: ${first}, Last: ${last}`);
      }
    );
  };

  return (
    <section>
      <div className="container">
        <div className="container-title">
          <h1>Email Finder</h1>
        </div>
        <div className="container-text">
          <p>random text here random text here random text here random text here random text here random text here random text here random text here random text here random text here random text here random text here random text here random text here random text here</p>
        </div>
        <form onSubmit={getEmailFinder}>
          <input
            type="text"
            placeholder="Domain"
            className="container-input"
            value={userDomain}
            onChange={(e) => setUserDomain(e.target.value)}
          />
          <input
            type="text"
            placeholder="First Name"
            className="container-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="container-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button className="container-button" type="submit">Find Email</button>
        </form>
        <div className="container-result">{emailFinder}</div>
      </div>
    </section>
  );
}

export default EmailFinder;