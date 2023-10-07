import { useState } from "react";
import axios from "axios";
import "../styles/styles.css";

function DomainSearch() {
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
        console.log(emailData);

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
      }
    );
  };

  return (
    <section>
      <div className="container">
        <div className="container-title">
          <h1>Domain Search</h1>
        </div>
        <div className="container-text">
          <p>Explore any domain to access information, including details about the company's social media presence, key industry insights, and physical address. Additionally, retrieve the first 10 email addresses associated with the domain.</p>
        </div>
        <input
          type="text"
          placeholder="Domain"
          className="container-input"
          value={userDomain}
          onChange={(e) => setUserDomain(e.target.value)}
        />
        <button className="container-button" onClick={getDomainSearch}>Email Count</button>
        <div className="container-result">{domainSearch}</div>
        <ul>
          {Array.isArray(emailData.emails) && emailData.emails.map((email, index) => {
            return (
              <li className="container-list" key={index}>
                <span>
                  <p>Email: {email.value}</p>
                  <p>Name: {email.first_name} {email.last_name}</p>
                  <p>Confidence: {email.confidence}</p>
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