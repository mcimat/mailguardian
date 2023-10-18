import { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function EmailFinder() {
  const [emailFinder, setEmailFinder] = useState("");
  const [userDomain, setUserDomain] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  //API KEY
  const KEY = "ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e";

  function checkEmptyInput(inputValue, errorMessage) {
    if (!inputValue) {
      alert(errorMessage);
      return true;
    }
    return false;
  }

  //Email Finder API Call
  const getEmailFinder = (e) => {
    e.preventDefault()

    if (checkEmptyInput(userDomain, "Domain is empty. Please enter a domain.")
      || checkEmptyInput(firstName, "First Name is empty. Please enter a first name.")
      || checkEmptyInput(lastName, "Last Name is empty. Please enter a last name.")) {
      return;
    }

    axios.get(`https://api.hunter.io/v2/email-finder?domain=${userDomain}&first_name=${firstName}&last_name=${lastName}&api_key=${KEY}`)
      .then((response) => {
        const emailFinder = response.data.data;
        setEmailFinder(emailFinder);
        setFormSubmitted(true);
      }
    );
  };

  return (
    <section>
      <div className="container">
        <div className="container-title">
          <h1 className="h1-color">Email Finder</h1>
        </div>
        <div className="container-text">
          <p>Find any email.</p>
        </div>
        <form className="form" onSubmit={getEmailFinder}>
          <p className="form-title">Track down that email you've been hunting for.</p>
          <input
            placeholder="Company.com"
            className="form-input"
            value={userDomain}
            onChange={(e) => setUserDomain(e.target.value)}
          />
          <br />
          <input
            placeholder="First Name"
            className="form-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <input
            placeholder="Last Name"
            className="form-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit" className="form-submit">Find Email</button>
        </form>
        {formSubmitted && (
          <div className="container-result">
            <div className="result-box">
              <div className="result-name">
                <p className="result-bold">{emailFinder.first_name} {emailFinder.last_name}</p>
                <p className="result">{emailFinder.email}</p>
                <p className="result">{emailFinder.position}</p>
                <p className="result">Score: {emailFinder.score}%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default EmailFinder;