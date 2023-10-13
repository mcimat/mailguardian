import { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function DomainSearch() {
  const [error, setError] = useState(null);
  const [domainSearch, setDomainSearch] = useState("");
  const [userDomain, setUserDomain] = useState("");
  const [emailData, setEmailData] = useState({ emails: [] });

  //API KEY
  const KEY = "ebaec51e7fdde3fc15a0ab2dbfe22e0c3ea60d2e";

  //Domain Search API Call
  const getDomainSearch = () => {
    axios.get(`https://api.hunter.io/v2/domain-search?domain=${userDomain}&api_key=${KEY}`)
      .then((response) => {
        const emailData = response.data.data.emails;
        setEmailData({ emails: emailData });

        const domainSearch = response.data.data;
        const organization = domainSearch.organization;
        const industry = domainSearch.industry;

        //Address Information
        const postalCode = domainSearch.postal_code;
        const state = domainSearch.state;
        const street = domainSearch.street;

        //Socials
        const facebook = domainSearch.facebook;
        const instagram = domainSearch.instagram;
        const twitter = domainSearch.twitter;
        const youtube = domainSearch.youtube;

        setDomainSearch(`Organization: ${organization}, Industry: ${industry}, Address: ${street}, ${state}, ${postalCode}, Facebook: ${facebook}, Instagram: ${instagram}, Twitter: ${twitter}, YouTube: ${youtube}`);
      })
      .catch((error) => {
        setError("Please enter a domain.");
      });
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
        <input
          type="text"
          placeholder="Domain"
          className="container-input"
          value={userDomain}
          onChange={(e) => setUserDomain(e.target.value)}
        />
        <button className="container-button" onClick={getDomainSearch}>Search</button>
        {<p className="error-text">{error}</p>}
        <div className="container-result">{domainSearch}</div>
        <ul className="container-ul">
          {Array.isArray(emailData.emails) && emailData.emails.map((email, index) => {
            return (
              <li className="container-li" key={index}>
                <span>
                  <p className="container-result">Email: {email.value}</p>
                  <p className="container-result">Name: {email.first_name} {email.last_name}</p>
                  <p className="container-result">Confidence: {email.confidence}</p>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default DomainSearch;