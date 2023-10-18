import { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function DomainSearch() {
  const [userDomain, setUserDomain] = useState("");
  const [emailData, setEmailData] = useState({ emails: [] });
  const [formSubmitted, setFormSubmitted] = useState(false);

  //API KEY
  const KEY = "ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e";

  //Domain Search API Call
  const getDomainSearch = (e) => {
    e.preventDefault();

    if (!userDomain) {
      alert("Domain is empty. Please enter a domain.");
      return;
    }

    axios.get(`https://api.hunter.io/v2/domain-search?domain=${userDomain}&api_key=${KEY}`)
      .then((response) => {
        const emailData = response.data.data.emails;
        setEmailData({ emails: emailData });
        setFormSubmitted(true);
      }
    );
  };

  return (
    <section>
      <div className="container">
        <div className="container-title">
          <h1 className="h1-color">Domain Search</h1>
        </div>
        <div className="container-text">
          <p>Search any company.</p>
        </div>
        <form className="form" onSubmit={getDomainSearch}>
          <div className="form-title">
            <p>Discover emails from the company.</p>
          </div>
          <input
            placeholder="Company.com"
            className="form-input"
            value={userDomain}
            onChange={(e) => setUserDomain(e.target.value)}
          />
          <button className="form-submit">Search</button>
        </form>
        {formSubmitted && (
          <div className="container-result">
            <ul className="result-ul">
              {emailData.emails.map((email, index) => (
                <li className="result-li" key={index}>
                  <p className="result-bold">{email.first_name} {email.last_name}</p>
                  <p className="result">{email.value}</p>
                  <p className="result">Confidence: {email.confidence}%</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default DomainSearch;