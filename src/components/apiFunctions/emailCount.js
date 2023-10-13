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

        setEmailCount(`Email Count: ${total}`
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
          <h1 className="h1-color">Email Count</h1>
        </div>
        <div className="container-text">
          <p>Access the quantity of email addresses identified within a designated website domain effortlessly. Our tool offers a seamless and secure experience, available to you without any limitations, and it operates independently from your search and verification quotas, ensuring your usage remains unaffected.</p>
        </div>
        <div>
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
        <div className="container-title">
          <h1>What is the Email Count tool?</h1>
        </div>
        <div className="container-info">
          <p>This tool serves as a valuable resource for domain testing without consuming a search or verification request. Its purpose is to assess a domain name, ensuring the presence of associated email addresses. Please ensure that the Root Domain is being entered properly.</p>

          <h3> Can I get more detailed information about the individual emails associated with the domain?</h3>
          <p>Unfortunately, the Email Count feature exclusively presents the total number of emails associated with the domain and does not provide a list of individual email addresses. However, after confirming the total email count for a domain, you can proceed to utilize other functionalities like Email Finder and Domain Search to obtain more detailed information about specific individuals.</p>

          <h3>What is the purpose of knowing the email count for a domain?</h3>
          <p>Understanding the email count for a domain serves multiple valuable purposes, including evaluating the domain's scale and outreach potential, as well as validating the trustworthiness of a website. The primary objective of this tool is to ensure accurate domain entry, preventing the wastage of requests when utilizing other tools like Email Verifier, Email Finder, and Domain Search, which rely on these requests.</p>

          <h3>What happens if I enter an invalid domain or make a mistake in the input field?</h3>
          <p>If you enter an invalid or incorrect domain, the tool will not provide the result 'Email Count: 0 Entered Site: null'. If only the  Please double-check your entry for accuracy. An example of a working domain would be 'apple.com'</p>

          <h3>Is there a limit on how many email counts I can perform for a domain?</h3>
          <p>There are no limits on the number of email counts you can perform for a domain.</p>
        </div>
      </div>
    </section>
  );
}

export default EmailCount;