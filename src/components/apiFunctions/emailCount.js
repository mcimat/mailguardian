import { useState } from "react";
import axios from "axios";

function EmailCount() {
  const [error, setError] = useState(null);
  const [emailCount, setEmailCount] = useState("");
  const [userDomain, setUserDomain] = useState("");

  //Email Count API Call
  const getEmailCount = () => {
    axios.get(`https://api.hunter.io/v2/email-count?domain=${userDomain}`)
      .then((response) => {
        const emailCount = response.data.data;
        const total = emailCount.total;

        const domain = response.data.meta.params.domain;

        setEmailCount(`Total emails: ${total}`
          + " " +
          `Searched Site: ${domain}`);
      })
      .catch((error) => {
        setError("Please enter a domain.");
      });
  };

  return (
    <section>
      <div className="container">
        <div className="container-title">
          <h1>Email Count</h1>
        </div>
        <div className="container-text">
          <p>Access the quantity of email addresses identified within a designated website domain effortlessly. Our tool offers a seamless and secure experience, available to you without any limitations, and it operates independently from your search and verification quotas, ensuring your usage remains unaffected.</p>
        </div>
        <div className="container-parameters">
          <input
            type="text"
            placeholder="Domain"
            className="container-input"
            value={userDomain}
            onChange={(e) => setUserDomain(e.target.value)}
          />
          <button className="container-button" onClick={getEmailCount}>Email Count</button>
          {<p className="error-text">{error}</p>}
          <div className="container-result">{emailCount}</div>
        </div>
      </div>
    </section>
  );
}

export default EmailCount;